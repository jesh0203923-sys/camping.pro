// === Supabase 設定 ===
const SUPABASE_URL = "https://zwxgdwbmbouhkedgsppo.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3eGdkd2JtYm91aGtlZGdzcHBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NTY2NzUsImV4cCI6MjA3OTIzMjY3NX0.U17RfPquN9I4twz36nqv1LWxJ2T0qy9_5xgc32hsnO0";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// === 讀取資料 ===
async function loadCamps() {
  const { data, error } = await client.from("camps").select("*");

  if (error) {
    console.error("讀取失敗：", error);
    return;
  }

  console.log("營地資料：", data);

  const list = document.getElementById("camp-list");
  list.innerHTML = data.map((c) => `<li>${c.name}</li>`).join("");
}

loadCamps();
