import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { AdminUtils } from "@/utils/adminUtils";
import { 
  Users, 
  Search, 
  UserMinus, 
  UserPlus, 
  RefreshCw,
  Phone,
  Calendar,
  Filter
} from "lucide-react";

interface Subscriber {
  id: string;
  phone: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  last_notification_sent: string | null;
}

export function SubscriberManager() {
  const { toast } = useToast();
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [filteredSubscribers, setFilteredSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");

  useEffect(() => {
    loadSubscribers();
  }, []);

  useEffect(() => {
    filterSubscribers();
  }, [subscribers, searchTerm, statusFilter]);

  const loadSubscribers = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('whatsapp_subscribers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubscribers(data || []);
    } catch (error) {
      console.error('Error loading subscribers:', error);
      toast({
        title: "خطأ في تحميل البيانات",
        description: "فشل في تحميل قائمة المشتركين",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const filterSubscribers = () => {
    let filtered = subscribers;

    // فلترة حسب البحث
    if (searchTerm) {
      filtered = filtered.filter(sub => 
        sub.phone.includes(searchTerm)
      );
    }

    // فلترة حسب الحالة
    if (statusFilter === "active") {
      filtered = filtered.filter(sub => sub.is_active);
    } else if (statusFilter === "inactive") {
      filtered = filtered.filter(sub => !sub.is_active);
    }

    setFilteredSubscribers(filtered);
  };

  const toggleSubscriberStatus = async (subscriber: Subscriber) => {
    try {
      const result = subscriber.is_active 
        ? await AdminUtils.deactivateSubscriber(subscriber.phone)
        : await AdminUtils.reactivateSubscriber(subscriber.phone);

      if (result.success) {
        toast({
          title: subscriber.is_active ? "تم إلغاء التفعيل" : "تم التفعيل",
          description: `تم ${subscriber.is_active ? 'إلغاء تفعيل' : 'تفعيل'} المشترك بنجاح`,
        });
        
        // تحديث القائمة
        await loadSubscribers();
      } else {
        throw new Error("فشل في تحديث حالة المشترك");
      }
    } catch (error) {
      toast({
        title: "خطأ",
        description: "فشل في تحديث حالة المشترك",
        variant: "destructive"
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStats = () => {
    const total = subscribers.length;
    const active = subscribers.filter(sub => sub.is_active).length;
    const inactive = total - active;
    return { total, active, inactive };
  };

  const stats = getStats();

  return (
    <div className="space-y-6">
      {/* إحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي المشتركين</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">المشتركين النشطين</CardTitle>
            <UserPlus className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.active}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">غير النشطين</CardTitle>
            <UserMinus className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.inactive}</div>
          </CardContent>
        </Card>
      </div>

      {/* أدوات التحكم */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-right">
            <Users className="h-5 w-5" />
            إدارة المشتركين
          </CardTitle>
          <CardDescription className="text-right">
            إدارة قائمة المشتركين في إشعارات WhatsApp
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="البحث برقم الهاتف..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                onClick={() => setStatusFilter("all")}
                size="sm"
              >
                الكل ({stats.total})
              </Button>
              <Button
                variant={statusFilter === "active" ? "default" : "outline"}
                onClick={() => setStatusFilter("active")}
                size="sm"
                className="text-green-600"
              >
                نشط ({stats.active})
              </Button>
              <Button
                variant={statusFilter === "inactive" ? "default" : "outline"}
                onClick={() => setStatusFilter("inactive")}
                size="sm"
                className="text-red-600"
              >
                غير نشط ({stats.inactive})
              </Button>
            </div>

            <Button
              onClick={loadSubscribers}
              variant="outline"
              size="sm"
              disabled={loading}
            >
              {loading ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* قائمة المشتركين */}
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <RefreshCw className="h-6 w-6 animate-spin" />
            </div>
          ) : filteredSubscribers.length > 0 ? (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredSubscribers.map((subscriber) => (
                <div
                  key={subscriber.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium" dir="ltr">{subscriber.phone}</div>
                      <div className="text-sm text-muted-foreground text-right">
                        <Calendar className="h-3 w-3 inline ml-1" />
                        انضم: {formatDate(subscriber.created_at)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant={subscriber.is_active ? "default" : "secondary"}>
                      {subscriber.is_active ? "نشط" : "غير نشط"}
                    </Badge>
                    
                    <Button
                      size="sm"
                      variant={subscriber.is_active ? "destructive" : "default"}
                      onClick={() => toggleSubscriberStatus(subscriber)}
                    >
                      {subscriber.is_active ? (
                        <>
                          <UserMinus className="h-4 w-4 ml-1" />
                          إلغاء تفعيل
                        </>
                      ) : (
                        <>
                          <UserPlus className="h-4 w-4 ml-1" />
                          تفعيل
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Users className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>لا توجد نتائج للبحث</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
