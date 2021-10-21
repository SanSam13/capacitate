import React from 'react'

/**
 * Componente para crear buscador
 * @returns Search
 */

function Search() {
    return (
        <div className='search'>
            <form>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Buscar..."></input>
                    <span className="input-group-btn">
                        <button className="btn btn-danger" type="button">Buscar</button>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Search
