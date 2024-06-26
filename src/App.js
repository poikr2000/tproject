import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/header';
import Notice from './Board/notice';
import Qna from './Board/qna';
import Chat from './Chat/chat';
import Main from './Main';
import NotFound from './NotFound';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/Board/notice" element={<Notice />}></Route>
					<Route path="/Board/qna" element={<Qna />}></Route>
					<Route path="/Chat/chat" element={<Chat />}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;