import React, { useEffect, useState } from 'react'
import '../index.scss'
import { useDispatch, useSelector } from "react-redux"
import { listPosts } from "../actions/postActions"
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export default function PostListScreen() {
	const dispatch = useDispatch()
	const postList = useSelector((state) => state.postList)
	const { loading, error, posts } = postList
	const [page, setPage] = useState(1)
	const [pages, setPages] = useState(4)
	const [perPage, setPerPage] = useState(20)
	const [lastPage, setLastPage] = useState(false)
	const [firstPage, setFirstPage] = useState(true)

	useEffect(() => {
		dispatch(listPosts(page))
	}, [dispatch, page])

	function handlePagination(action, param) {
		setPerPage(posts.meta.pagination.limit)
		setPages(posts.meta.pagination.pages)

		if (action === 'p' && page > 1) {
			if (lastPage) {
				setLastPage(false)
			}
			if (page === 2) {
				setFirstPage(true)
			}
			setPage(page - 1)
		}

		if (action === 'n' && page === pages) {
			setLastPage(true)
		} else if (action === 'n' && page < pages) {
			if (firstPage) {
				setFirstPage(false)
			}
			setPage(page + 1)
		}

		if (action === 'm') {
			setPage(param)
		}
	}

	return (
		<div className='posts-container'>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant="danger">{error}</MessageBox>
			) : (
				<div>
					<h2>Últimas Postagens</h2>
					<div className='table-container'>
						<table className="table">
							<thead>
								<tr>
									<th>Título</th>
									<th>Conteúdo</th>
								</tr>
							</thead>
							<tbody>
								{
									posts.data.map(post => (
										<tr key={post.id}>
											<td>{post.title}</td>
											<td>{post.body}</td>
										</tr>
									))
								}
							</tbody>
							<tfoot>
								<tr>
									<td>Exibindo {(perPage * page) - perPage + 1} - {lastPage ? ((pages - 1) * perPage + posts.data.length) : (perPage * page)} de {posts.meta.pagination.total} postagens </td>
									<td>
										<div className="pagination">
											<button
												type='button'
												className={`${firstPage ? 'disabled' : ''}`}
												onClick={() => handlePagination('p', '')}>
												<i className='fa fa-angle-left'></i>
											</button>
											<button
												className={`pagination-number ${firstPage ? 'active' : ''}`}
												type='button'>{`${page === 1 ? 1 : page - 1}`}</button>

											<button
												className={`pagination-number ${!firstPage && !lastPage ? 'active' : ''}`}
												type='button'>{`${page === 1 ? 2 : page}`}</button>
											<button
												className={`pagination-number ${lastPage ? 'active' : ''}`}
												type='button'>{`${page === 1 ? 3 : page + 1}`}</button>
											<button
												type='button'
												className={`${lastPage ? 'disabled' : ''}`}
												onClick={() => handlePagination('n')}>
												<i className='fa fa-angle-right'></i>
											</button>
										</div>
									</td>
								</tr>
							</tfoot>
						</table>
					</div>
				</div>)}
		</div>
	)
}