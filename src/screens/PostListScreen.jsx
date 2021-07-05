import React, { useEffect } from 'react'
import '../index.scss'
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import { listPosts } from "../actions/postActions"
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

// const PostListScreen: React.FC = (props) => {
export default function PostListScreen() {
	const dispatch = useDispatch()
	//  const postList = useSelector((state: RootStateOrAny) => state.postList)
	const postList = useSelector((state) => state.postList)
	const { loading, error, posts } = postList

	useEffect(() => {
		dispatch(listPosts())
	}, [dispatch])

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
								<tr>
									<td>Exibindo {posts.data.length} postagens</td>
									<td>
										<div className="pagination">
										<a className='fa fa-angle-left' href="#"></a>
											<a href="#">1</a>
											<a className="active" href="#">2</a>
											<a href="#">3</a>
											<a className='fa fa-angle-right' href="#"></a>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>)}
		</div>
	)
}

// export default PostListScreen