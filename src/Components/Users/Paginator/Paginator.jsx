import React, {useEffect, useState} from 'react';
import styles from "../Users.module.css";

const Paginator = ({totalUsersCount, pageSize, portionSize = 10, currentPage, onChangingPage}) => {
	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));
	let leftPortionBorder = (portionNumber - 1) * portionSize + 1;
	let rightPortionNumber = portionSize * portionNumber;
	useEffect(() => {
		setPortionNumber(Math.ceil(currentPage / portionSize));
	}, [currentPage])

	return <div className={styles.pagination}>
		{portionNumber > 1 && <button onClick={()=> {setPortionNumber(portionNumber - 1)}}>Prev</button>}
		{
			pages
				.filter(p => p >= leftPortionBorder && p <= rightPortionNumber)
				.map((p) => {
					return <span key={p}
								 className={`${styles.page} ${(p === currentPage) && styles.active}`}
								 onClick={() => {onChangingPage(p)}}>{p}
					</span>
				})
		}
		{portionCount > portionNumber && <button onClick={()=> {setPortionNumber(portionNumber + 1)}}>Next</button>}
	</div>
};

export default Paginator;

// <span key={p}
// 	  className={`${styles.page} ${(p === currentPage) && styles.active}`}
// 	  onClick={() => {
// 		  onChangingPage(p)
// 	  }}>{p}</span>