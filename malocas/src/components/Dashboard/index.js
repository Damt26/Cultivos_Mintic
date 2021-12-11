import React from 'react';
import { Link } from '@reach/router';
import { Tab, Row, Col, Nav, Navbar, Container } from 'react-bootstrap';
function Dashboard() {
    return (
        <div className="Dashboard">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                <Row>
                    <Container>

                    
                    <Col sm={3} className="bg-success px-0 h-100 w-auto">
                        <Nav variant="pills" className="flex-column">
                            <Navbar.Brand>
                                <Link className="d-flex align-items-center justify-content-center text-decoration-none text-white" to="/#">
                                    Malocas Ltda
                                </Link>
                            </Navbar.Brand>
                            <Nav.Item>
                                <Nav.Link eventKey="user" className="text-white">Usuarios</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="ppr" className="text-white">Predios</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="config" className="text-white">Configuraciones</Nav.Link>
                            </Nav.Item>
                            <hr className="sidebar-divider my-0" />
                            <Nav.Item>
                                <Nav.Link eventKey="ppr">Predios</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Container>
                </Row>
            </Tab.Container>
        </div>
    );
}
export default Dashboard;