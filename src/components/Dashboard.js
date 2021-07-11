import React from 'react'
import { Card, Button } from 'react-bootstrap';

export default function Dashboard() {
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Log In</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                <Button variant='link' onClick={handleLogout}>Log Out</Button>
            </div>
        </div>
    )
}
