import supabase from "@/supabase";
import router from "@/router";

export default {
  async getDataList() {
    const { data: list } = await supabase.from("user_landing").select();
    this.datalist = list;
  },

  async inputList(name, email, status) {
    const { data: list, error } = await supabase
      .from("user_landing")
      .select()
      .eq("email", email);
    if (list.length == 0) {
      const { data: iterasi, errorr } = await supabase
        .from("user_landing")
        .select("id");

      var idlanding = 1;

      if (iterasi.length != 0) {
        idlanding = iterasi[iterasi.length + idlanding];
      }

      await supabase.from("user_landing").insert({
        id: idlanding,
        name: name,
        email: email,
        status: status,
      });

      router.push("/success");
    } else {
      alert("Email yang anda masukkan sudah terdaftar");
    }
  },
};
