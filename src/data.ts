import { Course, Testimonial } from './types';

export const COURSES: Course[] = [
  {
    id: 'course-1',
    tag: 'TÊN LỬA • HỆ THỐNG ĐẨY',
    title: 'Chế Tạo Tên Lửa Sẵn Sàng Phóng',
    description: 'Từ con số 0 đến khi phóng thành công. Học cách xây dựng tên lửa và hệ thống đẩy thực sự hoạt động ổn định trong môi trường vận hành thực tế, theo những mô hình có thể mở rộng quy mô.',
    meta: '12 chương • 8 giờ nội dung',
    price: '$297'
  },
  {
    id: 'course-2',
    tag: 'VỆ TINH • VẬN HÀNH MẶT ĐẤT',
    title: 'Đưa Vệ Tinh Vào Quỹ Đạo',
    description: 'Đưa vệ tinh vào quỹ đạo trong vài ngày, không phải vài tháng. Học các mô hình hạ tầng và quy trình vận hành thực sự hiệu quả ở quy mô lớn.',
    meta: '8 chương • 5 giờ nội dung',
    price: '$197'
  },
  {
    id: 'course-3',
    tag: 'CHIẾN LƯỢC • THƯƠNG MẠI HÓA',
    title: 'Chiến Lược Kinh Doanh Công Nghệ Vũ Trụ',
    description: 'Biến ý tưởng công nghệ vũ trụ của bạn thành một sản phẩm bán được. Học cách định vị, định giá và đưa sản phẩm ra thị trường.',
    meta: '6 chương • 4 giờ nội dung',
    price: '$497'
  },
  {
    id: 'course-4',
    tag: 'CỐ VẤN 1:1',
    title: 'Huấn Luyện Riêng 1:1',
    description: 'Tiếp cận trực tiếp 20 năm kinh nghiệm trong ngành hàng không vũ trụ. Hướng dẫn cá nhân hóa cho từng thử thách cụ thể trong dự án của bạn.',
    meta: '4 buổi mỗi tháng',
    price: '$1,500/tháng'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Khóa học của Khoa giúp mình đưa hệ thống vệ tinh đầu tiên vào hoạt động chỉ trong một tuần. Góc nhìn thực chiến trong ngành là điều mà các khóa học khác còn thiếu.',
    author: 'Minh Anh',
    role: 'Trưởng nhóm Kỹ thuật, Tập đoàn lớn'
  },
  {
    id: 'test-2',
    quote: 'Cuối cùng cũng có người hiểu rằng công nghệ vũ trụ không nằm ở những bản demo hào nhoáng — mà là xây dựng hệ thống đáng tin cậy, vận hành ổn định ở quy mô lớn.',
    author: 'Quang Huy',
    role: 'Trưởng nhóm Vũ trụ, Tư vấn'
  },
  {
    id: 'test-3',
    quote: 'Buổi cố vấn 1:1 thực sự xứng đáng từng đồng. Khoa đã giúp nhóm mình tránh được 3 tháng sai lầm về kiến trúc hệ thống và cứu cả dự án.',
    author: 'Đức Anh',
    role: 'CTO, Startup Vũ trụ'
  },
  {
    id: 'test-4',
    quote: 'Mình đã xem lại từng video YouTube hai lần. Các khóa học trả phí còn đi sâu hơn vào những mô hình vận hành thực tế mà mình cần.',
    author: 'Thảo Vy',
    role: 'Kỹ sư Hàng không Vũ trụ'
  },
  {
    id: 'test-5',
    quote: 'Giảng dạy rõ ràng, thực tế, không màu mè. Khoa biến những hệ thống vũ trụ phức tạp thành các bước mà mình thực sự có thể làm theo.',
    author: 'Hoài Nam',
    role: 'Kiến trúc sư Giải pháp'
  }
];
