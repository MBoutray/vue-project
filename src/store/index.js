import {createStore} from "vuex";

export default createStore({
    state: {
        posts: [
            {
                id: 1,
                title: 'test',
                image: '',
                content: '',
                metaTitle: '',
                metaDescription: ''
            }
        ],
        users: [
            {
                id: 1,
                email: 'test@test.com',
                password: 'test',
                firstName: 'test',
                lastName: 'von tester'
            }
        ],
        currentUser: 1
    },
    mutations: {
        addPost: (state, post) => {
            state.posts.push({
                id: this.getters.getLastID(),
                title: post.title,
                image: !post.image ? 'https://via.placeholder.com/300x170' : post.image,
                content: post.content,
                metaTitle: post.metaTitle,
                metaDescription: post.metaDescription
            });
        },
        deletePost: (state, id) => {
            //Find the post in the array
            let postIndex = this.getters.getPostIndex()(id);

            //remove the post from the array
            state.posts.splice(postIndex, 1);
        },
        modifyPost: (state, post) => {
            state.posts.push({
                id: post.id,
                title: post.title,
                image: post.image,
                content: post.content,
                metaTitle: post.metaTitle,
                metaDescription: post.metaDescription
            });
        },
        logOut: (state) => {
            state.currentUser = null;
        }
    },
    getters: {
        getLastID: state => {
            return state.posts[state.posts.length - 1].id;
        },
        getPostFromID: (state, getters) => id => {
            return state.posts[getters.getPostIndex()(id)];
        },
        getPostIndex: state => id => {
            return state.posts.findIndex(elem => elem.id === id);
        },
        isConnected: state => {
            return state.currentUser != null;
        }
    }
})