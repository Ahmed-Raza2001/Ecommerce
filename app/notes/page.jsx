"use client";
import { createClient } from "@/app/utils/supabase/client";
import { useState, useEffect } from "react";
const NotesPage = () => {
  const supabase = createClient();
  const [invoices, setInvoices] = useState([]);
  const [newInvoices, setNewInvoices] = useState([]);

  const getInvoices = async () => {
    const { data: restaurantOrder } = await supabase
      .from("restaurantOrder")
      .select("*");
    setInvoices(restaurantOrder);
  };

  const subscribeToChanges = async () => {
    supabase
      .channel("supabase_realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "restaurantOrder" },
        (payload) => {
          setNewInvoices(payload);
        }
      )
      .subscribe();
  };

  subscribeToChanges();

  useEffect(() => {
    getInvoices();
  }, [newInvoices]);

  return (
    <div>
      {invoices?.map((user) => {
        return <li key={user.id}>{user.fullName}</li>;
      }) || []}
      This is a client component
    </div>
  );
};

export default NotesPage;
