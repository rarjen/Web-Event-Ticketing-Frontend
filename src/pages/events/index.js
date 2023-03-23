import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PBreacCrumb from "../../components/BreadCrumb";
import PButton from "../../components/Button";
import PTableWithActions from "../../components/TableWithAction";
import PSearchInput from "../../components/SearchInput";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchEvents,
  setKeyword,
  setCategory,
  setTalent,
} from "../../redux/events/actions";
import PAlert from "../../components/Alert";
import Swal from "sweetalert2";
import { deleteData, putData } from "../../utils/fetch";
import { setNotif } from "../../redux/notif/actions";
import PSelectBox from "../../components/SelectBox";
import {
  fetchListCategories,
  fetchListTalents,
} from "../../redux/lists/actions";

export default function form() {
  return <div>form</div>;
}
