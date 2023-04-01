import { faUser } from "@fortawesome/free-regular-svg-icons"
import {
    faChartColumn,
    faGear,
    faHome,
    faListCheck,
    faTableColumns,
    faUserAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import "../App.scss"
import { logout } from "../redux/userReducer"

export default function Sidenav() {
    const dispatch = useDispatch()
    const { student, admin } = useSelector((state) => state.user)
    const navigate = useNavigate()
    const route = window.location.pathname

    if (student) {
        return (
            <div className="Student-sidenav">
                <div className="sidenav-cont">
                    <img
                        className="logo"
                        src="/images/blue-logo.svg"
                        alt="logo"
                    />
                    <div
                        className={
                            route !== "/user" ? "nav-btn" : "nav-btn-selected"
                        }
                        onClick={() => navigate("/user")}
                    >
                        <FontAwesomeIcon icon={faHome} />
                        <span>Dashboard</span>
                    </div>
                    <div
                        className={
                            route !== "/user/complaint"
                                ? "nav-btn"
                                : "nav-btn-selected"
                        }
                        onClick={() => navigate("/user/complaint")}
                    >
                        <FontAwesomeIcon icon={faListCheck} />
                        <span>Complaints</span>
                    </div>
                    <div className="nav-btn">
                        <FontAwesomeIcon icon={faChartColumn} />
                        <span>History</span>
                    </div>
                    <div className="nav-btn">
                        <FontAwesomeIcon icon={faUserAlt} />
                        <span>Account</span>
                    </div>
                    <div className="nav-btn">
                        <FontAwesomeIcon icon={faGear} />
                        <span>Settings</span>
                    </div>
                    <div className="profile-btn-cont">
                        <img
                            onClick={() => dispatch(logout())}
                            src="/images/logout.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        )
    }
    if (admin) {
        return (
            <div className="Sidenav">
                <div className="sidenav-cont">
                    <img
                        className="logo"
                        src="/images/white-sidenav-logo.svg"
                        alt="logo"
                    />
                    <div
                        onClick={() => navigate("/user")}
                        className={
                            route !== "/user" ? "nav-btn" : "nav-btn-selected"
                        }
                    >
                        <FontAwesomeIcon icon={faTableColumns} />
                        <span>Dashboard</span>
                    </div>
                    <div
                        onClick={() => navigate("/user/complaint")}
                        className={
                            route !== "/user/complaint"
                                ? "nav-btn"
                                : "nav-btn-selected"
                        }
                    >
                        <FontAwesomeIcon icon={faListCheck} />
                        <span>Complaints</span>
                    </div>
                    <div className="nav-btn">
                        <FontAwesomeIcon icon={faGear} />
                        <span>Settings</span>
                    </div>
                    <div className="profile-btn-cont">
                        <div
                            className="profile-btn"
                            onClick={() => dispatch(logout())}
                        >
                            <FontAwesomeIcon
                                className="user-icon"
                                icon={faUser}
                            />
                            <div>
                                <b>Leslie Nkem</b>
                                <span>Staff</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="Sidenav">
            <div className="sidenav-cont">
                <img
                    className="logo"
                    src="/images/white-sidenav-logo.svg"
                    alt="logo"
                />
                <div
                    className={
                        route !== "/user" ? "nav-btn" : "nav-btn-selected"
                    }
                >
                    <FontAwesomeIcon icon={faTableColumns} />
                    <span>Dashboard</span>
                </div>
                <div
                    className={
                        route !== "/user/complaint"
                            ? "nav-btn"
                            : "nav-btn-selected"
                    }
                >
                    <FontAwesomeIcon icon={faListCheck} />
                    <span>Complaints</span>
                </div>
                <div className="nav-btn">
                    <FontAwesomeIcon icon={faGear} />
                    <span>Settings</span>
                </div>
                <div className="profile-btn-cont">
                    <div
                        className="profile-btn"
                        onClick={() => dispatch(logout())}
                    >
                        <FontAwesomeIcon className="user-icon" icon={faUser} />
                        <div>
                            <b>Leslie Nkem</b>
                            <span>Staff</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
