/*
Case
1. Kita sudah tahu role access nya apa aja ***
2. Kita tidak tahu role access nya apa aja
*/

export const accessCategories = {
  lihat: ["organizer"],
  tambah: ["organizer"],
  edit: ["organizer"],
  hapus: ["organizer"],
};
export const accessTalents = {
  lihat: ["organizer"],
  tambah: ["organizer"],
  edit: ["organizer"],
  hapus: ["organizer"],
};
export const accessEvents = {
  lihat: ["organizer"],
  tambah: ["organizer"],
  edit: ["organizer"],
  hapus: ["organizer"],
};
export const accessParticipants = {
  lihat: ["organizer"],
  tambah: ["organizer"],
  edit: ["organizer"],
  hapus: ["organizer"],
};
export const accessPayments = {
  lihat: ["organizer"],
  tambah: ["organizer"],
  edit: ["organizer"],
  hapus: ["organizer"],
};
export const accessOrders = {
  lihat: ["organizer", "admin", "owner"],
  tambah: ["organizer", "admin", "owner"],
  edit: ["organizer", "admin", "owner"],
  hapus: ["organizer", "admin", "owner"],
};
