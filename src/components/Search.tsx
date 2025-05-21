export interface SearchTermProps {
    searchTerm: string;
    setSearchTerm: (e: string) => void;
}

function Search({ searchTerm, setSearchTerm }: SearchTermProps) {
    return (
        <div className="search">
            <div>
                <img src="search.svg" alt="search" />
                <input
                    type="text"
                    placeholder="Seacrh"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Search;
