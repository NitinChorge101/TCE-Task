import headerStyle from "@/style/header.module.css";
import ThemeToggle from "../canvas/themeToggle";

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.logoWrapper}>
                <span className={headerStyle.logo}></span>
                <span className={headerStyle.version}>v.v.2.0.0</span>
            </div>
            <div className={headerStyle.rightWrapper}>
                <div className={headerStyle.versionCapsule}>v.0.0.19</div>
                <div className={headerStyle.timeAndDate}>
                    <h4 className={headerStyle.timeTxt}>04:41 PM</h4>
                    <p>Mon, Mar 10</p>
                </div>
                <div>
                    <ThemeToggle/>
                </div>
            </div>
        </header>
     );
}
 
export default Header;