import { Link } from 'react-router-dom';
import styles from './AnimationList.module.css';

import { TbSquareChevronRight, TbSquareChevronLeft } from "react-icons/tb";
import { FaInfoCircle, FaArrowRight } from "react-icons/fa";

import { useEffect, useState } from 'react';

const tableData = [
  {
    id: 1,
    name: "Newton's Cradle effect"
  },
  {
    id: 2,
    name: "Split loading effect"
  },
  {
    id: 3,
    name: "Cloud rain drop effect"
  },
  {
    id: 4,
    name: "Wavy effect"
  },
  {
    id: 5,
    name: "Text fade in and fade out effect"
  },
  {
    id: 6,
    name: "Line loading effect"
  },
  {
    id: 7,
    name: "Text reveal animation"
  },
  {
    id: 8,
    name: "Moving square effect"
  },
  {
    id: 9,
    name: "Rotating ring effect"
  },
  {
    id: 10,
    name: "Fancy border loading effect"
  },
  // {
  //   id: 11,
  //   name: "Blur focus text hover effect"
  // },
  // {
  //   id: 12,
  //   name: "Image slide show effect"
  // },
  // {
  //   id: 13,
  //   name: "Creative image hover effect"
  // },
  // {
  //   id: 14,
  //   name: "Black and white text hover effect"
  // },
  // {
  //   id: 15,
  //   name: "Creative popup"
  // },
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
                        <td><Link to={`/animation/${row.id}`}>
                            <button className={`${styles["animationList__viewAnim-btn"]} font-semibold`}>
                              <span>View</span>
                              <FaArrowRight size="1rem" className={`${styles["animationList__tableRow-viewIcon"]}`} color={"black"} />
                            </button>
                        </Link></td>
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