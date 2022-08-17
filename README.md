# Có 3 loại routes
 - index routes: 
    - /pages/index.tsx (main start page).
    - /pages/about.tsx (about page)

 - Nested routes:
    - pages/products/index.tsx

 - Dynamic routes: (4 loại)
    - Single parameter: pages/posts/[postID].tsx    
    - Multiple parameters: pages/caterogies/[categoryID](folder)/posts/[postID].tsx
    - Catch all routes: pages/posts/[...slug].tsx
    - Option catch all routes: pages/posts/[[...splug]].tsx

- Route match order
    1. pre-defined routes: pages/posts/create.tsx
    2. dynamic routes: pages/posts/[postID].tsx
    3. catch all routes: pages/posts/[[...slug]].tsx


# Navigation
 - Full page reload: reload lại file html mới.
 - Client side routing: không cần tải lại trang.
   - thuộc tính (prefetch = true): tải nguồn js về trước khi gọi chỉ load ra không cần load lại. Nhưng khi bị mạng chậm sẽ không prefetch. Chỉ prefetch khi nằm ở trong viewport

