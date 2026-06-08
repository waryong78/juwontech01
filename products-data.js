const categories = [
    { id: '전체',              label: '전체' },
    { id: '태양광가로등',      label: '태양광가로등' },
    { id: '가오스형(스텐기본)', label: '가오스형(스텐기본)' },
    { id: '글로브형(스텐기본)', label: '글로브형(스텐기본)' },
];

const products = [
    // 태양광가로등
    { id: 'JW-SO165101',      name: 'JW-SO165101',  category: '태양광가로등', image: './images/태양광가로등/(1)JW-SO165101-30Li,30W,4m.png' },
    { id: 'JW-SO127',         name: 'JW-SO127',     category: '태양광가로등', image: './images/태양광가로등/(2)JW-SO127-50Li,50W,5m.png' },
    { id: 'JW-SO127G',        name: 'JW-SO127G',    category: '태양광가로등', image: './images/태양광가로등/(3)JW-SO127G-50Li,50W,5m.png' },
    { id: 'JW-SO165127',      name: 'JW-SO165127',  category: '태양광가로등', image: './images/태양광가로등/(4)JW-SO165127-50Li,50W,5m.png' },
    { id: 'JW-SO216127-50W',  name: 'JW-SO216127',  category: '태양광가로등', image: './images/태양광가로등/(5)JW-SO216127-50Li,50W,5m.png', drawing: './images/태양광가로등/JW-SO216127-drawing.jpg' },
    { id: 'JW-SO216127-60W',  name: 'JW-SO216127',  category: '태양광가로등', image: './images/태양광가로등/(6)JW-SO216127-60Li,60W,5m.png', drawing: './images/태양광가로등/JW-SO216127-drawing.jpg' },
    { id: 'JW-SO216127G-50W', name: 'JW-SO216127G', category: '태양광가로등', image: './images/태양광가로등/(7)JW-SO216127G-50Li,50W,5M.png' },
    { id: 'JW-SO216127G-60W', name: 'JW-SO216127G', category: '태양광가로등', image: './images/태양광가로등/(8)JW-SO216127G-60Li,60W,5M.png' },
    { id: 'JW-SO216127-100W', name: 'JW-SO216127',  category: '태양광가로등', image: './images/태양광가로등/(9)JW-SO216127-100Li,100W,7m.png', drawing: './images/태양광가로등/JW-SO216127-drawing.jpg' },
    { id: 'example_01',       name: 'example_01',   category: '태양광가로등', image: './images/태양광가로등/example_01.png' },

    // 가오스형(스텐기본) — JW-P-XX + 주원XX 쌍으로 10개 제품
    { id: 'JW-P-01', name: 'JW-P-01', category: '가오스형(스텐기본)', image: './images/가오스형(스텐기본)/JW-P-01.png', images: ['./images/가오스형(스텐기본)/JW-P-01.png', './images/가오스형(스텐기본)/주원01.png'] },
    { id: 'JW-P-02', name: 'JW-P-02', category: '가오스형(스텐기본)', image: './images/가오스형(스텐기본)/JW-P-02.png', images: ['./images/가오스형(스텐기본)/JW-P-02.png', './images/가오스형(스텐기본)/주원02.png'] },
    { id: 'JW-P-03', name: 'JW-P-03', category: '가오스형(스텐기본)', image: './images/가오스형(스텐기본)/JW-P-03.png', images: ['./images/가오스형(스텐기본)/JW-P-03.png', './images/가오스형(스텐기본)/주원03.png'] },
    { id: 'JW-P-04', name: 'JW-P-04', category: '가오스형(스텐기본)', image: './images/가오스형(스텐기본)/JW-P-04.png', images: ['./images/가오스형(스텐기본)/JW-P-04.png', './images/가오스형(스텐기본)/주원04.png'] },
    { id: 'JW-P-05', name: 'JW-P-05', category: '가오스형(스텐기본)', image: './images/가오스형(스텐기본)/JW-P-05.png', images: ['./images/가오스형(스텐기본)/JW-P-05.png', './images/가오스형(스텐기본)/주원05.png'] },
    { id: 'JW-P-06', name: 'JW-P-06', category: '가오스형(스텐기본)', image: './images/가오스형(스텐기본)/JW-P-06.png', images: ['./images/가오스형(스텐기본)/JW-P-06.png', './images/가오스형(스텐기본)/주원06.png'] },
    { id: 'JW-P-07', name: 'JW-P-07', category: '가오스형(스텐기본)', image: './images/가오스형(스텐기본)/JW-P-07.png', images: ['./images/가오스형(스텐기본)/JW-P-07.png', './images/가오스형(스텐기본)/주원07.png'] },
    { id: 'JW-P-08', name: 'JW-P-08', category: '가오스형(스텐기본)', image: './images/가오스형(스텐기본)/JW-P-08.png', images: ['./images/가오스형(스텐기본)/JW-P-08.png', './images/가오스형(스텐기본)/주원08.png'] },
    { id: 'JW-P-09', name: 'JW-P-09', category: '가오스형(스텐기본)', image: './images/가오스형(스텐기본)/JW-P-09.png', images: ['./images/가오스형(스텐기본)/JW-P-09.png', './images/가오스형(스텐기본)/주원09.png'] },
    { id: 'JW-P-10', name: 'JW-P-10', category: '가오스형(스텐기본)', image: './images/가오스형(스텐기본)/JW-P-10.png', images: ['./images/가오스형(스텐기본)/JW-P-10.png', './images/가오스형(스텐기본)/주원10.png'] },

    // 글로브형(스텐기본) — JW-PG-XX + 주원XX 쌍으로 10개 제품
    { id: 'JW-PG-01', name: 'JW-PG-01', category: '글로브형(스텐기본)', image: './images/글로브형(스텐기본)/JW-PG-01.png', images: ['./images/글로브형(스텐기본)/JW-PG-01.png', './images/글로브형(스텐기본)/주원01.png'] },
    { id: 'JW-PG-02', name: 'JW-PG-02', category: '글로브형(스텐기본)', image: './images/글로브형(스텐기본)/JW-PG-02.png', images: ['./images/글로브형(스텐기본)/JW-PG-02.png', './images/글로브형(스텐기본)/주원02.png'] },
    { id: 'JW-PG-03', name: 'JW-PG-03', category: '글로브형(스텐기본)', image: './images/글로브형(스텐기본)/JW-PG-03.png', images: ['./images/글로브형(스텐기본)/JW-PG-03.png', './images/글로브형(스텐기본)/주원03.png'] },
    { id: 'JW-PG-04', name: 'JW-PG-04', category: '글로브형(스텐기본)', image: './images/글로브형(스텐기본)/JW-PG-04.png', images: ['./images/글로브형(스텐기본)/JW-PG-04.png', './images/글로브형(스텐기본)/주원04.png'] },
    { id: 'JW-PG-05', name: 'JW-PG-05', category: '글로브형(스텐기본)', image: './images/글로브형(스텐기본)/JW-PG-05.png', images: ['./images/글로브형(스텐기본)/JW-PG-05.png', './images/글로브형(스텐기본)/주원05.png'] },
    { id: 'JW-PG-06', name: 'JW-PG-06', category: '글로브형(스텐기본)', image: './images/글로브형(스텐기본)/JW-PG-06.png', images: ['./images/글로브형(스텐기본)/JW-PG-06.png', './images/글로브형(스텐기본)/주원06.png'] },
    { id: 'JW-PG-07', name: 'JW-PG-07', category: '글로브형(스텐기본)', image: './images/글로브형(스텐기본)/JW-PG-07.png', images: ['./images/글로브형(스텐기본)/JW-PG-07.png', './images/글로브형(스텐기본)/주원07.png'] },
    { id: 'JW-PG-08', name: 'JW-PG-08', category: '글로브형(스텐기본)', image: './images/글로브형(스텐기본)/JW-PG-08.png', images: ['./images/글로브형(스텐기본)/JW-PG-08.png', './images/글로브형(스텐기본)/주원08.png'] },
    { id: 'JW-PG-09', name: 'JW-PG-09', category: '글로브형(스텐기본)', image: './images/글로브형(스텐기본)/JW-PG-09.png', images: ['./images/글로브형(스텐기본)/JW-PG-09.png', './images/글로브형(스텐기본)/주원09.png'] },
    { id: 'JW-PG-10', name: 'JW-PG-10', category: '글로브형(스텐기본)', image: './images/글로브형(스텐기본)/JW-PG-10.png', images: ['./images/글로브형(스텐기본)/JW-PG-10.png', './images/글로브형(스텐기본)/주원10.png'] },
];
