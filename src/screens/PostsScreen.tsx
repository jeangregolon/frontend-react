import React from 'react'
import '../index.scss'

const PostsScreen: React.FC = () => {
    return (
        <div className='posts-container'>
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
                        <tr>
                            <td>Título</td>
                            <td>Conteúdo</td>
                        </tr>
                        <tr>
                            <td>Título</td>
                            <td>Conteúdo</td>
                        </tr>
                        <tr>
                            <td>Título</td>
                            <td>Conteúdo</td>
                        </tr>
                        <tr>
                            <td>Título</td>
                            <td>Conteúdo</td>
                        </tr>
                        <tr>
                            <td>Título</td>
                            <td>Conteúdo</td>
                        </tr>
                        <tr>
                            <td>Título</td>
                            <td>Conteúdo</td>
                        </tr>
                        <tr>
                            <td>Título</td>
                            <td>Conteúdo</td>
                        </tr>
                        <tr>
                            <td>Título</td>
                            <td>Conteúdo</td>
                        </tr>
                        <tr>
                            <td>Título</td>
                            <td>Conteúdo</td>
                        </tr>
                        <tr>
                            <td>Título</td>
                            <td>Conteúdo</td>
                        </tr>
                        <tr>
                            <td>Exibindo 9 postagens</td>
                            <td>1 | 2 | 3 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PostsScreen