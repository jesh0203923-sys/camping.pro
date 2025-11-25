// === 連線到 Supabase ===
const SUPABASE_URL = "https://zwxgdbwmboukhedgsppo.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpnd2dkYndtYm91a2hlZGdzcHBvIiwiaWF0IjoxNjE0MDM2ODY0LCJleHAiOjE5MzU1MTI4NjR9._UZ7fPquN91Atwz36nqv4LhxJ2T8qy9_5kgc23hsn00";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


// === 讀取 campgrounds 表 ===
async function loadCampgrounds() {
  const { data, error } = await supabase
    .from("campgrounds")
    .select("*");

  if (error) {
    console.error("載入失敗：", error);
    return;
  }

  console.log("Campgrounds:", data);

  // 顯示到畫面（如果你的 index.html 有 #camp-list）
  const list = document.getElementById("camp-list");
  if (list) {
    list.innerHTML = data.map(c => `<li>${c.name} - ${c.location}</li>`).join("");
  }
}

// 自動執行
loadCampgrounds();

