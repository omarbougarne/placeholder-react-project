import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ItemList from './components/features/ItemList';

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <main>
                <ItemList />
            </main>
            <Footer />
        </div>
    );
};

export default App;