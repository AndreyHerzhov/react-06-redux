
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("pages/HomePage/HomePage")) 
const MyBooksPage = lazy(() => import("pages/MyBooksPage/MyBooksPage"))
 
const MyFavoriteBooksPage = lazy(()=> import('./pages/MyFavoriteBooksPage/MyFavoriteBooksPage'));
// const PostsSearchPage = lazy(() => import("pages/PostsSearchPage/PostsSearchPage")) ;
// const ContactsPage = lazy(() => import("pages/ContactsPage/ContactsPage")) ;
// const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage")) ;
// const SinglePostPage = lazy(() => import("pages/SinglePostPage/SinglePostPage")) ;
// const SinglePostCommentsPage = lazy(() => import("pages/SinglePostCommentsPage/SinglePostCommentsPage")) ;

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...Loading</p>}> 
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/my-books" element={<MyBooksPage />} />
                <Route path="/my-favourite-books" element={<MyFavoriteBooksPage />} />
                {/* <Route path="/posts" element={<PostsSearchPage/>} />
                <Route path="/posts/:id" element={<SinglePostPage/>}>
                    <Route path="comments" element={<SinglePostCommentsPage/>} />
                </Route>
            
                <Route path="/contacts" element={<ContactsPage/>} />
                <Route path="*" element={<NotFoundPage/>} /> */}
            </Routes>
        </Suspense>
    )
}

export default UserRoutes