import React, { useState } from 'react';
import AuthenticationComponent from './Blog'; // adjust the import as needed

const ParentComponent = () => {
    const [auth, setAuth] = useState(false);

    return (
        <div>
            <AuthenticationComponent setAuth={setAuth} />
            {auth && <p>You are authenticated!</p>}
        </div>
    );
};

export default ParentComponent;
