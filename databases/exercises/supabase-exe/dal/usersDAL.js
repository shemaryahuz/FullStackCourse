import supabase from "../database/db.js";

export async function getUsers() {
  const { data, error } = await supabase
  .from("users")
  .select("*");

  if (error) {
    console.error("Error fetching users:", error);
    return [];
  }
  return data;
};


export async function getUser(username, password) {
    const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("username" , username)
    .eq("password", password)
    .single();

    if (error){
      console.error("Error fetching user:", error);
      return;
    }
    return data;
}