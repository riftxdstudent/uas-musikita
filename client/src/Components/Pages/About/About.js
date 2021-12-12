import { useEffect } from "react";
import $ from "jquery";

import styles from "./About.module.css";

export default function About() {
	useEffect(() => {
		$('body').removeClass().addClass(styles.background)
	})

	return (
		<div className="card-group">
			<div className="card bg-dark text-white mx-3">
				<img src="https://images.unsplash.com/photo-1639090997197-c9566fdbe62f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" className="card-img-top"  />
				<div className="card-body">
					<h5 className="card-title text-center">Filbert Mangiri</h5>
					<h6 className="card-title text-center">00000050612</h6>
					<p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				</div>
			</div>
			<div className="card bg-dark text-white mx-3">
				<img src="https://images.unsplash.com/photo-1639090997197-c9566fdbe62f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" className="card-img-top"  />
				<div className="card-body">
					<h5 className="card-title text-center">Muhammad Rifqi Al Hakim</h5>
					<h6 className="card-title text-center">00000050617</h6>
					<p className="card-text text-center">This card has supporting text below as a natural lead-in to additional content.</p>
				</div>
			</div>
			<div className="card bg-dark text-white mx-3">
				<img src="https://images.unsplash.com/photo-1639090997197-c9566fdbe62f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" className="card-img-top"  />
				<div className="card-body">
					<h5 className="card-title text-center">Hans Natan Hermawan Chiou</h5>
					<h6 className="card-title text-center">00000041</h6>
					<p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
				</div>
			</div>
		</div>
	)
}