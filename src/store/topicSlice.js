import { createSlice } from '@reduxjs/toolkit';
import challengePic from '@static/images/recomIcon/challenge.png';
import choosePic from '@static/images/recomIcon/choose.png';
import copyPic from '@static/images/recomIcon/copy.png';
import membersPic from '@static/images/recomIcon/members.png';

import { getTopicList, addArticleList } from '../services/posts';

export const topicSlice = createSlice({
	name: 'topicListState',
	initialState: {
		list: [],
		loading: false,
		articleList: [
			{
				id: 0,
				title:
					'【117页】前端面试题大全！（包含HTML、CSS、JavaScript、Vue、React、微信小程序.....）',
				desc: '一、背景随着项目逐渐扩展，业务功能越来越多，代码量越来越多，开发人员数量也越来越多。此过程中，你是否有过以下烦恼？项目模块多且复杂，编译一次要5分钟甚至10分钟？太慢不能忍？改了一行代码 或只...',
				imgUrl:
					'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
				to: '/detail',
			},
			{
				id: 1,
				title: '读书年代欠鲁迅先生的，以后的日子里慢慢归还！',
				desc: '从前不懂鲁迅，再看满眼泪花。 1. 从来如此，便对么？ ——《狂人日记》 2. 当我沉默着的时候，我觉得充实，我将开口，同时感到空虚。 ——《野...',
				imgUrl:
					'https://upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
				to: '/detail',
			},
		],
		recomList: [
			{
				id: 0,
				imgUrl: challengePic,
				title: '日更挑战',
				to: '/detail',
			},
			{
				id: 1,
				imgUrl: membersPic,
				title: '简书会员',
				to: '/detail',
			},
			{
				id: 2,
				imgUrl: choosePic,
				title: '优选连载',
				to: '/detail',
			},
			{
				id: 3,
				imgUrl: copyPic,
				title: '简书版权',
				to: '/detail',
			},
		],

		articleLoading: false,
		articlePage: 1,
	},
	reducers: {},
	extraReducers: {
		[getTopicList.fulfilled]: (state, action) => {
			state.list = action.payload;
			state.loading = false;
		},
		[getTopicList.pending]: (state, action) => {
			state.loading = true;
		},

		[addArticleList.fulfilled]: (state, action) => {
			state.articleList.push(...action.payload);
			state.articleLoading = false;
			state.articlePage += 1;
		},
		[addArticleList.pending]: (state, action) => {
			state.articleLoading = true;
		},
	},
});

// Action creators are generated for each case reducer function
// export const {} = topicSlice.actions;

export default topicSlice.reducer;
