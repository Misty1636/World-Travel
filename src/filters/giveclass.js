export default function (item) {
  let category = '';
  switch (item) {
    case '亞洲':
      category = 'badge-light';
      break;
    case '歐洲':
      category = 'badge-secondary';
      break;
    case '大洋洲':
      category = 'badge-primary';
      break;
    case '美洲':
      category = 'badge-danger';
      break;
    case '非洲':
      category = 'badge-warning';
      break;
    default:
      category = '';
      break;
  }
  return category;
}
