import { Link } from 'react-router-dom';
import styles from './AnimationList.module.css';

import { BiSolidChevronRightCircle } from "react-icons/bi";
import { TbSquareChevronRight, TbSquareChevronLeft } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";

import { useEffect, useState } from 'react';

const tableData = [
  {
    id: 14,
    name: "Newton's Cradle effect"
  },
  {
    id: 7,
    name: "Split loading effect"
  },
  {
    id: 15,
    name: "Cloud rain drop effect"
  },
  // {
  //   id: 8,
  //   name: "Creative popup"
  // },
  {
    id: 9,
    name: "Wavy effect"
  },
  // {
  //   id: 10,
  //   name: "Creative image hover effect"
  // },
  // {
  //   id: 11,
  //   name: "Black and white text hover effect"
  // },
  {
    id: 12,
    name: "Text fade in and fade out effect"
  },
  {
    id: 13,
    name: "Line loading effect"
  },
  {
    id: 1,
    name: "Text reveal animation"
  },
  {
    id: 2,
    name: "Moving square effect"
  },
  // {
  //   id: 3,
  //   name: "Blur focus text hover effect"
  // },
  // {
  //   id: 4,
  //   name: "Image slide show effect"
  // },
  {
    id: 5,
    name: "Rotating ring effect"
  },
  {
    id: 6,
    name: "Fancy border loading effect"
  }
]

const AnimationList = ({currentPage, setCurrentPage}) => {

  const [ totalPages, setTotalPages ] = useState(Math.ceil(tableData.length / 5));
  const [ currentPageData, setCurrentPageData ] = useState(tableData.slice(0, currentPage * 5));
  const [ currentPageChanged, setCurrentPageChanged ] = useState(false)

  useEffect(() => {
    setCurrentPageData(oldCurrentPageData => {
      return tableData.slice((currentPage - 1) * 5, currentPage * 5);
    });

    setCurrentPageChanged(true);
  }, [currentPage]);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      <header className={`${styles.animationList__header}`}>
        <Link to="/">
          <div className={`${styles.animationList__logo}`} />
        </Link>
        <div className= { `${styles["animationsList__header-text"]} dancing-script-bold` }>Vignesh's Animations</div>
      </header>
      <main className={`${styles.animationList__table} ${ currentPageChanged && styles["animationList__table-fadeIn"] } font-semibold`} onAnimationEnd={ () => setCurrentPageChanged(false) }>
        <div className={`${styles.totalCount}`}>
          <h4 className={`${styles["animationList__totalCount-text"]} font-regular`}>Total</h4>
          <span>-</span>
          <span className={`${styles["animationList__totalCount-count"]} font-semibold`}>{tableData.length}</span>
        </div>
        <table>
          <thead>
            <tr className={`${styles["animationList__table-headerRow"]}`}>
                <th>Name</th>
                <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              currentPageData.map((row) => {
                return (
                    <tr key={row.id} className={`${styles["animationList__tableRow"]}`}>
                        <td className={`${styles["ellipsis"]}`}><span>
                          { row.name }
                          </span>
                        </td>
                        <td><Link to={`/animation/${row.id}`}><BiSolidChevronRightCircle size="1.5rem" className={`${styles["animationList__tableRow-viewIcon"]}`} color={"rgb(255, 252, 225)"} /></Link></td>
                    </tr>
                )
              })
            }
          </tbody>
          
      </table>
      <div className={`${styles["animationList__pagination"]}`}>
        <div className={`${styles["animationList__pagination-left"]}`}>
          Page { currentPage } / { totalPages }
        </div>
        <div className={`${styles["animationList__pagination-right"]}`}>
          <TbSquareChevronLeft size={"2rem"} className={currentPage === 1 && styles["disabled"] } onClick={goToPreviousPage} />
          <TbSquareChevronRight size={"2rem"} className={currentPage === totalPages && styles["disabled"] } onClick={goToNextPage} />
        </div>
      </div>

        <div className={`${styles.animationList__info} font-semibold`}>
          <FaInfoCircle size={"1rem"} />
          Looks best in Desktop!!!
        </div>
      </main>
    </>
  )
}

export default AnimationList