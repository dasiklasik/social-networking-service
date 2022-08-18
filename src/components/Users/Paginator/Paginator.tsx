import React from "react";
import s from "./Paginator.module.css";

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {

    const {
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged,
    } = props

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []

    if (currentPage >= pagesCount - 5) {
        for (let i = currentPage; i <= pagesCount; i++) {
            pages.push(i)
        }
    } else if (pagesCount > 5) {
        if (currentPage === 1) {
            let initialNum = currentPage
            for (let i = initialNum; i <= initialNum + 5; i++) {
                pages.push(i)
            }
        } else {
            let initialNum = currentPage
            for (let i = initialNum-1; i <= initialNum + 5; i++) {
                pages.push(i)
            }
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }

    return (
        <div>
            {currentPage !== 1 && pagesCount > 5 ? <>
                    <span className={currentPage === 1 ? s.selected : ''}
                          onClick={() => onPageChanged(1)}
                    >1</span> <span>... </span></> : ''}
            {
                pages.map(i => {

                    return (
                        <span
                            className={
                                currentPage === +i ? s.selected : ''
                            }
                            onClick={() => onPageChanged(+i)}
                        >{i} </span>
                    )
                })
            }
            {
                pagesCount > 5 && currentPage < pagesCount - 5 ? <>
                    <span>...</span><span onClick={() => onPageChanged(pagesCount)}> {pagesCount}</span>

                </> : ''
            }
        </div>
    )
}