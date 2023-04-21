import React from "react";
import "./Navbar.css";
import {AiFillHome} from 'react-icons/ai'
import { BsFillPersonFill } from "react-icons/bs";
import { RiLightbulbFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";
import profilePic from "../../images/profile.jpg";

const Navbar = (props) => {
	const { aboutVisible } = props;

	// fill icon for menu mobile
	const fillIcon =(e) => { 
		let anchors= Array.from(document.querySelector('.menu-phone').querySelectorAll('a'))
		anchors.map((item) => {
			return item.style.color='black';
		 })
		e.target.closest("a").style.color = "rgb(225, 88, 88)";
				
	 }

	//colorset for menu pc
	const colorset = (e) => {
		document
			.querySelector('[href="#home"]')
			.classList.remove("nav-item-active");
		document
			.querySelector('[href="#about"]')
			.classList.remove("nav-item-active");
		document
			.querySelector('[href="#projects"]')
			.classList.remove("nav-item-active");
		document
			.querySelector('[href="#contact"]')
			.classList.remove("nav-item-active");
		e.target.classList.add("nav-item-active");
	};
	// for svg animation

	return (
		<>
			<nav className={`navbar ${aboutVisible ? "bg-white" : "bg-normal"}`}>
				<div className="logo">
					<img src={profilePic} alt="profile" />
				</div>
				<div>
					<span>NIKHIL SHEKHAWAT</span>
				</div>
				<ul className="menu menu-pc">
					<li className="menu_item">
						<a href="#home" className="nav-item-active" onClick={colorset}>
							HOME
						</a>
					</li>
					<li className="menu_item">
						<a href="#about" onClick={colorset}>
							ABOUT
						</a>
					</li>
					<li className="menu_item">
						<a href="#projects" onClick={colorset}>
							PROJECTS
						</a>
					</li>
					<li className="menu_item">
						<a href="#contact" onClick={colorset}>
							CONTACT
						</a>
					</li>
				</ul>
				<ul className="menu menu-phone">
					<li className="menu_item">
						<a
							href="#home"
							style={{ color: "rgb(225, 88, 88)" }}
							onClick={fillIcon}>
							<AiFillHome />
						</a>
					</li>
					<li className="menu_item">
						<a href="#about" onClick={fillIcon}>
							<BsFillPersonFill />
						</a>
					</li>
					<li className="menu_item">
						<a href="#projects" onClick={fillIcon}>
							<RiLightbulbFill />
						</a>
					</li>
					<li className="menu_item">
						<a href="#contact" onClick={fillIcon}>
							<HiMail />
						</a>
					</li>
				</ul>
			</nav>
			<div className="linecontainer">
				<svg
					width="1172"
					height="1567"
					viewBox="0 0 1172 1567"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M662 1C680.667 42.8333 706.8 137.7 662 182.5C606 238.5 630 334.5 738.5 360C847 385.5 858 439.5 858 494C858 548.5 913 633.5 1017.5 653.5C1059.5 653.5 1074 665.167 1076 671C1077.5 675.167 1092.9 683.3 1142.5 682.5C1157.67 691.5 1178.9 715.1 1142.5 737.5H1017.5C1028.5 729.833 1043.9 709.3 1017.5 688.5H1063C1073.83 688.5 1095.5 693.4 1095.5 713C1095.5 732.6 1095.5 772.5 1095.5 790C1092.5 800.5 1094.2 821.5 1125 821.5C1182.2 821.5 1175.17 821.5 1164.5 821.5C1153.17 812 1137.3 788.5 1164.5 770.5H1037C1024 776.833 1005.8 795.9 1037 821.5C1056.5 819.333 1095.5 822 1095.5 850C1095.5 885 1053 907.5 1017.5 922.5C982 937.5 945 1033 1111 1079C1277 1125 798.5 1269 422.5 1198C46.5 1127 -48 1232.5 23 1286.5C36.1667 1300.33 77.1 1328.6 135.5 1331C193.9 1333.4 221.833 1372.33 228.5 1391.5C236.167 1395.5 244.4 1408.1 216 1426.5C211.833 1438 206 1465.4 216 1483H257.5C261 1481.83 268 1476.5 268 1464.5C268 1452.5 268 1441.83 268 1438C268.667 1434.17 267.5 1426.5 257.5 1426.5C245 1426.5 203.5 1422 216 1438C226 1450.8 177.833 1448.33 152.5 1445.5C151 1439.17 145.5 1426.5 135.5 1426.5C125.5 1426.5 108.667 1426.5 101.5 1426.5C97.5 1426.83 89.5 1430.7 89.5 1443.5C89.5 1456.3 89.5 1467.5 89.5 1471.5C90 1475.67 93.1 1484.2 101.5 1485C109.9 1485.8 126.667 1485.33 134 1485L160 1520V1549C160 1554.33 162.7 1565.1 173.5 1565.5C184.3 1565.9 201 1565.67 208 1565.5C212 1564.67 220 1561 220 1553C220 1545 220 1527.67 220 1520C219 1515 214.5 1505.1 204.5 1505.5C194.5 1505.9 181.333 1505.67 176 1505.5L150 1473.5V1466H201.5"
						stroke="black"
					/>
				</svg>
			</div>
		</>
	);
};

export default Navbar;
