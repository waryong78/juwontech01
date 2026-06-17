const categories = [
    { id: '전체',              label: '전체' },
    { id: '태양광가로등',      label: '태양광가로등' },
    { id: '디자인등주',        label: '디자인등주' },
    { id: 'STEEL 보안등주',   label: 'STEEL 보안등주' },
    { id: '철보안등주',       label: '철보안등주' },
    { id: '스텐보안등주', label: '스텐보안등주' },
    { id: '스텐보안등주(글로브형)', label: '스텐보안등주(글로브형)' },
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

    // 철보안등주
    { id: 'JW-P-ST01', name: 'JW-P-ST01', category: '철보안등주', image: './images/철보안등주/JW-P-ST01.png' },
    { id: 'JW-P-ST02', name: 'JW-P-ST02', category: '철보안등주', image: './images/철보안등주/JW-P-ST02.png' },

    // 디자인등주 — 렌더링(XX.png) + 환경사진(주원XX, 주원XX-1 등) 번호별 묶음
    { id: '디자인등주-01', name: '디자인등주-01', category: '디자인등주', image: './images/3.디자인등주/01.png', images: ['./images/3.디자인등주/01.png', './images/3.디자인등주/주원01.png', './images/3.디자인등주/주원01-1.png'] },
    { id: '디자인등주-02', name: '디자인등주-02', category: '디자인등주', image: './images/3.디자인등주/02.png', images: ['./images/3.디자인등주/02.png', './images/3.디자인등주/주원02.png', './images/3.디자인등주/주원02-1.png'] },
    { id: '디자인등주-03', name: '디자인등주-03', category: '디자인등주', image: './images/3.디자인등주/03.png', images: ['./images/3.디자인등주/03.png', './images/3.디자인등주/주원03.png', './images/3.디자인등주/주원03-1.png'] },
    { id: '디자인등주-04', name: '디자인등주-04', category: '디자인등주', image: './images/3.디자인등주/04.png', images: ['./images/3.디자인등주/04.png', './images/3.디자인등주/주원04.png', './images/3.디자인등주/주원04-1.png'] },
    { id: '디자인등주-05', name: '디자인등주-05', category: '디자인등주', image: './images/3.디자인등주/05.png', images: ['./images/3.디자인등주/05.png', './images/3.디자인등주/주원05.png', './images/3.디자인등주/주원05-1.png', './images/3.디자인등주/주원05-2.png'] },
    { id: '디자인등주-06', name: '디자인등주-06', category: '디자인등주', image: './images/3.디자인등주/06.png', images: ['./images/3.디자인등주/06.png', './images/3.디자인등주/주원06.png', './images/3.디자인등주/주원06-1.png'] },
    { id: '디자인등주-07', name: '디자인등주-07', category: '디자인등주', image: './images/3.디자인등주/07.png', images: ['./images/3.디자인등주/07.png', './images/3.디자인등주/주원07.png', './images/3.디자인등주/주원07-1.png'] },
    { id: '디자인등주-08', name: '디자인등주-08', category: '디자인등주', image: './images/3.디자인등주/08.png', images: ['./images/3.디자인등주/08.png', './images/3.디자인등주/주원08.png', './images/3.디자인등주/주원08-1.png'] },
    { id: '디자인등주-09', name: '디자인등주-09', category: '디자인등주', image: './images/3.디자인등주/09.png', images: ['./images/3.디자인등주/09.png', './images/3.디자인등주/주원09.png', './images/3.디자인등주/주원09-1.png'] },
    { id: '디자인등주-10', name: '디자인등주-10', category: '디자인등주', image: './images/3.디자인등주/10.png', images: ['./images/3.디자인등주/10.png', './images/3.디자인등주/주원10.png', './images/3.디자인등주/주원10-1.png'] },
    { id: '디자인등주-11', name: '디자인등주-11', category: '디자인등주', image: './images/3.디자인등주/11.png', images: ['./images/3.디자인등주/11.png', './images/3.디자인등주/주원11.png', './images/3.디자인등주/주원11-1.png'] },

    // 스텐보안등주 — JW-P-XX + 주원XX 쌍으로 10개 제품
    { id: 'JW-P-01', name: 'JW-P-01', category: '스텐보안등주', image: './images/스텐보안등주/JW-P-01.png', images: ['./images/스텐보안등주/JW-P-01.png', './images/스텐보안등주/주원01.png'] },
    { id: 'JW-P-02', name: 'JW-P-02', category: '스텐보안등주', image: './images/스텐보안등주/JW-P-02.png', images: ['./images/스텐보안등주/JW-P-02.png', './images/스텐보안등주/주원02.png'] },
    { id: 'JW-P-03', name: 'JW-P-03', category: '스텐보안등주', image: './images/스텐보안등주/JW-P-03.png', images: ['./images/스텐보안등주/JW-P-03.png', './images/스텐보안등주/주원03.png'] },
    { id: 'JW-P-04', name: 'JW-P-04', category: '스텐보안등주', image: './images/스텐보안등주/JW-P-04.png', images: ['./images/스텐보안등주/JW-P-04.png', './images/스텐보안등주/주원04.png'] },
    { id: 'JW-P-05', name: 'JW-P-05', category: '스텐보안등주', image: './images/스텐보안등주/JW-P-05.png', images: ['./images/스텐보안등주/JW-P-05.png', './images/스텐보안등주/주원05.png'] },
    { id: 'JW-P-06', name: 'JW-P-06', category: '스텐보안등주', image: './images/스텐보안등주/JW-P-06.png', images: ['./images/스텐보안등주/JW-P-06.png', './images/스텐보안등주/주원06.png'] },
    { id: 'JW-P-07', name: 'JW-P-07', category: '스텐보안등주', image: './images/스텐보안등주/JW-P-07.png', images: ['./images/스텐보안등주/JW-P-07.png', './images/스텐보안등주/주원07.png'] },
    { id: 'JW-P-08', name: 'JW-P-08', category: '스텐보안등주', image: './images/스텐보안등주/JW-P-08.png', images: ['./images/스텐보안등주/JW-P-08.png', './images/스텐보안등주/주원08.png'] },
    { id: 'JW-P-09', name: 'JW-P-09', category: '스텐보안등주', image: './images/스텐보안등주/JW-P-09.png', images: ['./images/스텐보안등주/JW-P-09.png', './images/스텐보안등주/주원09.png'] },
    { id: 'JW-P-10', name: 'JW-P-10', category: '스텐보안등주', image: './images/스텐보안등주/JW-P-10.png', images: ['./images/스텐보안등주/JW-P-10.png', './images/스텐보안등주/주원10.png'] },

    // 스텐보안등주(글로브형) — JW-PG-XX + 주원XX 쌍으로 10개 제품
    { id: 'JW-PG-01', name: 'JW-PG-01', category: '스텐보안등주(글로브형)', image: './images/스텐보안등주(글로브형)/JW-PG-01.png', images: ['./images/스텐보안등주(글로브형)/JW-PG-01.png', './images/스텐보안등주(글로브형)/주원01.png'] },
    { id: 'JW-PG-02', name: 'JW-PG-02', category: '스텐보안등주(글로브형)', image: './images/스텐보안등주(글로브형)/JW-PG-02.png', images: ['./images/스텐보안등주(글로브형)/JW-PG-02.png', './images/스텐보안등주(글로브형)/주원02.png'] },
    { id: 'JW-PG-03', name: 'JW-PG-03', category: '스텐보안등주(글로브형)', image: './images/스텐보안등주(글로브형)/JW-PG-03.png', images: ['./images/스텐보안등주(글로브형)/JW-PG-03.png', './images/스텐보안등주(글로브형)/주원03.png'] },
    { id: 'JW-PG-04', name: 'JW-PG-04', category: '스텐보안등주(글로브형)', image: './images/스텐보안등주(글로브형)/JW-PG-04.png', images: ['./images/스텐보안등주(글로브형)/JW-PG-04.png', './images/스텐보안등주(글로브형)/주원04.png'] },
    { id: 'JW-PG-05', name: 'JW-PG-05', category: '스텐보안등주(글로브형)', image: './images/스텐보안등주(글로브형)/JW-PG-05.png', images: ['./images/스텐보안등주(글로브형)/JW-PG-05.png', './images/스텐보안등주(글로브형)/주원05.png'] },
    { id: 'JW-PG-06', name: 'JW-PG-06', category: '스텐보안등주(글로브형)', image: './images/스텐보안등주(글로브형)/JW-PG-06.png', images: ['./images/스텐보안등주(글로브형)/JW-PG-06.png', './images/스텐보안등주(글로브형)/주원06.png'] },
    { id: 'JW-PG-07', name: 'JW-PG-07', category: '스텐보안등주(글로브형)', image: './images/스텐보안등주(글로브형)/JW-PG-07.png', images: ['./images/스텐보안등주(글로브형)/JW-PG-07.png', './images/스텐보안등주(글로브형)/주원07.png'] },
    { id: 'JW-PG-08', name: 'JW-PG-08', category: '스텐보안등주(글로브형)', image: './images/스텐보안등주(글로브형)/JW-PG-08.png', images: ['./images/스텐보안등주(글로브형)/JW-PG-08.png', './images/스텐보안등주(글로브형)/주원08.png'] },
    { id: 'JW-PG-09', name: 'JW-PG-09', category: '스텐보안등주(글로브형)', image: './images/스텐보안등주(글로브형)/JW-PG-09.png', images: ['./images/스텐보안등주(글로브형)/JW-PG-09.png', './images/스텐보안등주(글로브형)/주원09.png'] },
    { id: 'JW-PG-10', name: 'JW-PG-10', category: '스텐보안등주(글로브형)', image: './images/스텐보안등주(글로브형)/JW-PG-10.png', images: ['./images/스텐보안등주(글로브형)/JW-PG-10.png', './images/스텐보안등주(글로브형)/주원10.png'] },
];
