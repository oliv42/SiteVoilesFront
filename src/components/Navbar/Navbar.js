import logo from "../../assets/logoWing.png";

export function Navbar() {
    // todo : do the link
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl" href="/#">
                    CompareVoileParapente
                </a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={logo} alt="logo" />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a className="justify-between" href="/#">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a href="/#">Settings</a>
                        </li>
                        <li>
                            <a href="/#"> Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
