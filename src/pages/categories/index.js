import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PBreadCrumb from "../../components/BreadCrumb";
import PButton from "../../components/Button";
import PTableWithAction from "../../components/TableWithAction";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/categories/actions";
import PAlert from "../../components/Alert";
import Swal from "sweetalert2";
import { deleteData } from "../../utils/fetch";
import { setNotif } from "../../redux/notif/actions";
import { accessCategories } from "../../const/access";

function Categories() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notif = useSelector((state) => state.notif);

  const categories = useSelector((state) => state.categories); // didapat dari redux

  const [access, setAccess] = useState({
    tambah: false,
    hapus: false,
    edit: false,
  });

  const checkAccess = () => {
    let { role } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};
    const access = { tambah: false, hapus: false, edit: false };
    Object.keys(accessCategories).forEach(function (key, index) {
      if (accessCategories[key].indexOf(role) >= 0) {
        access[key] = true;
      }
    });
    setAccess(access);
  };

  // Akan pertama kali dijalankan saat web di load
  useEffect(() => {
    checkAccess();
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya, Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(`/cms/categories/${id}`);
        dispatch(
          setNotif(
            true,
            "success",
            `Berhasil hapus kategori ${res.data.data.name}`
          )
        );
        dispatch(fetchCategories());
      }
    });
  };

  return (
    <Container className="mt-3">
      <PBreadCrumb textSecond={"Categories"} />

      {access.tambah && (
        <PButton
          className={"mb-3"}
          action={() => navigate("/categories/create")}
        >
          Tambah
        </PButton>
      )}

      {notif.status && (
        <PAlert type={notif.typeNotif} message={notif.message} />
      )}

      <PTableWithAction
        status={categories.status}
        thead={["Nama", "Aksi"]}
        data={categories.data}
        tbody={["name"]}
        editUrl={access.edit ? `/categories/edit` : null}
        deleteAction={access.hapus ? (id) => handleDelete(id) : null}
        withoutPagination
      />
    </Container>
  );
}

export default Categories;
