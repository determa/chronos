import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import { useSelector } from "react-redux";
import Calendar from "./components/Calendar";
import ContextWrapper from "./services/ContextWrapper";
import ForgotForm from "./components/Forgot";
import ShareCalendar from "./components/ShareCalendar";

function App() {
    let { isAuth } = useSelector((state) => state.auth);
    return (
        <div className="App">
            <div className="container">
                <Routes>
                    <Route
                        path="/main"
                        element={
                            <ContextWrapper>
                                {isAuth ? (
                                    <Calendar />
                                ) : (
                                    <Navigate to="/login" />
                                )}
                            </ContextWrapper>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <ContextWrapper>
                                {isAuth ? (
                                    <Navigate to="/main" />
                                ) : (
                                    <AuthForm />
                                )}
                            </ContextWrapper>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <ContextWrapper>
                                {isAuth ? (
                                    <Navigate to="/main" />
                                ) : (
                                    <AuthForm />
                                )}
                            </ContextWrapper>
                        }
                    />
                    <Route
                        path="/forgot"
                        element={
                            <ContextWrapper>
                                {isAuth ? (
                                    <Navigate to="/main" />
                                ) : (
                                    <AuthForm />
                                )}
                            </ContextWrapper>
                        }
                    />
                    <Route
                        path="/share-calendar/:id"
                        element={
                            <ContextWrapper>
                                {isAuth ? <ShareCalendar /> : <AuthForm />}
                            </ContextWrapper>
                        }
                    />
                    <Route
                        path="/password-reset/:jwt"
                        element={
                            <ContextWrapper>
                                {isAuth ? (
                                    <Navigate to="/main" />
                                ) : (
                                    <ForgotForm />
                                )}
                            </ContextWrapper>
                        }
                    />
                    <Route path="*" element={<Navigate to="/main" replace />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
