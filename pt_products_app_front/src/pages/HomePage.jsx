import React from 'react'
import { Header } from '../components'
import { useFetch } from '../hooks';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    const { data, isLoading } = useFetch("/products");

    return (
        <section className='h-100 w-100 my-4 mt-4'>
            <Header />

            <div className='h-100 container center d-flex justify-content-center align-items-center'>
                {
                    (!isLoading)
                    ? (
<table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((product, index) => (
                                <tr key={product.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>
                                        <Link to={`/products/${product.id}`}>
                                        <button type="button" class="btn btn-primary">
                                            edit
                                        </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-warning">
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                    )
                    : <h3>Loading...</h3>
                }

            </div>
        </section>
    )
}
