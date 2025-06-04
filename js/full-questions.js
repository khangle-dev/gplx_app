const originalQuestions = 
    [
    {
        "image": "",
        "no": 1,
        "index": 1,
        "text": "Phần của đường bộ được sử dụng cho phương tiện giao thông đường bộ đi lại là gì?",
        "tip": "Phần đường xe chạy là phần của đường bộ được sử dụng cho phương tiện giao thông qua lại.",
        "answers": [
            {
                "id": 1,
                "text": "Phần mặt đường và lề đường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Phần đường xe chạy.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Phần đường xe cơ giới.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 1,
        "a2": 1,
        "b1": 1,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 2,
        "index": 2,
        "text": "Làn đường là gì?",
        "tip": "Làn đường có bề rộng đủ cho xe chạy an toàn.",
        "answers": [
            {
                "id": 1,
                "text": "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ chiều rộng cho xe chạy an toàn.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Là đường cho xe ô tô chạy, dừng, đỗ an toàn.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 2,
        "a2": 2,
        "b1": 2,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 3,
        "index": 3,
        "text": "Khổ giới hạn của đường bộ được hiểu như thế nào là đúng?",
        "tip": "Khổ giới hạn đường bộ có giới hạn về chiều cao, chiều rộng.",
        "answers": [
            {
                "id": 1,
                "text": "Khổ giới hạn của đường bộ là khoảng trống có kích thước giới hạn về chiều rộng, chiều cao của đường bộ để các xe, bao gồm cả hàng hoá xếp trên xe đi qua được an toàn và được xác định theo quy chuẩn, tiêu chuẩn kỹ thuật của đường bộ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Là khoảng trống có kích thước giới hạn về chiều cao của cầu, bến phà, hầm trên đường bộ để các xe đi qua được an toàn.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 3,
        "a2": 3,
        "b1": 3,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 4,
        "index": 4,
        "text": "Dải phân cách được lắp đặt để làm gì?",
        "tip": "Dải phân cách phân chia mặt đường thành hai chiều xe chạy riêng biệt.",
        "answers": [
            {
                "id": 1,
                "text": "Để phân chia các làn đường dành cho xe cơ giới và xe thô sơ trên đường cao tốc.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Để phân chia phần đường xe chạy thành hai chiều riêng biệt hoặc để phân chia phần đường dành cho xe cơ giới và xe thô sơ hoặc của nhiều loại xe khác nhau trên cùng một chiều đường.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Để phân tách phần đường xe chạy và hành lang an toàn giao thông.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 4,
        "a2": 4,
        "b1": 4,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 5,
        "index": 5,
        "text": "Vạch kẻ đường là gì?",
        "tip": "Vạch kẻ đường chỉ sự phân chia làn đường.",
        "answers": [
            {
                "id": 1,
                "text": "Là báo hiệu đường bộ để hỗ trợ cảnh báo nguy hiểm cho người tham gia giao thông đường bộ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Là báo hiệu cho người tham gia giao thông đường bộ về các thông tin của đường bộ.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 5,
        "a2": 5,
        "b1": 5,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 6,
        "index": 6,
        "text": "Người điều khiển phương tiện tham gia giao thông đường bộ được hiểu như thế nào là đúng?",
        "tip": "Người điều khiển phương tiện xe cơ giới, xe thô sơ và xe máy chuyên dùng.",
        "answers": [
            {
                "id": 1,
                "text": "Là người điều khiển xe cơ giới, người điều khiển xe thô sơ, người điều khiển xe máy chuyên dùng.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Là người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 6,
        "a2": 6,
        "b1": 6,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 7,
        "index": 7,
        "text": "Người lái xe được hiểu như thế nào là đúng?",
        "tip": "Người lái xe là người điều khiển xe cơ giới.",
        "answers": [
            {
                "id": 1,
                "text": "Là người điều khiển xe cơ giới.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Là người điều khiển xe thô sơ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Là người điều khiển xe máy chuyên dùng.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 7,
        "a2": 7,
        "b1": 7,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 8,
        "index": 8,
        "text": "Trong nhóm các phương tiện giao thông đường bộ dưới đây, nhóm phương tiện nào là xe cơ giới?",
        "tip": "Xe cơ giới không có xe đạp.",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô; máy kéo; xe mô tô hai bánh; xe mô tô ba bánh; xe gắn máy; xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng; xe đạp, xe đạp máy, xe đạp điện.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô; rơ moóc được kéo bởi xe ô tô; sơ mi rơ moóc được kéo bởi ô tô đầu kéo; xe chở người bốn bánh có gắn động cơ; xe chở hàng bốn bánh có gắn động cơ; xe mô tô, xe gắn máy và các loại xe tương tự.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 8,
        "a2": 8,
        "b1": 8,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 9,
        "index": 9,
        "text": "Trong nhóm các phương tiện giao thông đường bộ dưới đây, nhóm phương tiện nào là xe thô sơ?",
        "tip": "Xe thô sơ không có máy.",
        "answers": [
            {
                "id": 1,
                "text": "Xe đạp, xe đạp máy, xe đạp điện; xe xích lô; xe lăn dùng cho người khuyết tật; xe vật nuôi kéo và các loại xe tương tự.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe đạp (kể cả xe đạp máy, xe đạp điện), xe gắn máy, xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe ô tô, máy kéo, rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 9,
        "a2": 9,
        "b1": 9,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 10,
        "index": 10,
        "text": "Phương tiện giao thông đường bộ gồm những loại nào?",
        "tip": "Phương tiện giao thông gồm tất cả các loại phương tiện.",
        "answers": [
            {
                "id": 1,
                "text": "Phương tiện giao thông cơ giới đường bộ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Phương tiện giao thông thô sơ đường bộ, xe máy chuyên dùng và các loại xe tương tự.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 10,
        "a2": 10,
        "b1": 10,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 11,
        "index": 11,
        "text": "Người tham gia giao thông đường bộ gồm những đối tượng nào?",
        "tip": "Người tham gia giao thông gồm người sử dụng phương tiện và người đi bộ.",
        "answers": [
            {
                "id": 1,
                "text": "Người điều khiển, người được chở trên phương tiện tham gia giao thông đường bộ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Người điều khiển, dẫn dắt vật nuôi trên đường bộ; người đi bộ trên đường bộ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 11,
        "a2": 11,
        "b1": 11,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 12,
        "index": 12,
        "text": "Người điều khiển phương tiện tham gia giao thông đường bộ gồm những đối tượng nào dưới đây?",
        "tip": "Người điều khiển phương tiện cả xe cơ giới và xe máy chuyên dùng.",
        "answers": [
            {
                "id": 1,
                "text": "Người điều khiển xe cơ giới, người điều khiển xe thô sơ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Người điều khiển xe máy chuyên dùng.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 12,
        "a2": 12,
        "b1": 12,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 13,
        "index": 13,
        "text": "Người điều khiển giao thông đường bộ được hiểu như thế nào là đúng?",
        "tip": "Người điều khiển giao thông là cảnh sát giao thông.",
        "answers": [
            {
                "id": 1,
                "text": "Là người điều khiển phương tiện tham gia giao thông đường bộ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Là Cảnh sát giao thông và người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Là người tham gia giao thông đường bộ.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 13,
        "a2": 13,
        "b1": 13,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 14,
        "index": 14,
        "text": "Dừng xe được hiểu như thế nào là đúng?",
        "tip": "Dừng xe là đứng yên tạm thời.",
        "answers": [
            {
                "id": 1,
                "text": "Là trạng thái đứng yên của xe không giới hạn thời gian để cho người lên, xuống xe, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Là trạng thái đứng yên tạm thời của xe trong một khoảng thời gian cần thiết đủ để cho người lên xe, xuống xe, xếp dỡ hàng hóa, kiểm tra kỹ thuật xe hoặc hoạt động khác. Khi dừng xe không được tắt máy và không được rời khỏi vị trí lái, trừ trường hợp rời khỏi vị trí lái để đóng, mở cửa xe, xếp dỡ hàng hóa, kiểm tra kỹ thuật xe nhưng phải sử dụng phanh đỗ xe hoặc thực hiện biện pháp an toàn khác.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Là trạng thái đứng yên của xe không giới hạn thời gian giữa 02 lần vận chuyển hàng hóa hoặc hành khách.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 15,
        "index": 15,
        "text": "Đỗ xe được hiểu như thế nào là đúng?",
        "tip": "<ĐỖ XE là trạng thái đứng yên của xe KHÔNG GIỚI HẠN THỜI GIAN.",
        "answers": [
            {
                "id": 1,
                "text": "Là trạng thái đứng yên của xe có giới hạn thời gian trong một khoảng thời gian cần thiết đủ để cho người lên, xuống xe đó, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Là trạng thái đứng yên của xe không giới hạn thời gian. Khi đỗ xe, người điều khiển phương tiện tham gia giao thông đường bộ chỉ được rời khỏi xe khi đã sử dụng phanh đỗ xe hoặc thực hiện biện pháp an toàn khác. Xe đỗ trên đoạn đường dốc phải đánh lái về phía lề đường, chèn bánh.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 16,
        "index": 16,
        "text": "Đường cao tốc được hiểu như thế nào là đúng?",
        "tip": "Đường cao tốc là một cấp kỹ thuật của đường bộ.",
        "answers": [
            {
                "id": 1,
                "text": "Là một cấp kỹ thuật của đường bộ, chỉ dành cho một số loại xe cơ giới, xe máy chuyên dùng tham gia giao thông theo quy định của pháp luật. Có dải phân cách phân chia hai chiều xe chạy riêng biệt, không giao nhau cùng mức với một hoặc các đường khác, chỉ cho xe ra, vào ở những điểm nhất định. Có hàng rào bảo vệ, trang thiết bị phục vụ, bảo đảm giao thông liên tục, an toàn, rút ngắn thời gian hành trình.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Là đường nối liền Thủ đô Hà Nội với trung tâm hành chính cấp tỉnh; đường nối liền các trung tâm hành chính cấp tỉnh; đường có vị trí quan trọng đối với sự phát triển kinh tế - xã hội, bảo đảm quốc phòng, an ninh của vùng, khu vực.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 17,
        "index": 17,
        "text": "Thiết bị an toàn cho trẻ em được hiểu như thế nào là đúng?",
        "tip": "Thiết bị đảm bảo an toàn cho trẻ em ở tư thế ngồi hoặc nằm.",
        "answers": [
            {
                "id": 1,
                "text": "Là thiết bị có đủ khả năng bảo đảm an toàn cho trẻ em ở tư thế ngồi hoặc nằm trên xe ô tô, được thiết kế để giảm nguy cơ chấn thương cho người dùng trong trường hợp xảy ra va chạm hoặc xe ô tô giảm tốc độ đột ngột, bằng cách hạn chế sự di chuyển của cơ thể trẻ em.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Là thiết bị có đủ khả năng bảo đảm an toàn cho trẻ em ở tư thế đứng hoặc nằm trên xe ô tô, được thiết kế để giảm nguy cơ chấn thương cho người dùng trong trường hợp xe ô tô lưu thông bình thường.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 18,
        "index": 18,
        "text": "Theo chức năng phục vụ thì đường bộ được phân loại như thế nào?",
        "tip": "Đường bộ gồm cả đường bên và đường nội bộ.",
        "answers": [
            {
                "id": 1,
                "text": "Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Đường chính, đường nhánh, đường gom, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 19,
        "index": 19,
        "text": "Hành vi nào dưới đây bị nghiêm cấm?",
        "tip": "Cấm rải vật sắc nhọn",
        "answers": [
            {
                "id": 1,
                "text": "Sử dụng xe đạp đi trên các tuyến quốc lộ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Rải vật sắc nhọn, đổ chất gây trơn trượt trên đường bộ.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 14,
        "a2": 14,
        "b1": 14,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 20,
        "index": 20,
        "text": "Hành vi đưa xe cơ giới, xe máy chuyên dùng tham gia giao thông đường bộ nào dưới đây bị cấm?",
        "tip": "Cả hai ý không có giấy chứng nhận hoặc hết niên hạn.",
        "answers": [
            {
                "id": 1,
                "text": "Không có chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Hết niên hạn sử dụng.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 15,
        "a2": 15,
        "b1": 15,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 21,
        "index": 21,
        "text": "Tổ chức đua xe được phép thực hiện khi nào?",
        "tip": "Được cơ quan có thẩm quyền cấp phép.",
        "answers": [
            {
                "id": 1,
                "text": "Trên đường phố không có người qua lại.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Được người dân ủng hộ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Được cơ quan có thẩm quyền cấp phép.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 16,
        "a2": 16,
        "b1": 16,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 22,
        "index": 22,
        "text": "Hành vi đua xe trái phép bị xử lý như thế nào?",
        "tip": "Xử lý hành chính hoặc hình sự.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ bị nhắc nhở.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Tùy theo mức độ của hành vi vi phạm có thể bị xử lý hành chính hoặc xử lý hình sự.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 17,
        "a2": 17,
        "b1": 17,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 23,
        "index": 23,
        "text": "Hành vi của người điều khiển xe ô tô và các loại xe tương tự khi tham gia giao thông đường bộ mà trong cơ thể có chất ma túy thì bị áp dụng hình thức xử phạt vi phạm hành chính nào dưới đây?",
        "tip": "Cơ thể có chất ma túy bị phạt tiền và bị tước giấy phép lái xe.",
        "answers": [
            {
                "id": 1,
                "text": "Bị phạt tiền.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Bị tước giấy phép lái xe.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 24,
        "index": 24,
        "text": "Người điều khiển phương tiện tham gia giao thông đường bộ mà trong máu hoặc hơi thở có nồng độ cồn có bị nghiêm cấm không?",
        "tip": "Cấm tham gia giao thông khi có nồng độ cồn.",
        "answers": [
            {
                "id": 1,
                "text": "Bị nghiêm cấm.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Không bị nghiêm cấm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không bị nghiêm cấm, nếu nồng độ cồn trong máu ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 18,
        "a2": 18,
        "b1": 18,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 25,
        "index": 25,
        "text": "Hành vi của người điều khiển xe ô tô và các loại xe tương tự khi tham gia giao thông đường bộ mà trong máu hoặc hơi thở có nồng độ cồn thì bị áp dụng hình thức xử phạt vi phạm hành chính nào dưới đây?",
        "tip": "Có nồng độ cồn thì bị phạt tiền và có thể bị tước giấy phép lái xe.",
        "answers": [
            {
                "id": 1,
                "text": "Bị phạt tiền.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Có thể bị tước giấy phép lái xe.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 26,
        "index": 26,
        "text": "Theo Luật Phòng chống tác hại của rượu, bia, đối tượng nào dưới đây bị cấm sử dụng rượu, bia khi tham gia giao thông?",
        "tip": "Người điều khiển xe cấm sử dụng rượu, bia.",
        "answers": [
            {
                "id": 1,
                "text": "Người điều khiển xe ô tô, xe mô tô, xe đạp, xe gắn máy.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Người được chở trên xe cơ giới.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 19,
        "a2": 19,
        "b1": 19,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 27,
        "index": 27,
        "text": "Hành vi giao xe ô tô, mô tô cho người nào sau đây tham gia giao thông đường bộ bị nghiêm cấm?",
        "tip": "Cấm giao xe cho người không đủ điều kiện về tuổi, giấy phép hoặc bị trừ hết 12 điểm.",
        "answers": [
            {
                "id": 1,
                "text": "Người chưa đủ tuổi theo quy định.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Người không có giấy phép lái xe.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Người có giấy phép lái xe nhưng đã bị trừ hết 12 điểm.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 20,
        "a2": 20,
        "b1": 20,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 28,
        "index": 28,
        "text": "Hành vi nào sau đây bị nghiêm cấm?",
        "tip": "Cấm lạng lách, đánh võng và xúc phạm",
        "answers": [
            {
                "id": 1,
                "text": "Điều khiển xe cơ giới lạng lách, đánh võng, rú ga liên tục khi tham gia giao thông trên đường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xúc phạm, đe dọa, cản trở, chống đối hoặc không chấp hành hiệu lệnh, hướng dẫn, yêu cầu kiểm tra, kiểm soát của người thi hành công vụ về bảo đảm trật tự, an toàn giao thông đường bộ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 21,
        "a2": 21,
        "b1": 21,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 29,
        "index": 29,
        "text": "Các hành vi nào sau đây bị cấm đối với phương tiện tham gia giao thông đường bộ?",
        "tip": "Cấm cải tạo xe trái phép.",
        "answers": [
            {
                "id": 1,
                "text": "Cải tạo xe ô tô loại khác thành xe ô tô chở người phục vụ mục đích quốc phòng, an ninh.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Cải tạo trái phép; cố ý can thiệp làm sai lệch chỉ số trên đồng hồ báo quãng đường đã chạy của xe ô tô; cắt, hàn, tẩy xóa, đục sửa, đóng lại trái phép số khung, số động cơ của xe cơ giới, xe máy chuyên dùng.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 22,
        "a2": 22,
        "b1": 22,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 30,
        "index": 30,
        "text": "Hành vi nào sau đây bị cấm?",
        "tip": "Cấm lắp đặt thiết bị gây mất trật tự và cản trở người, phương tiện tham gia giao thông.",
        "answers": [
            {
                "id": 1,
                "text": "Lắp đặt, sử dụng thiết bị âm thanh, ánh sáng trên xe cơ giới, xe máy chuyên dùng gây mất trật tự, an toàn giao thông đường bộ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Cản trở người, phương tiện tham gia giao thông trên đường bộ; ném gạch, đất, đá, cát hoặc vật thể khác vào người, phương tiện đang tham gia giao thông trên đường bộ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 23,
        "a2": 23,
        "b1": 23,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 31,
        "index": 31,
        "text": "Việc sản xuất, sử dụng, mua, bán trái phép biển số xe có bị nghiêm cấm hay không?",
        "tip": "Cấm mua bán trái phép biển số xe.",
        "answers": [
            {
                "id": 1,
                "text": "Không bị nghiêm cấm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Bị nghiêm cấm.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Bị nghiêm cấm tùy trường hợp.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 24,
        "a2": 24,
        "b1": 24,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 32,
        "index": 32,
        "text": "Khi điều khiển phương tiện tham gia giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
        "tip": "Cấm lạng lách đánh võng.",
        "answers": [
            {
                "id": 1,
                "text": "Thay đổi tốc độ của xe nhiều lần.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Điều khiển phương tiện sau 23 giờ trong ngày.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Lạng lách, đánh võng, rú ga liên tục.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 25,
        "a2": 25,
        "b1": 25,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 33,
        "index": 33,
        "text": "Có bao nhiêu nhóm biển báo hiệu đường bộ?",
        "tip": "Có 5 nhóm biển báo.",
        "answers": [
            {
                "id": 1,
                "text": "Ba nhóm: Biển báo cấm, biển báo nguy hiểm và biển hiệu lệnh.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Bốn nhóm: Biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh và biển phụ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Năm nhóm: Biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh, biển chỉ dẫn, biển phụ.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 26,
        "a2": 26,
        "b1": 26,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 34,
        "index": 34,
        "text": "Tại nơi có vạch kẻ đường hoặc tại nơi mà người đi bộ, xe lăn của người khuyết tật đang qua đường, người điều khiển phương tiện tham gia giao thông phải thực hiện như thế nào?",
        "tip": "Quan sát, giảm tốc độ hoặc dừng lại.",
        "answers": [
            {
                "id": 1,
                "text": "Giảm tốc độ và nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường đảm bảo an toàn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn cho người đi bộ, xe lăn của người khuyết tật qua đường.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Quan sát, tăng tốc độ và điều khiển phương tiện nhanh chóng đi qua.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 27,
        "a2": 27,
        "b1": 27,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 35,
        "index": 35,
        "text": "Người điều khiển xe mô tô phải phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong các trường hợp nào dưới đây?",
        "tip": "Giảm tốc độ ở đường hẹp, cầu cống hẹp hoặc trời mưa.",
        "answers": [
            {
                "id": 1,
                "text": "Đường hẹp, đường vòng, đường quanh co, đường đèo, dốc.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nơi cầu, cống hẹp, đập tràn, đường ngầm, hầm chui, hầm đường bộ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Trời mưa, gió, sương, khói, bụi, mặt đường trơn trượt, lầy lội, có nhiều đất đá, vật liệu rơi vãi ảnh hưởng đến an toàn giao thông đường bộ.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 28,
        "a2": 28,
        "b1": 28,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "q82.png",
        "no": 36,
        "index": 36,
        "text": "Khi gặp hiệu lệnh điều khiển của Cảnh sát giao thông như hình dưới đây thì người tham gia giao thông đường bộ phải đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Người điều khiển giao thông tay giang ngang thì trước mặt và sau lưng dừng lại.",
        "answers": [
            {
                "id": 1,
                "text": "Người tham gia giao thông đường bộ ở các hướng phải dừng lại.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Người tham gia giao thông đường bộ ở các hướng được đi theo chiều gậy chỉ của Cảnh sát giao thông.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Người tham gia giao thông đường bộ ở phía trước và phía sau người điều khiển được đi tất cả các hướng; người tham gia giao thông đường bộ ở phía bên phải và phía bên trái người điều khiển phải dừng lại.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Người tham gia giao thông đường bộ ở phía trước và phía sau người điều khiển phải dừng lại; người tham gia giao thông đường bộ ở phía bên phải và phía bên trái người điều khiển được đi tất cả các hướng.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 29,
        "a2": 29,
        "b1": 29,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q83.png",
        "no": 37,
        "index": 37,
        "text": "Khi gặp hiệu lệnh điều khiển của Cảnh sát giao thông như hình dưới đây thì người tham gia giao thông đường bộ phải đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Người điều khiển giao thông giơ tay thẳng đứng thì ở các hướng phải dừng lại.",
        "answers": [
            {
                "id": 1,
                "text": "Người tham gia giao thông đường bộ ở phía sau Cảnh sát giao thông được đi, các hướng khác phải dừng lại.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Người tham gia giao thông đường bộ được rẽ phải theo chiều mũi tên màu xanh ở bục Cảnh sát giao thông.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Người tham gia giao thông đường bộ ở tất cả các hướng phải dừng lại, trừ các xe đã ở trong khu vực giao nhau.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Người tham gia giao thông đường bộ ở phía trước Cảnh sát giao thông phải dừng lại, các hướng khác được đi.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 30,
        "a2": 30,
        "b1": 30,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 38,
        "index": 38,
        "text": "Khi hiệu lệnh của người điều khiển giao thông trái với tín hiệu đèn giao thông hoặc biển báo hiệu đường bộ thì người tham gia giao thông đường bộ phải chấp hành báo hiệu đường bộ nào dưới đây?",
        "tip": "Ưu tiên hiệu lệnh của người điều khiển giao thông.",
        "answers": [
            {
                "id": 1,
                "text": "Theo hiệu lệnh của người điều khiển giao thông.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Theo tín hiệu đèn giao thông.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Theo biển báo hiệu đường bộ.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 31,
        "a2": 31,
        "b1": 31,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 39,
        "index": 39,
        "text": "Khi ở một vị trí vừa có biển báo hiệu đặt cố định vừa có biển báo hiệu tạm thời mà hai biển có ý nghĩa khác nhau, người tham gia giao thông đường bộ phải chấp hành hiệu lệnh của biển báo hiệu nào?",
        "tip": "Ưu tiên biển báo tạm thời.",
        "answers": [
            {
                "id": 1,
                "text": "Biển báo hiệu đặt cố định.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển báo hiệu tạm thời.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Theo quyết định của người tham gia giao thông nhưng phải bảo đảm an toàn.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 32,
        "a2": 32,
        "b1": 32,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 40,
        "index": 40,
        "text": "Tại nơi đường giao nhau, khi đèn điều khiển giao thông có tín hiệu màu vàng, người điều khiển phương tiện tham gia giao thông phải chấp hành như thế nào là đúng quy tắc giao thông?",
        "tip": "Đèn vàng dừng lại trước vạch dừng.",
        "answers": [
            {
                "id": 1,
                "text": "Dừng lại trước vạch dừng; trường hợp đang đi trên vạch dừng hoặc đã đi qua vạch dừng mà tín hiệu đèn màu vàng thì được đi tiếp; trường hợp tín hiệu đèn màu vàng nhấp nháy, người điều khiển phương tiện tham gia giao thông đường bộ được đi nhưng phải quan sát, giảm tốc độ hoặc dừng lại nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường hoặc các phương tiện khác.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Tăng tốc độ nhanh chóng vượt qua nút giao.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Quan sát, giảm tốc độ, từ từ vượt qua nút giao.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 33,
        "a2": 33,
        "b1": 33,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 41,
        "index": 41,
        "text": "Người lái xe trên đường cần chấp hành quy định về tốc độ tối đa như thế nào?",
        "tip": "Không vượt quá tốc độ tối đa.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ lớn hơn tốc độ tối đa cho phép khi đường vắng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chỉ lớn hơn tốc độ tối đa cho phép khi vào ban đêm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không vượt quá tốc độ tối đa cho phép.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 34,
        "a2": 34,
        "b1": 34,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 42,
        "index": 42,
        "text": "Khi chở trẻ em dưới 10 tuổi và chiều cao dưới 1,35 mét trên xe ô tô, người lái xe phải thực hiện quy tắc nào dưới đây để bảo đảm an toàn?",
        "tip": "Trẻ dưới 10 tuổi không được ngồi cùng hàng ghế với người lái xe.",
        "answers": [
            {
                "id": 1,
                "text": "Không được cho trẻ em ngồi cùng hàng ghế với người lái xe, trừ loại xe ô tô chỉ có một hàng ghế; người lái xe phải sử dụng, hướng dẫn sử dụng thiết bị an toàn phù hợp cho trẻ em.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Cho trẻ em ngồi cùng hàng ghế với người lái xe, người lái xe phải sử dụng, hướng dẫn sử dụng thiết bị an toàn phù hợp cho trẻ em.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 43,
        "index": 43,
        "text": "Phương tiện tham gia giao thông đường bộ di chuyển với tốc độ thấp hơn phải đi như thế nào?",
        "tip": "Tốc độ thấp đi về bên phải.",
        "answers": [
            {
                "id": 1,
                "text": "Đi về bên trái theo chiều đi của mình.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đi về bên phải theo chiều đi của mình.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Đi ở bất cứ bên nào nhưng phải bấm đèn cảnh báo nguy hiểm để báo hiệu cho các phương tiện khác.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 35,
        "a2": 35,
        "b1": 35,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 44,
        "index": 44,
        "text": "Trên một chiều đường có vạch kẻ phân làn đường, người lái xe cơ giới, xe máy chuyên dùng phải điều khiển xe đi trên làn đường nào?",
        "tip": "Xe cơ giới, xe máy chuyên dùng đi bên trái.",
        "answers": [
            {
                "id": 1,
                "text": "Đi trên làn đường bên phải trong cùng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đi trên làn đường bên trái.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Đi ở bất cứ làn nào nhưng phải bảo đảm tốc độ cho phép.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 36,
        "a2": 36,
        "b1": 36,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 45,
        "index": 45,
        "text": "Người lái xe phải giảm tốc độ, có tín hiệu rẽ phải và đi sát về bên phải của phần đường xe chạy trong các trường hợp nào dưới đây?",
        "tip": "Xe sau xin vượt thì giảm tốc độ, tín hiệu rẽ phải nếu an toàn.",
        "answers": [
            {
                "id": 1,
                "text": "Khi xe chạy phía trước có tín hiệu vượt xe khác.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Khi phía trước có xe chạy ngược chiều.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Khi xe sau xin vượt nếu đủ điều kiện an toàn.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Khi xe sau có tín hiệu vượt bên phải.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 37,
        "a2": 37,
        "b1": 37,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 46,
        "index": 46,
        "text": "Vượt xe là gì?",
        "tip": "Vượt xe khi chiều đường chỉ có 1 làn đường.",
        "answers": [
            {
                "id": 1,
                "text": "Là tình huống giao thông trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, xe đi phía sau di chuyển sang bên trái để di chuyển lên trước xe phía trước.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Là tình huống giao thông trên đường có từ hai làn đường dành cho xe cơ giới cùng chiều trở lên được phân biệt bằng vạch kẻ đường, xe đi phía sau di chuyển lên trước xe phía trước theo quy tắc sử dụng làn đường.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 38,
        "a2": 38,
        "b1": 38,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 47,
        "index": 47,
        "text": "Người lái xe được phép vượt xe trên cầu hẹp có một làn đường, đường cong có tầm nhìn bị hạn chế hay không?",
        "tip": "Không được phép vượt trên cầu hẹp có 1 làn đường.",
        "answers": [
            {
                "id": 1,
                "text": "Được phép vượt khi đường vắng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không được phép vượt.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Được phép vượt khi có việc gấp.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 39,
        "a2": 39,
        "b1": 39,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 48,
        "index": 48,
        "text": "Muốn vượt xe phía trước, người lái xe mô tô phải có tín hiệu như thế nào dưới đây để bảo đảm an toàn?",
        "tip": "Báo hiệu nhấp nháy đèn khi muốn vượt.",
        "answers": [
            {
                "id": 1,
                "text": "Bấm còi liên tục để xe phía trước biết xe mình xin vượt.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Rú ga liên tục để xe phía trước biết xe mình xin vượt.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Báo hiệu nhấp nháy bằng đèn chiếu sáng phía trước hoặc còi.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 40,
        "a2": 40,
        "b1": 40,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 49,
        "index": 49,
        "text": "Khi lái xe trong khu đông dân cư, khu vực cơ sở khám bệnh, chữa bệnh trừ các khu vực có biển cấm sử dụng còi, người lái xe được sử dụng còi trong thời gian nào?",
        "tip": "Được sử dụng còi từ 5 giờ đến 22 giờ.",
        "answers": [
            {
                "id": 1,
                "text": "Từ 22 giờ ngày hôm trước đến 05 giờ ngày hôm sau.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Từ 05 giờ đến 22 giờ.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Từ 23 giờ ngày hôm trước đến 05 giờ sáng hôm sau.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 41,
        "a2": 41,
        "b1": 41,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 50,
        "index": 50,
        "text": "Phương tiện tham gia giao thông đường bộ chỉ được sử dụng tín hiệu còi trong các trường hợp nào sau đây?",
        "tip": "Dùng còi để báo  tình huống mất an toàn.",
        "answers": [
            {
                "id": 1,
                "text": "Để báo hiệu cho người tham gia giao thông đường bộ khi xuất hiện tình huống có thể mất an toàn giao thông hoặc báo hiệu chuẩn bị vượt xe.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Để báo hiệu cho người tham gia giao thông đường bộ từ 22 giờ ngày hôm trước đến 05 giờ ngày hôm sau trong khu đông dân cư, khu vực cơ sở khám bệnh, chữa bệnh, trừ xe ưu tiên.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 51,
        "index": 51,
        "text": "Người lái xe sử dụng đèn như thế nào khi đi trên các đoạn đường qua khu đông dân cư có hệ thống chiếu sáng đang hoạt động?",
        "tip": "Chỉ bật đèn chiếu gần trong khu dân cư.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ bật đèn chiếu xa (đèn pha).",
                "correct": false
            },
            {
                "id": 2,
                "text": "Bật đèn chiếu xa (đèn pha) khi đường vắng, bật đèn chiếu gần (đèn cốt) khi có xe đi ngược chiều.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Chỉ bật đèn chiếu gần (đèn cốt).",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 42,
        "a2": 42,
        "b1": 42,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 52,
        "index": 52,
        "text": "Khi điều khiển phương tiện tham gia giao thông, hành vi nào sau đây bị cấm?",
        "tip": "Cấm cầm và sử dụng điện thoại khi đang tham gia giao thông.",
        "answers": [
            {
                "id": 1,
                "text": "Dùng tay cầm và sử dụng điện thoại hoặc thiết bị điện tử khác.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Chỉ được chở người trên thùng xe ô tô chở hàng trong trường hợp chở người đi làm nhiệm vụ cứu nạn, cứu hộ, phòng, chống thiên tai, dịch bệnh hoặc thực hiện nhiệm vụ khẩn cấp.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 43,
        "a2": 43,
        "b1": 43,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 53,
        "index": 53,
        "text": "Người lái xe không được vượt xe khác khi gặp trường hợp nào dưới đây?",
        "tip": "Cầu hẹp có 1 làn đường không được vượt.",
        "answers": [
            {
                "id": 1,
                "text": "Trên cầu hẹp có một làn đường; nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt; khi gặp xe ưu tiên.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Trên cầu có từ 02 làn xe trở lên.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Trên đường có 02 làn đường được phân chia làn bằng vạch kẻ nét đứt.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 44,
        "a2": 44,
        "b1": 44,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 54,
        "index": 54,
        "text": "Nơi nào cấm quay đầu xe?",
        "tip": "Cấm quay đầu xe trên cầu, đường hẹp.",
        "answers": [
            {
                "id": 1,
                "text": "Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, gầm cầu vượt, ngầm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Tại nơi đường bộ giao nhau cùng mức với đường sắt, đường hẹp, đường dốc, đoạn đường cong tầm nhìn bị che khuất, trên đường cao tốc, trong hầm đường bộ, trên đường một chiều.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 45,
        "a2": 45,
        "b1": 45,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 55,
        "index": 55,
        "text": "Người lái xe không được quay đầu xe trong các trường hợp nào dưới đây?",
        "tip": "Không quay đầu xe trên cầu.",
        "answers": [
            {
                "id": 1,
                "text": "Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, trên đường cao tốc, tại nơi đường bộ giao nhau cùng mức với đường sắt, đường hẹp, đường dốc.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Ở phía trước hoặc phía sau của phần đường dành cho người đi bộ qua đường, trên đường quốc lộ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 46,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 56,
        "index": 56,
        "text": "Trước khi cho xe chuyển hướng, người lái xe phải làm gì để bảo đảm an toàn giao thông?",
        "tip": "Cho xe chuyển hướng phải quan sát, giảm tốc độ và chuyền dần.",
        "answers": [
            {
                "id": 1,
                "text": "Phải quan sát, bảo đảm khoảng cách an toàn với xe phía sau.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giảm tốc độ và có tín hiệu báo hướng rẽ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Chuyển dần sang làn gần nhất với hướng rẽ. Khi bảo đảm an toàn, không gây trở ngại cho người và phương tiện khác mới được chuyển hướng.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 46,
        "a2": 46,
        "b1": 47,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 57,
        "index": 57,
        "text": "Khi chuyển làn đường, người lái xe phải bật đèn tín hiệu báo rẽ như thế nào là đúng quy tắc giao thông?",
        "tip": "Bật tín hiệu đèn khi thay đổi làn đường.",
        "answers": [
            {
                "id": 1,
                "text": "Khi bắt đầu chuyển làn đường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Trước khi thay đổi làn đường.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Sau khi thay đổi làn đường.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 47,
        "a2": 47,
        "b1": 48,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 58,
        "index": 58,
        "text": "Người lái xe không được lùi xe ở những khu vực nào dưới đây?",
        "tip": "Không lùi xe ở đường một chiều, nơi giao nhau hoặc tầm nhìn bị che khuất.",
        "answers": [
            {
                "id": 1,
                "text": "Ở đường một chiều, khu vực cấm dừng, trên phần đường dành cho người đi bộ qua đường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nơi đường bộ giao nhau, đường bộ giao nhau cùng mức với đường sắt.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Nơi tầm nhìn bị che khuất, trong hầm đường bộ, trên đường cao tốc.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 59,
        "index": 59,
        "text": "Người điều khiển phương tiện tham gia giao thông không được dừng xe, đỗ xe ở những vị trí nào sau đây?",
        "tip": "Không dừng, đỗ xe: miệng cống, hầm, phạm vi an toàn đường sắt.",
        "answers": [
            {
                "id": 1,
                "text": "Trên miệng cống thoát nước, miệng hầm của đường điện thoại, điện cao thế, chỗ dành riêng cho xe chữa cháy lấy nước.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Trong phạm vi an toàn của đường sắt.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 48,
        "a2": 48,
        "b1": 49,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 60,
        "index": 60,
        "text": "Trên đường phố, người điều khiển phương tiện tham gia giao thông đường bộ được dừng xe, đỗ xe sát theo lề đường, vỉa hè phía bên phải theo chiều đi của mình; bánh xe gần nhất không được cách xa lề đường, vỉa hè không quá bao nhiêu mét trong các trường hợp dưới đây và không gây cản trở, nguy hiểm cho người và phương tiện tham gia giao thông đường bộ?",
        "tip": "Dừng xe, đỗ xe cách lề đường, hè phố không quá 0,25 mét.",
        "answers": [
            {
                "id": 1,
                "text": "0,25 mét.",
                "correct": true
            },
            {
                "id": 2,
                "text": "0,3 mét.",
                "correct": false
            },
            {
                "id": 3,
                "text": "0,4 mét.",
                "correct": false
            },
            {
                "id": 4,
                "text": "0,5 mét.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 61,
        "index": 61,
        "text": "Khi dừng, đỗ xe trên đường phố hẹp, người lái xe ô tô phải dừng, đỗ xe ở vị trí cách xe ô tô đang đỗ ngược chiều khoảng cách tối thiểu là bao nhiêu mét trong các trường hợp dưới đây để bảo đảm an toàn?",
        "tip": "Dừng xe, đỗ xe trên đường hẹp cách xe khác 20 mét.",
        "answers": [
            {
                "id": 1,
                "text": "10 mét.",
                "correct": false
            },
            {
                "id": 2,
                "text": "15 mét.",
                "correct": false
            },
            {
                "id": 3,
                "text": "20 mét.",
                "correct": true
            },
            {
                "id": 4,
                "text": "25 mét.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 62,
        "index": 62,
        "text": "Người điều khiển phương tiện tham gia giao thông đường bộ không được dừng xe, đỗ xe tại các vị trí nào sau đây?",
        "tip": "Không được dừng, đỗ xe song song xe khác, nơi đường cong, dốc khuất tầm nhìn, bên trái đường một chiều.",
        "answers": [
            {
                "id": 1,
                "text": "Nơi có lề đường rộng hoặc khu đất ở bên ngoài phần đường xe chạy.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Song song cùng chiều với một xe khác đang dừng, đỗ trên đường; trên đoạn đường cong hoặc gần đầu dốc mà tầm nhìn bị che khuất; bên trái đường một chiều.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 63,
        "index": 63,
        "text": "Người điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy có được phép sử dụng xe để kéo hoặc đẩy các phương tiện khác khi tham gia giao thông không?",
        "tip": "Xe mô tô, xe gắn máy không được kéo đẩy xe khác.",
        "answers": [
            {
                "id": 1,
                "text": "Được phép.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nếu phương tiện được kéo, đẩy có khối lượng nhỏ hơn phương tiện của mình.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tùy trường hợp.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Không được phép.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 49,
        "a2": 49,
        "b1": 50,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 64,
        "index": 64,
        "text": "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào sau đây không được phép?",
        "tip": "Xe mô tô, xe gắn máy không được buông cả 2 tay.",
        "answers": [
            {
                "id": 1,
                "text": "Buông cả hai tay; đứng, nằm trên xe điều khiển xe; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Chở tối đa hai người phía sau khi chở người bệnh đi cấp cứu, áp giải người có hành vi vi phạm pháp luật, trẻ em dưới 12 tuổi và người già yếu hoặc người khuyết tật.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 50,
        "a2": 50,
        "b1": 51,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 65,
        "index": 65,
        "text": "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào sau đây không được phép?",
        "tip": "Xe mô tô, xe gắn máy không được buông cả 2 tay.",
        "answers": [
            {
                "id": 1,
                "text": "Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Sử dụng xe để chở người hoặc hàng hóa; để chân chạm xuống đất khi khởi hành.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Đội mũ bảo hiểm; chạy xe đúng tốc độ quy định và chấp hành đúng quy tắc giao thông đường bộ.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Chở người ngồi sau dưới 16 tuổi.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 51,
        "a2": 51,
        "b1": 52,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 66,
        "index": 66,
        "text": "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ không được thực hiện hành vi nào sau đây?",
        "tip": "Người ĐƯỢC CHỞ trên xe mô tô, xe gắn máy không được mang vác đồ cồng kềnh và bám kéo đẩy xe khác.",
        "answers": [
            {
                "id": 1,
                "text": "Mang, vác vật cồng kềnh.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Bám, kéo hoặc đẩy các phương tiện khác.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dùng tay cầm điện thoại hoặc các thiết bị điện tử khác.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 52,
        "a2": 52,
        "b1": 53,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 67,
        "index": 67,
        "text": "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ có được bám, kéo hoặc đẩy các phương tiện khác không?",
        "tip": "Người ĐƯỢC CHỞ trên xe mô tô, xe gắn máy không được mang vác đồ cồng kềnh và bám kéo đẩy xe khác.",
        "answers": [
            {
                "id": 1,
                "text": "Được phép.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Được bám trong trường hợp phương tiện của mình bị hỏng.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Được kéo, đẩy trong trường hợp phương tiện khác bị hỏng.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Không được phép.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 53,
        "a2": 53,
        "b1": 54,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 68,
        "index": 68,
        "text": "Người lái xe, người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy phải thực hiện quy định nào dưới đây?",
        "tip": "Đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia.",
        "answers": [
            {
                "id": 1,
                "text": "Đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Người lái xe phải đội mũ bảo hiểm, người được chở trên xe không nhất thiết phải đội mũ bảo hiểm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phải đội mũ bảo hiểm nhưng không nhất thiết phải cài quai.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 54,
        "a2": 54,
        "b1": 55,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 69,
        "index": 69,
        "text": "Người lái xe mô tô hai bánh, xe gắn máy được phép chở tối đa hai người trong những trường hợp nào?",
        "tip": "Xe mô tô, xe gắn máy chỉ được phép chở tối đa 2 người khi chờ người đi cấp cứu.",
        "answers": [
            {
                "id": 1,
                "text": "Chở người bệnh đi cấp cứu; áp giải người có hành vi vi phạm pháp luật; trẻ em dưới 12 tuổi; người già yếu hoặc người khuyết tật.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Người đã uống rượu, bia; người trong cơ thể có chất ma tuý.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 55,
        "a2": 55,
        "b1": 56,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 70,
        "index": 70,
        "text": "Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện các hành vi nào dưới đây?",
        "tip": "Cấm tất cả hành vi nguy hiểm: dàn hàng, kéo đẩy, buông tay, chở cồng kềnh, thay người lái khi xe chạy.",
        "answers": [
            {
                "id": 1,
                "text": "Đi xe dàn hàng ngang; buông cả hai tay.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Sử dụng xe để kéo, đẩy xe khác, vật khác, dẫn dắt vật nuôi, mang, vác và chở vật cồng kềnh; chở người đứng trên xe, giá đèo hàng hoặc ngồi trên tay lái; xếp hàng hóa trên xe quá giới hạn quy định.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Ngồi về một bên điều khiển xe; đứng, nằm trên xe điều khiển xe; thay người lái xe khi xe đang chạy; quay người về phía sau để điều khiển xe hoặc bịt mắt điều khiển xe; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 56,
        "a2": 56,
        "b1": 57,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 71,
        "index": 71,
        "text": "Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện các hành vi nào sau đây?",
        "tip": "Cấm dàn hàng ngang, vào đường người đi bộ, dùng ô; thiết bị âm thanh (trừ trợ thính).",
        "answers": [
            {
                "id": 1,
                "text": "Đi xe dàn hàng ngang; đi xe vào phần đường dành cho người đi bộ và phương tiện khác.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Sử dụng ô, thiết bị âm thanh, trừ thiết bị trợ thính.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 57,
        "a2": 57,
        "b1": 58,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 72,
        "index": 72,
        "text": "Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện hành vi nào sau đây?",
        "tip": "Không được: đi dàn hàng ngang, vào đường người đi bộ.",
        "answers": [
            {
                "id": 1,
                "text": "Đi trên phần đường, làn đường quy định, chấp hành hiệu lệnh của người điều khiển giao thông, đèn tín hiệu giao thông.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đi xe dàn hàng ngang, đi xe vào phần đường dành cho người đi bộ.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 58,
        "a2": 58,
        "b1": 59,
        "required1": 1,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 73,
        "index": 73,
        "text": "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ có được sử dụng ô khi trời mưa hay không?",
        "tip": "Người được chở trên xe máy không được dùng ô.",
        "answers": [
            {
                "id": 1,
                "text": "Được sử dụng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chỉ người ngồi sau được sử dụng.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không được sử dụng.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Được sử dụng nếu không có áo mưa.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 59,
        "a2": 59,
        "b1": 60,
        "required1": 0,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 74,
        "index": 74,
        "text": "Người được chở trên xe mô tô có được kéo theo người đang điều khiển xe đạp hay không?",
        "tip": "Người ngồi sau xe máy không được kéo theo xe đạp.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ được phép nếu cả hai đội mũ bảo hiểm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không được phép.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Chỉ được thực hiện trên đường vắng.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 60,
        "a2": 60,
        "b1": 61,
        "required1": 0,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 75,
        "index": 75,
        "text": "Trường hợp người được chở trên xe mô tô, xe gắn máy, các loại xe tương tự xe mô tô và các loại xe tương tự xe gắn máy không đội 'mũ bảo hiểm cho người đi mô tô, xe máy' hoặc không cài quai đúng quy cách (trừ trường hợp chở người bệnh đi cấp cứu, trẻ em dưới 06 tuổi, áp giải người có hành vi vi phạm pháp luật) thì việc xử phạt vi phạm hành chính được quy định như thế nào?",
        "tip": "Người ngồi sau không đội mũ bảo hiểm: Phạt cả người lái và người ngồi sau.",
        "answers": [
            {
                "id": 1,
                "text": "Không bị xử phạt chỉ bị nhắc nhở.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Người được chở không bị xử phạt, chỉ xử phạt người điều khiển xe mô tô, xe gắn máy.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Người được chở bị xử phạt, không xử phạt người điều khiển xe mô tô, xe gắn máy.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Xử phạt cả người điều khiển và người được chở trên xe mô tô, xe gắn máy.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 61,
        "a2": 61,
        "b1": 62,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 76,
        "index": 76,
        "text": "Trong các trường hợp dưới đây, để bảo đảm an toàn khi tham gia giao thông, người lái xe mô tô cần thực hiện như thế nào?",
        "tip": "Lái xe mô tô an toàn: Đội mũ đúng chuẩn, cài quai, không dùng ô, điện thoại, thiết bị âm thanh (trừ trợ thính).",
        "answers": [
            {
                "id": 1,
                "text": "Phải đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách, không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).",
                "correct": true
            },
            {
                "id": 2,
                "text": "Phải đội mũ bảo hiểm khi trời mưa gió hoặc trời quá nắng; có thể sử dụng ô, điện thoại di động, thiết bị âm thanh nhưng phải bảo đảm an toàn.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phải đội mũ bảo hiểm khi cảm thấy mất an toàn giao thông hoặc khi chuẩn bị di chuyển quãng đường xa.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 62,
        "a2": 62,
        "b1": 63,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 77,
        "index": 77,
        "text": "Thứ tự xuống phà như thế nào là đúng quy tắc giao thông?",
        "tip": "Xuống phà: Xe cơ giới, xe máy chuyên dùng xuống trước; xe thô sơ, người đi bộ xuống sau.",
        "answers": [
            {
                "id": 1,
                "text": "Xe thô sơ, người đi bộ xuống trước, xe cơ giới, xe máy chuyên dùng xuống sau.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe cơ giới, xe máy chuyên dùng xuống trước, xe thô sơ, người đi bộ xuống sau.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe cơ giới, xe thô sơ xuống trước, xe máy chuyên dùng, người đi bộ xuống sau.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 63,
        "a2": 63,
        "b1": 64,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 78,
        "index": 78,
        "text": "Trên đường có nhiều làn đường cho xe đi cùng chiều được phân biệt bằng vạch kẻ phân làn đường, người điều khiển phương tiện tham gia giao thông đường bộ phải cho xe đi như thế nào?",
        "tip": "Đi đường có nhiều làn: Đi trong 1 làn, chuyển làn nơi cho phép, tín hiệu, quan sát an toàn.",
        "answers": [
            {
                "id": 1,
                "text": "Cho xe đi trên bất kỳ làn đường nào hoặc giữa 02 làn đường nếu không có xe đi phía trước; khi cần thiết phải chuyển làn đường, người lái xe phải quan sát xe phía trước để bảo đảm an toàn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép; mỗi lần chuyển làn đường chỉ được phép chuyển sang một làn đường liền kề; khi chuyển làn đường phải có tín hiệu báo trước; phải quan sát bảo đảm khoảng cách an toàn với xe phía trước, phía sau và hai bên mới được chuyển làn.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Phải cho xe đi trong một làn đường, chỉ được chuyển làn đường khi vượt xe phía trước cùng làn đường.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 65,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 79,
        "index": 79,
        "text": "Trên đường một chiều có vạch kẻ phân làn đường, xe thô sơ và xe cơ giới phải đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Đường 1 chiều nhiều làn: Xe thô sơ đi phải trong cùng, xe cơ giới/chuyên dùng đi làn trái.",
        "answers": [
            {
                "id": 1,
                "text": "Xe thô sơ phải đi trên làn đường bên trái, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải trong cùng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe thô sơ phải đi trên làn đường bên phải trong cùng, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên trái.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe thô sơ phải đi trên làn đường bên phải trong cùng, xe cơ giới, xe máy chuyên dùng được đi trên tất cả các làn đường.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 80,
        "index": 80,
        "text": "Khi lái xe trong đô thị và khu đông dân cư trong thời gian từ 22 giờ ngày hôm trước đến 05 giờ ngày hôm sau, nếu cần vượt một xe khác, người lái xe phải báo hiệu như thế nào là đúng quy tắc giao thông?",
        "tip": "Vượt xe ban đêm (22h-5h) trong khu dân cư: Chỉ báo hiệu bằng đèn.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ được báo hiệu bằng còi.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Phải báo hiệu bằng cả còi và đèn.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Chỉ được báo hiệu bằng đèn.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 64,
        "a2": 64,
        "b1": 66,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 81,
        "index": 81,
        "text": "Khi điều khiển xe chạy trên đường, biết có xe sau xin vượt, nếu đủ điều kiện an toàn người điều khiển phương tiện phải làm gì?",
        "tip": "Xe sau xin vượt (an toàn): Giảm tốc độ, có tín hiệu rẽ phải, đi sát phải, không cản trở.",
        "answers": [
            {
                "id": 1,
                "text": "Tăng tốc độ và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe xin vượt.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cho xe đi sát về bên trái của phần đường xe chạy và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe xin vượt.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 65,
        "a2": 65,
        "b1": 67,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 82,
        "index": 82,
        "text": "Khi điều khiển xe chạy trên đường, biết có xe sau xin vượt, nếu không đủ điều kiện an toàn người điều khiển phương tiện phải làm gì?",
        "tip": "Xe sau xin vượt (không an toàn): Có tín hiệu rẽ trái báo chưa an toàn không được vượt.",
        "answers": [
            {
                "id": 1,
                "text": "Có tín hiệu rẽ trái để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết là chưa được vượt.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Tiếp tục đi cho đến khi đủ điều kiện an toàn, nếu xe sau vẫn xin vượt thì báo hiệu cho xe sau vượt.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tăng tốc độ để báo hiệu cho xe xin vượt biết là chưa được vượt.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 68,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 83,
        "index": 83,
        "text": "Khi chuyển hướng, người lái xe, người điều khiển xe máy chuyên dùng phải làm gì để bảo đảm an toàn?",
        "tip": "Chuyển hướng an toàn: Nhường đường người đi bộ, xe thô sơ, xe ngược chiều; không gây trở ngại.'",
        "answers": [
            {
                "id": 1,
                "text": "Phải nhường đường cho người đi bộ, xe thô sơ, xe đi ngược chiều và chỉ chuyển hướng khi không gây trở ngại hoặc nguy hiểm cho người, phương tiện khác.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Nhanh chóng chuyển hướng để không gây trở ngại hoặc nguy hiểm cho người, phương tiện khác.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Ra tín hiệu chuyển hướng để yêu cầu các phương tiện khác dừng lại cho xe chuyển hướng di chuyển.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 84,
        "index": 84,
        "text": "Trước khi chuyển hướng, người điều khiển phương tiện tham gia giao thông đường bộ phải thực hiện như thế nào để bảo đảm an toàn?",
        "tip": "Trước khi chuyển hướng: Quan sát, giảm tốc độ, tín hiệu rẽ, chuyển làn từ từ, không gây trở ngại.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát gương, nếu không có phương tiện gần hướng rẽ thì nhanh chóng chuyển hướng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Quan sát, bảo đảm khoảng cách an toàn với xe phía sau, giảm tốc độ và có tín hiệu báo hướng rẽ hoặc có tín hiệu bằng tay theo hướng rẽ đối với xe thô sơ không có đèn báo hướng rẽ, chuyển dần sang làn gần nhất với hướng rẽ. Tín hiệu báo hướng rẽ hoặc tín hiệu bằng tay phải sử dụng liên tục trong quá trình chuyển hướng. Khi bảo đảm an toàn, không gây trở ngại cho người và phương tiện khác mới được chuyển hướng.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Quan sát gương, tăng tốc độ, ra tín hiệu và chuyển hướng.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 85,
        "index": 85,
        "text": "Khi lùi xe, người điều khiển phương tiện tham gia giao thông đường bộ phải làm gì để bảo đảm an toàn?",
        "tip": "Lùi xe an toàn: Quan sát kỹ 2 bên và sau, có tín hiệu, chỉ lùi khi an toàn.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát phía sau và cho lùi xe ở tốc độ chậm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Có tín hiệu báo lùi, nếu phía sau không có người hoặc phương tiện khác thì nhanh chóng lùi để bảo đảm an toàn.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phải quan sát hai bên và phía sau xe, có tín hiệu lùi và chỉ lùi xe khi bảo đảm an toàn.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 86,
        "index": 86,
        "text": "Khi muốn lùi xe ở nơi có tầm nhìn bị che khuất, người lái xe phải xử lý như thế nào để đảm bảo an toàn?",
        "tip": "Lùi xe nơi tầm nhìn che khuất: Không được lùi.",
        "answers": [
            {
                "id": 1,
                "text": "Phải lùi thật chậm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Bấm còi 3 lần liên tiếp trước khi lùi.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không được lùi xe.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 87,
        "index": 87,
        "text": "Trên đường không phân chia thành hai chiều xe chạy riêng biệt, người điều khiển phương tiện tham gia giao thông đường bộ phải tránh xe đi ngược chiều như thế nào để bảo đảm an toàn?",
        "tip": "Tránh xe ngược chiều (đường không phân chia): Giảm tốc độ, đi về bên phải.",
        "answers": [
            {
                "id": 1,
                "text": "Giảm tốc độ và cho xe đi về bên phải theo chiều xe chạy của mình.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Một trong hai xe phải dừng lại cho xe kia đi qua mới được đi.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tăng tốc độ, cho xe đi về bên phải theo chiều xe chạy của mình để nhanh chóng vượt qua.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 66,
        "a2": 66,
        "b1": 69,
        "required1": 0,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 88,
        "index": 88,
        "text": "Khi tránh xe đi ngược chiều, các xe phải nhường đường như thế nào là đúng quy tắc giao thông?",
        "tip": "Nhường đường khi tránh xe (cả 3 ý): Gần chỗ tránh hơn, xe xuống dốc, xe có chướng ngại vật.",
        "answers": [
            {
                "id": 1,
                "text": "Nơi đường hẹp chỉ đủ cho một xe chạy và có chỗ tránh xe thì xe nào ở gần chỗ tránh hơn phải vào vị trí tránh, nhường đường cho xe đi ngược chiều.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe xuống dốc phải nhường đường cho xe lên dốc.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe có chướng ngại vật phía trước phải nhường đường cho xe không có chướng ngại vật phía trước.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 67,
        "a2": 67,
        "b1": 70,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 89,
        "index": 89,
        "text": "Khi đang lái xe xuống dốc gặp một xe đang đi lên dốc, người lái xe phải làm gì?",
        "tip": "Xuống dốc gặp xe lên dốc: Nhường đường cho xe lên dốc.",
        "answers": [
            {
                "id": 1,
                "text": "Tiếp tục đi và phát tín hiệu cho xe lên dốc nhường đường cho xe bạn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nhường đường cho xe lên dốc.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Chỉ nhường đường khi xe lên dốc nháy đèn.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 71,
        "required1": 0,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 90,
        "index": 90,
        "text": "Người lái xe phải làm gì để bảo đảm an toàn khi lái xe trên đường cong có tầm nhìn bị hạn chế?",
        "tip": "Đường cong tầm nhìn hạn chế: Quan sát, giảm tốc độ, hoặc dừng lại.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Đi sang làn đường của xe ngược chiều để mở rộng tầm nhìn và vượt xe khác.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cho xe đi sát bên phải làn đường, bật tín hiệu báo hiệu để vượt bên phải xe khác.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 68,
        "a2": 68,
        "b1": 72,
        "required1": 0,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 91,
        "index": 91,
        "text": "Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên, đường nhánh phải nhường đường như thế nào là đúng quy tắc giao thông?",
        "tip": "Đi từ đường không ưu tiên/nhánh: Nhường đường xe trên đường ưu tiên/chính.",
        "answers": [
            {
                "id": 1,
                "text": "Nhường đường cho xe đi ở bên phải mình tới.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nhường đường cho xe đi ở bên trái mình tới.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Nhường đường cho xe đi trên đường ưu tiên hoặc đường chính từ bất kỳ hướng nào tới.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 69,
        "a2": 69,
        "b1": 73,
        "required1": 0,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 92,
        "index": 92,
        "text": "Tại nơi đường giao nhau có báo hiệu đi theo vòng xuyến, người lái xe phải nhường đường như thế nào là đúng quy tắc giao thông?",
        "tip": "Giao nhau có vòng xuyến: Nhường đường cho xe đến từ bên trái.",
        "answers": [
            {
                "id": 1,
                "text": "Nhường đường cho xe đi đến từ bên phải.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nhường đường cho xe đi đến từ bên trái.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Không phải nhường đường.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 70,
        "a2": 70,
        "b1": 74,
        "required1": 0,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 93,
        "index": 93,
        "text": "Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào là đúng quy tắc giao thông?",
        "tip": "Giao nhau không có vòng xuyến: Nhường đường cho xe đến từ bên phải.",
        "answers": [
            {
                "id": 1,
                "text": "Phải nhường đường cho xe đi đến từ bên phải.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe báo hiệu xin đường trước, xe đó được đi trước.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phải nhường đường cho xe đi đến từ bên trái.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 71,
        "a2": 71,
        "b1": 75,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 94,
        "index": 94,
        "text": "Người lái xe phải nhanh chóng giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường cho các loại xe nào dưới đây?",
        "tip": "Nhường đường xe ưu tiên: Chữa cháy, quân sự, công an (khẩn cấp), CSGT dẫn đoàn, cứu thương, hộ đê, cứu nạn, đoàn xe tang.",
        "answers": [
            {
                "id": 1,
                "text": "Xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác; xe của lực lượng quân sự, công an và kiểm sát; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương; xe hộ đê không có tín hiệu ưu tiên theo quy định.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ưu tiên gồm xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác được huy động đi làm nhiệm vụ chữa cháy; xe của lực lượng quân sự, công an và kiểm sát đi làm nhiệm vụ khẩn cấp; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương đi làm nhiệm vụ cấp cứu; xe hộ đê đi làm nhiệm vụ; xe đi làm nhiệm vụ cứu nạn, cứu hộ, khắc phục sự cố thiên tai, dịch bệnh hoặc xe đi làm nhiệm vụ trong tình trạng khẩn cấp theo quy định của pháp luật; đoàn xe tang.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe ô tô, xe máy, đoàn xe đang diễu hành có tổ chức có báo tín hiệu xin vượt bằng còi và đèn.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 72,
        "a2": 72,
        "b1": 76,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 95,
        "index": 95,
        "text": "Xe ưu tiên (trừ đoàn xe tang) tham gia giao thông đường bộ khi đi làm nhiệm vụ được quyền ưu tiên nào dưới đây?",
        "tip": "Xe ưu tiên (trừ xe tang) khi làm nhiệm vụ: Không hạn chế tốc độ, không phụ thuộc đèn, được đi ngược chiều, ngược chiều trên làn dừng khẩn cấp cao tốc.",
        "answers": [
            {
                "id": 1,
                "text": "Không bị hạn chế tốc độ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Được phép đi không phụ thuộc vào tín hiệu đèn giao thông, đi vào đường ngược chiều, các đường khác có thể đi được.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Được đi ngược chiều trên làn dừng xe khẩn cấp trên đường cao tốc.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 96,
        "index": 96,
        "text": "Khi có tín hiệu của xe ưu tiên, người và phương tiện tham gia giao thông đường bộ phải tuân thủ quy định nào dưới đây?",
        "tip": "Gặp tín hiệu xe ưu tiên: Giảm tốc độ, sát lề phải hoặc dừng lại nhường đường.",
        "answers": [
            {
                "id": 1,
                "text": "Giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Tăng tốc độ và đi sát lề đường bên phải để nhường đường.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Giảm tốc độ, đi sát lề đường bên trái để nhường đường.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 73,
        "a2": 73,
        "b1": 77,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 97,
        "index": 97,
        "text": "Khi đang lái xe, phía trước có một xe Cảnh sát giao thông không phát tín hiệu ưu tiên, người lái xe có được phép vượt hay không?",
        "tip": "Xe CSGT không phát tín hiệu ưu tiên: Được vượt khi đảm bảo an toàn.'",
        "answers": [
            {
                "id": 1,
                "text": "Không được vượt.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Được phép vượt ở phần đường dành cho người đi bộ qua đường.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Được vượt khi bảo đảm an toàn.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 74,
        "a2": 74,
        "b1": 78,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 98,
        "index": 98,
        "text": "Khi đang lái xe, phía trước có một xe cứu thương đang phát tín hiệu ưu tiên, người lái xe có được phép vượt hay không?",
        "tip": "Xe cứu thương đang phát tín hiệu ưu tiên: Không được vượt.",
        "answers": [
            {
                "id": 1,
                "text": "Không được vượt.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Được vượt khi đang đi trên cầu.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Được phép vượt khi đi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Được vượt khi bảo đảm an toàn.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 75,
        "a2": 75,
        "b1": 79,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 99,
        "index": 99,
        "text": "Khi tới đường ngang không có người gác, chắn đường bộ, chuông, đèn tín hiệu, người tham gia giao thông đường bộ phải làm gì để bảo đảm an toàn?",
        "tip": "Đường sắt KHÔNG rào chắn/tín hiệu: Dừng phải, trước vạch, quan sát 2 phía, an toàn mới qua.",
        "answers": [
            {
                "id": 1,
                "text": "Dừng lại về bên phải đường của mình, trước vạch dừng xe và quan sát hai phía, khi không có phương tiện giao thông đường sắt tới mới được đi qua.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Quan sát hai phía, khi không có phương tiện giao thông đường sắt tới thì nhanh chóng đi qua.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dừng lại khoảng cách tối thiểu 3 mét tính từ ray đường sắt gần nhất, khi không có phương tiện giao thông đường sắt tới thì nhanh chóng đi qua.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 76,
        "a2": 76,
        "b1": 80,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 100,
        "index": 100,
        "text": "Tại đường ngang, cầu chung đường sắt, khi có hiệu lệnh của nhân viên gác chắn, đèn đỏ sáng nhấp nháy, chuông kêu, chắn đường bộ đang dịch chuyển hoặc đã đóng, người tham gia giao thông đường bộ phải làm gì để bảo đảm an toàn?",
        "tip": "Đường sắt có tín hiệu/rào chắn đang hoạt động: Dừng lại bên phải, trước vạch dừng.",
        "answers": [
            {
                "id": 1,
                "text": "Dừng lại về bên trái đường của mình, trước vạch dừng xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Dừng lại giữa đường của mình, trước vạch dừng xe.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dừng lại về bên phải đường của mình, trước vạch dừng xe.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 77,
        "a2": 77,
        "b1": 81,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 101,
        "index": 101,
        "text": "Khi xe ô tô bị hư hỏng, bị tai nạn trên đường ngang, cầu chung đường sắt mà không thể di chuyển ngay khỏi phạm vi an toàn đường sắt, người lái xe và người có mặt xử lý như thế nào là đúng quy định?",
        "tip": "Xe hỏng/tai nạn trên đường sắt: Báo hiệu dừng tàu ngay, đảm bảo an toàn.",
        "answers": [
            {
                "id": 1,
                "text": "Người lái xe và người có mặt phải ngay lập tức báo hiệu để dừng tàu, thực hiện các biện pháp bảo đảm an toàn.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Để xe lại, tìm cách báo cho người quản lý đường sắt, nhà ga nơi gần nhất.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không di chuyển phương tiện, tự khắc phục sửa chữa.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 102,
        "index": 102,
        "text": "Người tham gia giao thông đường bộ phải dừng lại về bên phải đường của mình trước vạch dừng xe tại đường ngang, cầu chung đường sắt khi có báo hiệu nào dưới đây?",
        "tip": "Dừng xe ở đường sắt khi: Có hiệu lệnh nhân viên, đèn đỏ/chuông, chắn đang đóng/đã đóng.",
        "answers": [
            {
                "id": 1,
                "text": "Hiệu lệnh của nhân viên gác chắn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đèn đỏ sáng nhấp nháy, chuông kêu.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Chắn đường bộ đang dịch chuyển hoặc đã đóng.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 78,
        "a2": 78,
        "b1": 82,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 103,
        "index": 103,
        "text": "Người điều khiển phương tiện tham gia giao thông trong hầm đường bộ ngoài việc phải tuân thủ các quy tắc giao thông còn phải thực hiện những quy định nào dưới đây?",
        "tip": "Trong hầm: Bật đèn gần (xe cơ giới/chuyên dùng), đèn/phát sáng (xe thô sơ), không dừng/đỗ (trừ sự cố).",
        "answers": [
            {
                "id": 1,
                "text": "Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu gần; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; không dừng xe, đỗ xe trong hầm đường bộ; trường hợp gặp sự cố kỹ thuật hoặc bất khả kháng khác buộc phải dừng xe, đỗ xe, người lái xe, người điều khiển xe máy chuyên dùng phải đưa xe vào vị trí dừng xe, đỗ xe khẩn cấp, nếu không di chuyển được, phải có báo hiệu bằng đèn khẩn cấp và đặt biển hoặc đèn cảnh báo về phía sau xe khoảng cách bảo đảm an toàn.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu xa; được dừng xe, đỗ xe khi cần thiết.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 79,
        "a2": 79,
        "b1": 83,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 104,
        "index": 104,
        "text": "Việc nối giữa xe kéo với xe được kéo trong trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì xe kéo nhau phải nối bằng cách nào?",
        "tip": "Kéo xe hỏng phanh: Nối bằng thanh nối cứng.",
        "answers": [
            {
                "id": 1,
                "text": "Nối bằng dây cáp có độ dài 6 mét.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nối bằng dây cáp có độ dài 8 mét.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Nối bằng thanh nối cứng.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 105,
        "index": 105,
        "text": "Xe kéo rơ moóc, xe ô tô đầu kéo khi tham gia giao thông đường bộ phải tuân thủ quy tắc giao thông nào ghi ở dưới đây?",
        "tip": "Kéo rơ moóc: Phải phù hợp thiết kế, kết nối chắc chắn, an toàn.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ được kéo rơ moóc, sơ mi rơ moóc phù hợp với thiết kế của xe; việc kết nối xe kéo với rơ moóc, xe ô tô đầu kéo với sơ mi rơ moóc phải bảo đảm chắc chắn, an toàn.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Phải có tổng trọng lượng tương đương tổng trọng lượng của rơ moóc hoặc phải có hệ thống hãm có hiệu lực cho rơ moóc.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phải được lắp phanh phụ theo quy định để đảm bảo an toàn.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 106,
        "index": 106,
        "text": "Luật Trật tự, an toàn giao thông đường bộ quy định về xe kéo xe, xe kéo rơ moóc và xe ô tô đầu kéo kéo sơ mi rơ moóc như thế nào dưới đây?",
        "tip": "Xe được kéo: Người lái, hệ thống lái còn hiệu lực, nối chắc chắn (thanh cứng nếu hỏng phanh), biển báo/đèn vàng.",
        "answers": [
            {
                "id": 1,
                "text": "Một xe ô tô được kéo theo nhiều xe ô tô hoặc xe máy chuyên dùng khác khi xe được kéo không tự chạy được (trừ trường hợp xe vận chuyển hàng siêu trường, siêu trọng).",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe được kéo phải có người điều khiển và hệ thống lái của xe đó phải còn hiệu lực; việc nối xe kéo với xe được kéo phải bảo đảm chắc chắn, an toàn; trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì xe kéo nhau phải nối bằng thanh nối cứng. Phía trước của xe kéo và phía sau của xe được kéo phải có biển báo hiệu, có đèn cảnh báo nhấp nháy màu vàng.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 107,
        "index": 107,
        "text": "Người điều khiển phương tiện tham gia giao thông đường bộ phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong các trường hợp nào dưới đây?",
        "tip": "Giảm tốc độ/dừng lại khi: Cảnh báo nguy hiểm, chướng ngại vật, chuyển hướng, tầm nhìn hạn chế, cầu cống hẹp, vật nuôi, điểm dừng xe có khách.",
        "answers": [
            {
                "id": 1,
                "text": "Có báo hiệu cảnh báo nguy hiểm hoặc có chướng ngại vật trên đường; chuyển hướng xe chạy hoặc tầm nhìn bị hạn chế.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nơi cầu, cống hẹp, đập tràn, đường ngầm, hầm chui, hầm đường bộ; có vật nuôi đi trên đường hoặc chăn thả ở ven đường.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Điểm dừng xe, đỗ xe trên đường bộ có khách đang lên, xuống xe.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 80,
        "a2": 80,
        "b1": 84,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 108,
        "index": 108,
        "text": "Trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, người lái xe không được vượt xe khác trong trường hợp nào dưới đây?",
        "tip": "Không vượt (1 làn/chiều): Có chướng ngại vật phía trước, hoặc xe trước đang xin vượt.",
        "answers": [
            {
                "id": 1,
                "text": "Có chướng ngại vật phía trước, xe chạy phía trước có tín hiệu vượt xe khác.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe chạy phía trước đã có tín hiệu rẽ phải và tránh về bên phải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 85,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 109,
        "index": 109,
        "text": "Người lái xe được phép vượt xe khác về bên phải trong trường hợp nào dưới đây?",
        "tip": "Vượt phải khi: Xe trước rẽ trái, hoặc xe chuyên dùng đang làm việc (không thể vượt trái).",
        "answers": [
            {
                "id": 1,
                "text": "Xe phía trước có tín hiệu rẽ trái hoặc đang rẽ trái hoặc khi xe chuyên dùng đang làm việc trên đường mà không thể vượt bên trái.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe phía trước đang đi sát lề đường bên trái.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 81,
        "a2": 81,
        "b1": 86,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 110,
        "index": 110,
        "text": "Khi có xe xin vượt, người lái xe mô tô xử lý như thế nào nếu đủ điều kiện an toàn cho xe phía sau vượt?",
        "tip": "Xe máy bị xin vượt (an toàn): Giảm tốc độ, báo hiệu rẽ phải, đi sát phải, không cản trở.",
        "answers": [
            {
                "id": 1,
                "text": "Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Lái xe vào lề đường bên trái và giảm tốc độ để xe phía sau vượt qua, không được gây trở ngại đối với xe xin vượt.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tăng tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 82,
        "a2": 82,
        "b1": 87,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 111,
        "index": 111,
        "text": "Những trường hợp nào dưới đây không được đi trên đường cao tốc, trừ người, phương tiện giao thông đường bộ và thiết bị phục vụ việc quản lý, bảo trì đường cao tốc?",
        "tip": "Cấm vào cao tốc: Xe tốc độ thiết kế < tốc độ tối thiểu cao tốc, xe 4 bánh gắn động cơ (chở người/hàng), mô tô, gắn máy, xe thô sơ, người đi bộ.",
        "answers": [
            {
                "id": 1,
                "text": "Xe máy chuyên dùng có tốc độ thiết kế nhỏ hơn tốc độ tối thiểu quy định đối với đường cao tốc, xe chở người bốn bánh có gắn động cơ, xe chở hàng bốn bánh có gắn động cơ, xe mô tô, xe gắn máy, các loại xe tương tự xe mô tô, xe gắn máy, xe thô sơ, người đi bộ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe máy chuyên dùng có tốc độ thiết kế lớn hơn tốc độ tối thiểu quy định đối với đường cao tốc.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe ô tô và xe máy chuyên dùng có tốc độ thiết kế lớn hơn 80 km/h.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 83,
        "a2": 83,
        "b1": 88,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 112,
        "index": 112,
        "text": "Khi tham gia giao thông trên đường cao tốc, xe ưu tiên đi làm nhiệm vụ khẩn cấp được đi ngược chiều trong trường hợp nào dưới đây?",
        "tip": "Xe ưu tiên đi ngược chiều trên cao tốc: Chỉ trên làn dừng khẩn cấp.",
        "answers": [
            {
                "id": 1,
                "text": "Được đi ngược chiều bất cứ làn đường nào của đường cao tốc có thể đi được.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chỉ được đi ngược chiều trên làn dừng xe khẩn cấp.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Chỉ được đi ngược chiều trên làn đường sát dải phân cách của đường cao tốc.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 113,
        "index": 113,
        "text": "Khi tham gia giao thông trên đường cao tốc, người lái xe không được thực hiện hành vi nào sau đây?",
        "tip": "Trên cao tốc cấm: Dừng/đỗ trên đường xe chạy (trừ bất khả kháng), lùi xe, quay đầu xe.",
        "answers": [
            {
                "id": 1,
                "text": "Dừng, đỗ xe trên phần đường xe chạy, trừ trường hợp xe không thể di chuyển được vào làn đường khẩn cấp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Lùi xe, quay đầu xe.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 114,
        "index": 114,
        "text": "Khi xe gặp sự cố kỹ thuật trên đường cao tốc, bạn phải xử lý như thế nào để bảo đảm an toàn giao thông?",
        "tip": "Sự cố trên cao tốc: Vào làn dừng khẩn cấp, đèn khẩn cấp, đặt biển/đèn báo sau xe (tối thiểu 150m), báo CSGT/quản lý đường.",
        "answers": [
            {
                "id": 1,
                "text": "Bật đèn tín hiệu khẩn cấp, dừng xe ngay lập tức và đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Bật tín hiệu khẩn cấp, lập tức đưa xe vào làn đường xe chạy bên phải trong cùng, đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dừng xe, đỗ xe ở làn dừng khẩn cấp cùng chiều xe chạy và phải có báo hiệu bằng đèn khẩn cấp; trường hợp xe không thể di chuyển được vào làn dừng khẩn cấp, phải có báo hiệu bằng đèn khẩn cấp và đặt biển hoặc đèn cảnh báo về phía sau xe khoảng cách tối thiểu 150 mét, nhanh chóng báo cho cơ quan Cảnh sát giao thông thực hiện nhiệm vụ bảo đảm trật tự, an toàn giao thông trên tuyến hoặc cơ quan quản lý đường cao tốc.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 115,
        "index": 115,
        "text": "Trên đường cao tốc, người lái xe xử lý như thế nào khi đã vượt quá lối ra của đường định rẽ?",
        "tip": "Vượt quá lối ra cao tốc: Tiếp tục đi, rẽ ở lối ra tiếp theo.",
        "answers": [
            {
                "id": 1,
                "text": "Quay đầu xe, chạy trên lề đường có lối ra và rẽ khỏi đường cao tốc.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Lùi xe trên lề đường có lối ra và rẽ khỏi đường cao tốc.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tiếp tục lái xe và rẽ ở lối ra tiếp theo.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 116,
        "index": 116,
        "text": "Khi xảy ra ùn tắc trên đường cao tốc có làn dừng xe khẩn cấp, người lái xe có được cho xe chạy ở làn dừng xe khẩn cấp để nhanh chóng thoát khỏi khu vực ùn tắc không (trừ xe ưu tiên)?",
        "tip": "Trên cao tốc KHÔNG được chạy trên làn dừng khẩn cấp trừ xe ưu tiên.",
        "answers": [
            {
                "id": 1,
                "text": "Có.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 117,
        "index": 117,
        "text": "Khi chuẩn bị nhập vào làn đường của đường cao tốc, người lái xe, người điều khiển xe máy chuyên dùng phải thực hiện như thế nào là đúng quy tắc giao thông?",
        "tip": "Nhập làn cao tốc: Tín hiệu, nhường đường, (nếu có làn tăng tốc thì chạy trên đó trước).",
        "answers": [
            {
                "id": 1,
                "text": "Có tín hiệu xin vào và phải nhường đường cho xe đang chạy trên đường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Quan sát xe phía sau bảo đảm khoảng cách an toàn mới cho xe nhập vào làn đường sát bên phải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Nếu có làn đường tăng tốc thì phải cho xe chạy trên làn đường đó trước khi nhập vào làn đường của đường cao tốc.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 118,
        "index": 118,
        "text": "Theo quy định về độ tuổi, người đủ bao nhiêu tuổi trở lên thì được cấp giấy phép lái xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 3.500 kg đến 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg?",
        "tip": "Hạng C1 = 18 tuổi; Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi).<br/>Xe dưới 50cm3: 16 tuổi; Hạng A1, A, B1, B, C1: 18 tuổi;<br/>Hạng C, BE: 21 tuổi;<br/>Hạng D1, D2, C1E, CE: 24 tuổi;<br/>Hạng D, D1E, D2E, DE: 27 tuổi.",
        "answers": [
            {
                "id": 1,
                "text": "18 tuổi.",
                "correct": true
            },
            {
                "id": 2,
                "text": "17 tuổi.",
                "correct": false
            },
            {
                "id": 3,
                "text": "16 tuổi.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 119,
        "index": 119,
        "text": "Theo quy định về độ tuổi, người đủ bao nhiêu tuổi trở lên thì được cấp giấy phép lái xe mô tô hai bánh có dung tích xi lanh đến 125 cm3 và xe ô tô chở người đến 8 chỗ (không kể chỗ của người lái xe); xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg?",
        "tip": "Hạng A1 và B là 18 tuổi. Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi).<br/>Xe dưới 50cm3: 16 tuổi; Hạng A1, A, B1, B, C1: 18 tuổi;<br/>Hạng C, BE: 21 tuổi;<br/>Hạng D1, D2, C1E, CE: 24 tuổi;<br/>Hạng D, D1E, D2E, DE: 27 tuổi.",
        "answers": [
            {
                "id": 1,
                "text": "16 tuổi.",
                "correct": false
            },
            {
                "id": 2,
                "text": "17 tuổi.",
                "correct": false
            },
            {
                "id": 3,
                "text": "18 tuổi.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 84,
        "a2": 84,
        "b1": 89,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 120,
        "index": 120,
        "text": "Theo quy định về độ tuổi, người lái xe ô tô chở người (kể cả xe buýt) trên 29 chỗ (không kể chỗ của người lái xe); xe ô tô chở người giường nằm; các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg phải đủ bao nhiêu tuổi trở lên?",
        "tip": "Hạng D là 27 tuổi. Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi).<br/>Xe dưới 50cm3: 16 tuổi; Hạng A1, A, B1, B, C1: 18 tuổi;<br/>Hạng C, BE: 21 tuổi;<br/>Hạng D1, D2, C1E, CE: 24 tuổi;<br/>Hạng D, D1E, D2E, DE: 27 tuổi.",
        "answers": [
            {
                "id": 1,
                "text": "23 tuổi.",
                "correct": false
            },
            {
                "id": 2,
                "text": "24 tuổi.",
                "correct": false
            },
            {
                "id": 3,
                "text": "27 tuổi.",
                "correct": true
            },
            {
                "id": 4,
                "text": "30 tuổi.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 121,
        "index": 121,
        "text": "Tuổi tối đa của người lái xe ô tô chở người (kể cả xe buýt) trên 29 chỗ (không kể chỗ của người lái xe), xe ô tô chở người giường nằm là bao nhiêu tuổi?",
        "tip": "Độ tuổi tối đa người lái xe ô tô trên 29 chỗ: Nam 57 tuổi và nữ 55 tuổi.",
        "answers": [
            {
                "id": 1,
                "text": "Đủ 55 tuổi đối với nam và đủ 50 tuổi đối với nữ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đủ 55 tuổi đối với nam và nữ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Đủ 57 tuổi đối với nam và đủ 55 tuổi đối với nữ.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 122,
        "index": 122,
        "text": "Theo quy định về độ tuổi, người lái xe ô tô chở người (kể cả xe buýt) trên 16 chỗ (không kể chỗ của người lái xe) đến 29 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D2 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg phải đủ bao nhiêu tuổi trở lên?",
        "tip": "Hạng D2 là 24 tuổi. Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi).<br/>Xe dưới 50cm3: 16 tuổi; Hạng A1, A, B1, B, C1: 18 tuổi;<br/>Hạng C, BE: 21 tuổi;<br/>Hạng D1, D2, C1E, CE: 24 tuổi;<br/>Hạng D, D1E, D2E, DE: 27 tuổi.",
        "answers": [
            {
                "id": 1,
                "text": "23 tuổi.",
                "correct": false
            },
            {
                "id": 2,
                "text": "24 tuổi.",
                "correct": true
            },
            {
                "id": 3,
                "text": "22 tuổi.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 123,
        "index": 123,
        "text": "Người đủ 16 tuổi đến dưới 18 tuổi chỉ được điều khiển các loại xe nào dưới đây?",
        "tip": "Xe gắn máy từ 16 tuổi;",
        "answers": [
            {
                "id": 1,
                "text": "Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe gắn máy.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe ô tô chở người đến 08 chỗ (không kể chỗ của người lái xe); xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg; các loại xe ô tô quy định cho giấy phép lái xe hạng B kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 85,
        "a2": 85,
        "b1": 90,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 124,
        "index": 124,
        "text": "Người có Giấy phép lái xe mô tô hạng A1 không được phép điều khiển loại xe nào dưới đây?",
        "tip": "Hạng A1 không được chạy mô tô ba bánh.",
        "answers": [
            {
                "id": 1,
                "text": "Xe mô tô hai bánh có dung tích xi-lanh 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe mô tô ba bánh.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 86,
        "a2": 86,
        "b1": 91,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 125,
        "index": 125,
        "text": "Người có Giấy phép lái xe mô tô hạng A1 được cấp sau ngày 01/01/2025 được phép điều khiển loại xe nào dưới đây?",
        "tip": "Hạng A1 lái xe mô tô hai bánh đến 125 cm3 hoặc đến 11 kW.",
        "answers": [
            {
                "id": 1,
                "text": "Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe mô tô ba bánh.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 87,
        "a2": 87,
        "b1": 92,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 126,
        "index": 126,
        "text": "Người có Giấy phép lái xe mô tô hạng A được phép điều khiển loại xe nào dưới đây?",
        "tip": "Hạng A lái xe mô tô hai bánh trên 125 cm3 hoặc trên 11 kW.",
        "answers": [
            {
                "id": 1,
                "text": "Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe mô tô hai bánh có dung tích xi-lanh trên 125 cm3 hoặc có công suất động cơ điện trên 11 kW.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 88,
        "a2": 88,
        "b1": 93,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 127,
        "index": 127,
        "text": "Người có Giấy phép lái xe ô tô hạng B được phép điều khiển loại xe nào dưới đây?",
        "tip": "Hạng B: đến 08 chỗ (không kể lái xe); ô tô tải và chuyên dùng đến 3.500 kg; kéo rơ moóc đến 750 kg;",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô chở người đến 08 chỗ (không kể chỗ của người lái xe).",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 128,
        "index": 128,
        "text": "Người có Giấy phép lái xe hạng C1 được điều khiển loại xe nào dưới đây?",
        "tip": "Hạng C1: ô tô tải và chuyên dùng trên 3.500 kg đến 7.500 kg và lái xe Hạng B.",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 3.500 kg đến 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 129,
        "index": 129,
        "text": "Người có Giấy phép lái xe hạng C được điều khiển loại xe nào dưới đây?",
        "tip": "Hạng C: ô tô tải và chuyên dùng trên 7.500 kg và lái xe Hạng B, C1.",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 3.500 kg đến 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 130,
        "index": 130,
        "text": "Người có Giấy phép lái xe hạng D1 được điều khiển loại xe nào dưới đây?",
        "tip": "Hạng D1: trên 08 chỗ đến 16 chỗ (không kể lái xe); và lái xe Hạng B, C1, C;",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô chở người (kể cả xe buýt) trên 16 chỗ (không kể chỗ của người lái xe) đến 29 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô chở người trên 08 chỗ (không kể chỗ của người lái xe) đến 16 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 131,
        "index": 131,
        "text": "Người có Giấy phép lái xe hạng D2 được điều khiển loại xe nào dưới đây?",
        "tip": "Hạng D2: trên 16 chỗ đến 29 chỗ (không kể lái xe); và lái xe hạng B, C1, C, D1;",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô chở người (kể cả xe buýt) trên 16 chỗ (không kể chỗ của người lái xe) đến 29 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D2 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô chở người trên 08 chỗ (không kể chỗ của người lái xe) đến 16 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 132,
        "index": 132,
        "text": "Người có Giấy phép lái xe hạng D được điều khiển loại xe nào dưới đây?",
        "tip": "Hạng D: trên 29 chỗ (không kể lái xe); xe giường nằm; và lái xe hạng B, C1, C, D1, D2;",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô chở người (kể cả xe buýt) trên 29 chỗ (không kể chỗ của người lái xe); xe ô tô chở người giường nằm; các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô chở người (kể cả xe buýt) trên 16 chỗ (không kể chỗ của người lái xe) đến 29 chỗ (không kể chỗ của người lái xe).",
                "correct": false
            },
            {
                "id": 3,
                "text": "Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 133,
        "index": 133,
        "text": "Người có Giấy phép lái xe hạng BE được điều khiển loại xe nào dưới đây?",
        "tip": "Hạng BE: lái xe hạng B kéo rơ moóc trên 750kg.",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô chở người (kể cả xe buýt) trên 29 chỗ (không kể chỗ của người lái xe); xe ô tô chở người giường nằm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Các loại xe ô tô quy định cho giấy phép lái xe hạng B kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe ô tô chở người (kể cả xe buýt) trên 16 chỗ (không kể chỗ của người lái xe) đến 29 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D2 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 134,
        "index": 134,
        "text": "Người có Giấy phép lái xe hạng CE được điều khiển loại xe nào dưới đây?",
        "tip": "Hạng CE: lái xe hạng C kéo rơ moóc trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc;",
        "answers": [
            {
                "id": 1,
                "text": "Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Các loại xe ô tô quy định cho giấy phép lái xe hạng D1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 135,
        "index": 135,
        "text": "Người có Giấy phép lái xe hạng DE được điều khiển loại xe nào dưới đây?",
        "tip": "Hạng DE: lái xe hạng D kéo rơ moóc trên 750 kg; xe ô tô chở khách nối toa.",
        "answers": [
            {
                "id": 1,
                "text": "Các loại xe ô tô quy định cho giấy phép lái xe hạng D kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô chở khách nối toa.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 136,
        "index": 136,
        "text": "Người tập lái xe ô tô khi tham gia giao thông đường bộ phải bảo đảm các điều kiện nào dưới đây?",
        "tip": "Người tập lái: Thực hành trên xe tập lái, đúng tuyến, có giáo viên bảo trợ.",
        "answers": [
            {
                "id": 1,
                "text": "Phải thực hành trên xe tập lái, trên tuyến đường tập lái và có giáo viên dạy lái bảo trợ tay lái.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Phải mang theo giấy phép xe tập lái.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 137,
        "index": 137,
        "text": "Người lái xe khi tham gia giao thông đường bộ phải đảm bảo các điều kiện nào dưới đây?",
        "tip": "Điều kiện lái xe: Đủ tuổi, sức khỏe, GPLX còn điểm/hiệu lực, phù hợp loại xe (trừ xe gắn máy).",
        "answers": [
            {
                "id": 1,
                "text": "Phải đủ tuổi, sức khỏe theo quy định của pháp luật; có giấy phép lái xe đang còn điểm, còn hiệu lực phù hợp với loại xe đang điều khiển do cơ quan có thẩm quyền cấp (trừ người lái xe gắn máy).",
                "correct": true
            },
            {
                "id": 2,
                "text": "Phải là người đứng tên trong đăng ký xe.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 89,
        "a2": 89,
        "b1": 94,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 138,
        "index": 138,
        "text": "Khi tham gia giao thông đường bộ, người lái xe phải mang theo các giấy tờ gì?",
        "tip": "Mang theo khi lái xe: Đăng ký xe (hoặc bản sao), GPLX, Kiểm định, Bảo hiểm TNDS; hoặc xuất trình qua VNeID.",
        "answers": [
            {
                "id": 1,
                "text": "Chứng nhận đăng ký xe hoặc bản sao Chứng nhận đăng ký xe có chứng thực kèm bản gốc giấy tờ xác nhận của tổ chức tín dụng, chi nhánh ngân hàng nước ngoài còn hiệu lực trong trường hợp xe đang được thế chấp tại tổ chức tín dụng, chi nhánh ngân hàng nước ngoài.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giấy phép lái xe phù hợp với loại xe đang điều khiển; chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường đối với xe cơ giới theo quy định của pháp luật; chứng nhận bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Trường hợp các giấy tờ nêu trên đã được tích hợp vào tài khoản định danh điện tử thì việc xuất trình, kiểm tra có thể thực hiện thông qua tài khoản định danh điện tử.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 90,
        "a2": 90,
        "b1": 95,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 139,
        "index": 139,
        "text": "Giấy phép lái xe bị thu hồi trong các trường hợp nào sau đây?",
        "tip": "Thu hồi GPLX: Không đủ sức khỏe, cấp sai, quá hạn tạm giữ/phạt không đến nhận (không lý do chính đáng).",
        "answers": [
            {
                "id": 1,
                "text": "Người được cấp giấy phép lái xe không đủ điều kiện sức khỏe theo kết luận của cơ sở khám bệnh, chữa bệnh đối với từng hạng giấy phép lái xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giấy phép lái xe được cấp sai quy định.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Giấy phép lái xe đã quá thời hạn tạm giữ hoặc hết thời hiệu thi hành quyết định xử phạt vi phạm hành chính theo quy định của pháp luật về xử lý vi phạm hành chính nếu người vi phạm không đến nhận mà không có lý do chính đáng.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 96,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 140,
        "index": 140,
        "text": "Người có giấy phép lái xe chưa bị trừ hết 12 điểm, được phục hồi điểm giấy phép lái xe trong trường hợp nào sau đây?",
        "tip": "Phục hồi điểm GPLX (chưa hết điểm): Không bị trừ điểm trong 12 tháng (từ lần trừ gần nhất) -> phục hồi đủ 12 điểm.",
        "answers": [
            {
                "id": 1,
                "text": "Không được phục hồi.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Được phục hồi đủ 12 điểm, nếu không bị trừ điểm trong thời hạn 12 tháng từ ngày bị trừ điểm gần nhất.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 91,
        "a2": 91,
        "b1": 97,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 141,
        "index": 141,
        "text": "Người có giấy phép lái xe đã bị trừ hết điểm phải làm gì để phục hồi điểm giấy phép lái xe?",
        "tip": "Phục hồi điểm GPLX (đã hết điểm): Sau ít nhất 6 tháng, kiểm tra kiến thức pháp luật đạt -> phục hồi đủ 12 điểm.",
        "answers": [
            {
                "id": 1,
                "text": "Không vi phạm pháp luật trật tự, an toàn giao thông đường bộ trong thời gian 12 tháng kể từ ngày bị trừ hết điểm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Sau thời hạn ít nhất là 06 tháng kể từ ngày bị trừ hết điểm, người có phép lái xe được tham gia kiểm tra nội dung kiến thức pháp luật về trật tự, an toàn giao thông đường bộ theo quy định, có kết quả đạt yêu cầu thì được phục hồi đủ 12 điểm.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 92,
        "a2": 92,
        "b1": 98,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 142,
        "index": 142,
        "text": "Trách nhiệm của tổ chức, cá nhân đứng tên trong giấy chứng nhận đăng ký xe khi chưa thực hiện thu hồi chứng nhận đăng ký xe, biển số xe được quy định như thế nào?",
        "tip": "Chưa thu hồi đăng ký/biển số xe (sau bán/cho): Vẫn chịu trách nhiệm chủ xe.",
        "answers": [
            {
                "id": 1,
                "text": "Tiếp tục chịu trách nhiệm của chủ xe.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Không chịu trách nhiệm sau khi đã chuyển nhượng, trao đổi, tặng, cho.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 93,
        "a2": 93,
        "b1": 99,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 143,
        "index": 143,
        "text": "Để bảo đảm điều kiện tham gia giao thông đường bộ, loại phương tiện nào phải lắp thiết bị giám sát hành trình?",
        "tip": "Lắp giám sát hành trình: Xe ô tô kinh doanh vận tải và xe chở người >=8 chỗ, xe đầu kéo, xe cứu thương.",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô kinh doanh vận tải.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô chở người từ 08 chỗ trở lên (không kể chỗ của người lái xe) kinh doanh vận tải, xe ô tô đầu kéo, xe cứu thương.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 144,
        "index": 144,
        "text": "Tốc độ khai thác tối đa cho phép đối với xe máy chuyên dùng, xe gắn máy và các loại xe tương tự tham gia giao thông trên đường bộ (trừ đường cao tốc) là bao nhiêu km/h?",
        "tip": "Xe gắn máy tối đa 40km/h.",
        "answers": [
            {
                "id": 1,
                "text": "50 km/h.",
                "correct": false
            },
            {
                "id": 2,
                "text": "40 km/h.",
                "correct": true
            },
            {
                "id": 3,
                "text": "60 km/h.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 145,
        "index": 145,
        "text": "Trên đường bộ, trong khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên, xe mô tô hai bánh, ô tô chở người đến 28 chỗ không kể chỗ của người lái xe tham gia giao thông với tốc độ khai thác tối đa cho phép là bao nhiêu?",
        "tip": "Xe cơ giới không bao gồm xe gắn máy: Trong khu vực đông dân cư, đường đôi; đường một chiều có từ hai làn xe cơ giới trở lên: 60km/h.",
        "answers": [
            {
                "id": 1,
                "text": "60 km/h.",
                "correct": true
            },
            {
                "id": 2,
                "text": "50 km/h.",
                "correct": false
            },
            {
                "id": 3,
                "text": "40 km/h.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 94,
        "a2": 94,
        "b1": 100,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 146,
        "index": 146,
        "text": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới, xe mô tô hai bánh, ô tô chở người đến 28 chỗ không kể chỗ của người lái xe tham gia giao thông với tốc độ khai thác tối đa cho phép là bao nhiêu?",
        "tip": "Xe cơ giới không bao gồm xe gắn máy: Trong khu vực đông dân cư, đường hai chiều; đường một chiều có một làn xe cơ giới: 50km/h.",
        "answers": [
            {
                "id": 1,
                "text": "60 km/h.",
                "correct": false
            },
            {
                "id": 2,
                "text": "50 km/h.",
                "correct": true
            },
            {
                "id": 3,
                "text": "40 km/h.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 95,
        "a2": 95,
        "b1": 101,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 147,
        "index": 147,
        "text": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới, loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 50 km/h?",
        "tip": "Xe cơ giới không bao gồm xe gắn máy: Trong khu vực đông dân cư, đường hai chiều; đường một chiều có một làn xe cơ giới: 50km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Ô tô tải, ô tô chở người trên 28 chỗ không kể chỗ của người lái xe.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe gắn máy, xe máy chuyên dùng.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 148,
        "index": 148,
        "text": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn cơ giới trở lên, loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa là 60 km/h?",
        "tip": "Xe cơ giới không bao gồm xe gắn máy: Trong khu vực đông dân cư, đường đôi; đường một chiều có từ hai làn xe cơ giới trở lên: 60km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Ô tô tải, ô tô chở người trên 28 chỗ không kể chỗ của người lái xe.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe gắn máy, xe máy chuyên dùng.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 149,
        "index": 149,
        "text": "Trên đường bộ (trừ đường cao tốc) ngoài khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên, loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 90 km/h?",
        "tip": "Đường có giải phân cách được xem là đường đôi.<br/>Ngoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 29 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 29 chỗ, tải dưới 3,5 tấn: 90km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 150,
        "index": 150,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên (trừ đường cao tốc) loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 80 km/h?",
        "tip": "Đường có giải phân cách được xem là đường đôi.<br/>Ngoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 29 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 29 chỗ, tải dưới 3,5 tấn: 90km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
                "correct": false
            },
            {
                "id": 4,
                "text": "Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc).",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 151,
        "index": 151,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên (trừ đường cao tốc) loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 70 km/h?",
        "tip": "Đường có giải phân cách được xem là đường đôi.<br/>Ngoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 29 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 29 chỗ, tải dưới 3,5 tấn: 90km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
                "correct": true
            },
            {
                "id": 4,
                "text": "Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 96,
        "a2": 96,
        "b1": 102,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 152,
        "index": 152,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên (trừ đường cao tốc) loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 60 km/h?",
        "tip": "Đường có giải phân cách được xem là đường đôi.<br/>Ngoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 29 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 29 chỗ, tải dưới 3,5 tấn: 90km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
                "correct": false
            },
            {
                "id": 4,
                "text": "Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 153,
        "index": 153,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 80 km/h?",
        "tip": "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 29 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 29 chỗ, tải dưới 3,5 tấn: 80km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 154,
        "index": 154,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 70 km/h?",
        "tip": "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 29 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 29 chỗ, tải dưới 3,5 tấn: 80km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
                "correct": false
            },
            {
                "id": 4,
                "text": "Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 155,
        "index": 155,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 60 km/h?",
        "tip": "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 29 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 29 chỗ, tải dưới 3,5 tấn: 80km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
                "correct": true
            },
            {
                "id": 4,
                "text": "Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 97,
        "a2": 97,
        "b1": 103,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 156,
        "index": 156,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 50 km/h?",
        "tip": "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 29 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 29 chỗ, tải dưới 3,5 tấn: 80km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
                "correct": false
            },
            {
                "id": 4,
                "text": "Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 157,
        "index": 157,
        "text": "Khi tham gia giao thông trên đường bộ (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 50 km/h?",
        "tip": "Xe chở hàng bốn bánh có gắn động cơ: 50km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Xe máy chuyên dùng, xe gắn máy và các loại xe tương tự.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe chở người bốn bánh có gắn động cơ khi tham gia giao thông trong phạm vi và thời gian cho phép hoạt động.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe chở hàng bốn bánh có gắn động cơ khi tham gia giao thông trong phạm vi và thời gian cho phép hoạt động.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 104,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 158,
        "index": 158,
        "text": "Khi tham gia giao thông trên đoạn đường không có biển báo 'Cự ly tối thiểu giữa hai xe', trong điều kiện mặt đường khô ráo, không có sương mù, mặt đường không trơn trượt, địa hình bằng phẳng, đường thẳng, tầm nhìn bảo đảm, xe cơ giới đang chạy với tốc độ từ trên 80 km/h đến 100 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
        "tip": "Khoảng cách an toàn tối thiểu: 60km/h = 35m; 60 - 80km/h = 55m; 80 - 100km/h = 70m; 100 - 120km/h = 100m.",
        "answers": [
            {
                "id": 1,
                "text": "35 m.",
                "correct": false
            },
            {
                "id": 2,
                "text": "55 m.",
                "correct": false
            },
            {
                "id": 3,
                "text": "70 m.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 159,
        "index": 159,
        "text": "Khi tham gia giao thông trên đoạn đường không có biển báo 'cự ly tối thiểu giữa hai xe', trong điều kiện mặt đường khô ráo, không có sương mù, mặt đường không trơn trượt, địa hình bằng phẳng, đường thẳng, tầm nhìn bảo đảm, xe cơ giới đang chạy với tốc độ từ trên 100 km/h đến 120 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
        "tip": "Khoảng cách an toàn tối thiểu: 60km/h = 35m; 60 - 80km/h = 55m; 80 - 100km/h = 70m; 100 - 120km/h = 100m.",
        "answers": [
            {
                "id": 1,
                "text": "55 m.",
                "correct": false
            },
            {
                "id": 2,
                "text": "70 m.",
                "correct": false
            },
            {
                "id": 3,
                "text": "100 m.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 160,
        "index": 160,
        "text": "Khi tham gia giao thông trên đoạn đường không có biển báo 'cự ly tối thiểu giữa hai xe', trong điều kiện mặt đường khô ráo, không có sương mù, mặt đường không trơn trượt, địa hình bằng phẳng, đường thẳng, tầm nhìn bảo đảm, xe cơ giới đang chạy với tốc độ từ trên 60 km/h đến 80 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
        "tip": "Khoảng cách an toàn tối thiểu: 60km/h = 35m; 60 - 80km/h = 55m; 80 - 100km/h = 70m; 100 - 120km/h = 100m.",
        "answers": [
            {
                "id": 1,
                "text": "55 m.",
                "correct": true
            },
            {
                "id": 2,
                "text": "70 m.",
                "correct": false
            },
            {
                "id": 3,
                "text": "100 m.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 161,
        "index": 161,
        "text": "Khi tham gia giao thông trên đoạn đường không có biển báo 'cự ly tối thiểu giữa hai xe', trong điều kiện mặt đường khô ráo, không có sương mù, mặt đường không trơn trượt, địa hình bằng phẳng, đường thẳng, tầm nhìn bảo đảm, xe cơ giới đang chạy với tốc độ 60 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
        "tip": "Khoảng cách an toàn tối thiểu: 60km/h = 35m; 60 - 80km/h = 55m; 80 - 100km/h = 70m; 100 - 120km/h = 100m.",
        "answers": [
            {
                "id": 1,
                "text": "35 m.",
                "correct": true
            },
            {
                "id": 2,
                "text": "55 m.",
                "correct": false
            },
            {
                "id": 3,
                "text": "70 m.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 162,
        "index": 162,
        "text": "Khi điều khiển xe chạy với tốc độ dưới 60 km/h, để bảo đảm khoảng cách an toàn giữa hai xe, người lái xe phải điều khiển xe như thế nào?",
        "tip": "Chủ động giữ khoảng cách và bảo đảm khoảng cách an toàn.",
        "answers": [
            {
                "id": 1,
                "text": "Chủ động giữ khoảng cách an toàn phù hợp với xe chạy liền trước xe của mình.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Bảo đảm khoảng cách an toàn tùy thuộc vào mật độ phương tiện, tình hình giao thông thực tế.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 105,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 163,
        "index": 163,
        "text": "Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép đến mức cần thiết, chú ý quan sát và chuẩn bị sẵn sàng những tình huống có thể xảy ra để phòng ngừa tai nạn trong các trường hợp nào dưới đây?",
        "tip": "Quan sát biển báo nguy hiểm và cảnh báo trên đường.",
        "answers": [
            {
                "id": 1,
                "text": "Gặp biển báo nguy hiểm và cảnh báo trên đường.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Gặp biển chỉ dẫn trên đường.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Gặp biển báo hết mọi lệnh cấm.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Gặp biển báo hết hạn chế tốc độ tối đa cho phép.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 98,
        "a2": 98,
        "b1": 106,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 164,
        "index": 164,
        "text": "Xe đưa đón trẻ em mầm non, học sinh được ưu tiên gì khi tham gia giao thông đường bộ?",
        "tip": "Xe đưa đón học sinh: Được ưu tiên phân luồng, điều tiết, bố trí nơi dừng/đỗ.",
        "answers": [
            {
                "id": 1,
                "text": "Tổ chức phân luồng, điều tiết giao thông, bố trí nơi dừng xe, đỗ xe tại khu vực trường học và tại các điểm trên lộ trình đưa đón trẻ em mầm non, học sinh.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Được bố trí xe dẫn đường để bảo đảm an toàn giao thông.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 165,
        "index": 165,
        "text": "Người điều khiển phương tiện tham gia giao thông đường bộ phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong các trường hợp nào dưới đây?",
        "tip": "Quan sát, giảm tốc độ/dừng khi: Vạch/nơi người đi bộ qua đường, giao nhau, đường hẹp/vòng/dốc, khu vực trường học/bệnh viện/chợ/công trình.",
        "answers": [
            {
                "id": 1,
                "text": "Tại nơi có vạch kẻ đường hoặc báo hiệu khác dành cho người đi bộ hoặc tại nơi mà người đi bộ, xe lăn của người khuyết tật đang qua đường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nơi đường bộ giao nhau cùng mức với đường bộ, đường bộ giao nhau cùng mức với đường sắt; đường hẹp, đường vòng, đường quanh co, đường đèo, dốc.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Khu vực có trường học, bệnh viện, bến xe, công trình công cộng tập trung đông người, khu vực đông dân cư, chợ, khu vực đang thi công trên đường bộ, hiện trường vụ tai nạn giao thông đường bộ.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 107,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 166,
        "index": 166,
        "text": "Tại những đoạn đường không bố trí biển báo hạn chế tốc độ, không bố trí biển báo khoảng cách an toàn tối thiểu giữa hai xe, người lái xe phải thực hiện quy định nào dưới đây để bảo đảm an toàn?",
        "tip": "Không có biển báo tốc độ/khoảng cách: Vẫn phải tuân thủ quy định chung về tốc độ, khoảng cách.",
        "answers": [
            {
                "id": 1,
                "text": "Được phép lái xe không hạn chế tốc độ và khoảng cách an toàn tối thiểu với xe phía trước cùng làn đường hoặc phần đường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Được phép lái xe không hạn chế tốc độ và khoảng cách an toàn tối thiểu với xe phía trước cùng làn đường hoặc phần đường khi tham gia giao thông trên đường nhánh.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Chấp hành quy định về tốc độ, khoảng cách an toàn tối thiểu với xe phía trước cùng làn đường hoặc phần đường.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 108,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 167,
        "index": 167,
        "text": "Khi gặp xe buýt đang dừng đón, trả khách, người điều khiển xe mô tô phải xử lý như thế nào dưới đây?",
        "tip": "Gặp xe buýt dừng đón/trả khách: Quan sát, giảm tốc độ hoặc dừng lại an toàn.",
        "answers": [
            {
                "id": 1,
                "text": "Tăng tốc độ để nhanh chóng vượt qua xe buýt.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Quan sát, giảm tốc độ đi qua xe buýt hoặc dừng lại để bảo đảm an toàn.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 99,
        "a2": 99,
        "b1": 109,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 168,
        "index": 168,
        "text": "Việc vận chuyển hành khách bằng xe ô tô phải tuân thủ các quy định nào dưới đây?",
        "tip": "Vận chuyển ô tô khách: Đón/trả đúng nơi, hướng dẫn an toàn, vệ sinh, đúng lịch trình, không chở nóc/khoang hành lý/đu bám.",
        "answers": [
            {
                "id": 1,
                "text": "Đón, trả hành khách đúng nơi quy định; hướng dẫn sử dụng trang thiết bị an toàn trên xe; có biện pháp giữ gìn vệ sinh trong xe; vận chuyển hành khách đúng lịch trình, lộ trình đã đăng ký, trừ trường hợp bất khả kháng; không chở hành khách trên nóc xe, trong khoang chở hành lý hoặc để hành khách đu, bám bên ngoài xe.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Đón, trả hành khách theo yêu cầu của hành khách trên xe; hướng dẫn sử dụng trang thiết bị an toàn trên xe; có biện pháp giữ gìn vệ sinh trong xe; vận chuyển hành khách đúng lịch trình, lộ trình đã đăng ký, trừ trường hợp bất khả kháng; không chở hành khách trên nóc xe, trong khoang chở hành lý hoặc để hành khách đu, bám bên ngoài xe.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 169,
        "index": 169,
        "text": "Trong hoạt động vận tải đường bộ, các hành vi nào dưới đây bị nghiêm cấm?",
        "tip": "Cấm trong vận tải: Chở hàng cấm, hàng nguy hiểm (trái phép/không đúng quy định), động vật hoang dã.",
        "answers": [
            {
                "id": 1,
                "text": "Vận chuyển hàng hóa cấm lưu hành.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Vận chuyển trái phép hoặc không thực hiện đầy đủ các quy định của pháp luật về vận chuyển hàng hóa nguy hiểm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Vận chuyển động vật hoang dã.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 170,
        "index": 170,
        "text": "Trong hoạt động vận tải hành khách, những hành vi nào dưới đây bị nghiêm cấm?",
        "tip": "Vận tải khách cấm: Đe dọa, xúc phạm, tranh giành khách; cưỡng ép dịch vụ; chuyển tải/xuống khách trốn tránh quá tải.",
        "answers": [
            {
                "id": 1,
                "text": "Cạnh tranh nhau nhằm tăng lợi nhuận.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giảm giá để thu hút khách.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Đe dọa, xúc phạm, tranh giành, lôi kéo hành khách; đe dọa, cưỡng ép hành khách sử dụng dịch vụ ngoài ý muốn; chuyển tải, xuống khách hoặc các hành vi khác nhằm trốn tránh phát hiện xe chở quá tải, quá số người theo quy định của pháp luật.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 171,
        "index": 171,
        "text": "Thời gian lái xe liên tục của người lái xe ô tô kinh doanh vận tải được quy định như thế nào để bảo đảm an toàn giao thông?",
        "tip": "Lái xe liên tục: Không quá 4 giờ.",
        "answers": [
            {
                "id": 1,
                "text": "Không quá 4 giờ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Không quá 6 giờ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không quá 8 giờ.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Liên tục tùy thuộc vào sức khỏe và khả năng của người lái xe.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 172,
        "index": 172,
        "text": "Thời gian làm việc của người lái xe ô tô kinh doanh vận tải trong một ngày được quy định như thế nào để bảo đảm an toàn giao thông?",
        "tip": "Lái xe làm việc: Không quá 10 giờ 1 ngày.",
        "answers": [
            {
                "id": 1,
                "text": "Không quá 6 giờ trong một ngày.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không quá 8 giờ trong một ngày.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không quá 10 giờ trong một ngày.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Không hạn chế tùy thuộc vào sức khỏe và khả năng của người lái xe.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 173,
        "index": 173,
        "text": "Trước khi xe khởi hành, người lái xe, nhân viên phục vụ trên xe ô tô vận chuyển hành khách có trách nhiệm nào sau đây?",
        "tip": "Trước khi xe khách khởi hành: Kiểm tra an toàn xe, hướng dẫn khách an toàn & thoát hiểm.",
        "answers": [
            {
                "id": 1,
                "text": "Kiểm tra các điều kiện bảo đảm an toàn của xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Hướng dẫn cho hành khách về an toàn giao thông đường bộ và thoát hiểm khi gặp sự cố.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Kiểm tra nhân thân và hành lý của hành khách đi xe.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 174,
        "index": 174,
        "text": "Xe ô tô kinh doanh vận tải chở trẻ em mầm non, học sinh phải đáp ứng các yêu cầu nào dưới đây?",
        "tip": "Xe chở học sinh: Thiết bị ghi hình/chống bỏ quên, niên hạn <=20 năm, màu sơn quy định, dây đai/ghế phù hợp, đủ giấy tờ/thiết bị giám sát.",
        "answers": [
            {
                "id": 1,
                "text": "Có thiết bị ghi nhận hình ảnh trẻ em mầm non, học sinh và thiết bị có chức năng cảnh báo, chống bỏ quên trẻ em trên xe; có niên hạn sử dụng không quá 20 năm; có màu sơn theo quy định của Chính phủ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Có dây đai an toàn phù hợp với lứa tuổi hoặc sử dụng xe có ghế ngồi phù hợp với lứa tuổi theo quy định của pháp luật.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Được cấp chứng nhận đăng ký xe và gắn biển số xe, bảo đảm an toàn kỹ thuật và bảo vệ môi trường theo quy định của pháp luật; xe ô tô chở người từ 08 chỗ trở lên (không kể chỗ của người lái xe) phải lắp thiết bị giám sát hành trình và thiết bị ghi nhận hình ảnh người lái xe.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 175,
        "index": 175,
        "text": "Việc vận chuyển động vật sống khi tham gia giao thông đường bộ phải thực hiện các yêu cầu nào dưới đây?",
        "tip": "Vận chuyển động vật sống: Đủ giấy tờ, phương tiện phù hợp, tuân thủ luật GT, vệ sinh dịch tễ, môi trường.",
        "answers": [
            {
                "id": 1,
                "text": "Người lái xe phải mang đủ giấy tờ theo quy định của pháp luật.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Phương tiện vận chuyển phải có kết cấu phù hợp với loại động vật chuyên chở.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Trong quá trình vận chuyển phải chấp hành các quy định của pháp luật về trật tự, an toàn giao thông đường bộ, vệ sinh dịch tễ, phòng dịch và bảo đảm vệ sinh môi trường.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 176,
        "index": 176,
        "text": "Việc vận chuyển hàng hóa nguy hiểm khi tham gia giao thông đường bộ phải chấp hành các quy định nào dưới đây?",
        "tip": "Chở hàng nguy hiểm: Phải có giấy phép, (nếu cần) có người áp tải.",
        "answers": [
            {
                "id": 1,
                "text": "Phải có giấy phép vận chuyển; trong trường hợp cần thiết, đơn vị vận chuyển hàng hóa nguy hiểm phải bố trí người áp tải để bảo đảm trật tự, an toàn giao thông đường bộ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Phải có giấy phép vận chuyển; không phải bố trí người áp tải khi tham gia giao thông đường bộ.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 177,
        "index": 177,
        "text": "Việc lưu hành xe ô tô của người nước ngoài đăng ký tại nước ngoài có tay lái ở bên phải tham gia giao thông tại Việt Nam, xe cơ giới nước ngoài do người nước ngoài đưa vào Việt Nam du lịch được quy định như như thế nào?",
        "tip": "Xe nước ngoài (tay lái phải/du lịch): Tuân thủ luật VN (hoặc điều ước quốc tế), đúng phạm vi/tuyến/thời gian cấp phép, (tay lái phải) phải đi đoàn có hỗ trợ.",
        "answers": [
            {
                "id": 1,
                "text": "Phải chấp hành quy định của pháp luật về trật tự, an toàn giao thông đường bộ của Việt Nam. Trường hợp điều ước quốc tế mà nước Cộng hòa xã hội chủ nghĩa Việt Nam là thành viên có quy định khác thì áp dụng theo điều ước quốc tế đó.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Tham gia giao thông đúng trong phạm vi, tuyến đường, thời gian đã được cơ quan có thẩm quyền của Việt Nam cấp phép.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe ô tô của người nước ngoài đăng ký tại nước ngoài có tay lái ở bên phải phải đi theo đoàn và có người, phương tiện hỗ trợ, hướng dẫn giao thông.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 178,
        "index": 178,
        "text": "Việc sử dụng xe mô tô, xe gắn máy, xe thô sơ để vận chuyển hành khách, hàng hóa phải thực hiện các quy định nào dưới đây để đảm bảo an toàn giao thông?",
        "tip": "Chở người/hàng bằng xe máy/thô sơ: Kiểm tra xe, đủ giấy tờ, sắp xếp hàng an toàn, không chở quá tải/khổ/số người.",
        "answers": [
            {
                "id": 1,
                "text": "Kiểm tra điều kiện bảo đảm an toàn của xe trước khi tham gia giao thông đường bộ; mang đủ giấy tờ theo quy định của pháp luật.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Kiểm tra việc sắp xếp hàng hóa bảo đảm an toàn; không chở quá số người, chở hành lý, hàng hóa vượt quá khối lượng cho phép hoặc vượt quá khổ giới hạn của xe.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 100,
        "a2": 100,
        "b1": 110,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 179,
        "index": 179,
        "text": "Xe vận chuyển hàng siêu trường, siêu trọng phải thực hiện các quy định nào dưới đây để bảo đảm an toàn giao thông?",
        "tip": "Chở hàng siêu trường/trọng: Chạy tốc độ trong giấy phép, báo hiệu kích thước, (nếu cần) có người/phương tiện hỗ trợ, cảnh báo.",
        "answers": [
            {
                "id": 1,
                "text": "Phải chạy với tốc độ quy định trong giấy phép và phải có báo hiệu kích thước của hàng; trường hợp cần thiết, phải có người, phương tiện hỗ trợ lái xe, cảnh báo cho người, phương tiện tham gia giao thông đường bộ khác và thực hiện các biện pháp bảo đảm an toàn giao thông khi vận chuyển hàng siêu trường, siêu trọng trên đường bộ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Phải chạy với tốc độ quy định trong giấy phép; phải có người, phương tiện hỗ trợ lái xe, cảnh báo cho người, phương tiện tham gia giao thông đường bộ khác và thực hiện các biện pháp bảo đảm an toàn giao thông đường khi vận chuyển hàng siêu trường, siêu trọng trên đường dành cho giao thông công cộng.",
                "correct": false
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 180,
        "index": 180,
        "text": "Xe cứu hộ giao thông đường bộ cần thực hiện yêu cầu nào sau đây để bảo đảm trật tự an toàn giao thông?",
        "tip": "Xe cứu hộ: Dấu hiệu nhận diện, thông tin, GSHT, ghi hình lái; Tuân thủ khối lượng quy định.",
        "answers": [
            {
                "id": 1,
                "text": "Xe cứu hộ giao thông đường bộ phải có dấu hiệu nhận diện, niêm yết thông tin trên xe, gắn thiết bị giám sát hành trình và thiết bị ghi nhận hình ảnh người lái xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Phải tuân thủ quy định của pháp luật về khối lượng hàng hóa chuyên chở của xe cứu hộ và khối lượng của xe được cứu hộ ghi trên Chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 181,
        "index": 181,
        "text": "Người lái xe kinh doanh vận tải khi thực hiện tốt việc rèn luyện, nâng cao trách nhiệm, đạo đức nghề nghiệp sẽ thu được kết quả như thế nào dưới đây?",
        "tip": "Đạo đức nghề nghiệp tốt (lái xe KDVT): Được tôn trọng, quý mến, tin dùng, thu hút khách, hiệu quả cao.",
        "answers": [
            {
                "id": 1,
                "text": "Được khách hàng, xã hội tôn trọng; được đồng nghiệp quý mến, giúp đỡ; được doanh nghiệp tin dùng và đóng góp nhiều cho xã hội; thu hút được khách hàng, góp phần quan trọng trong xây dựng thương hiệu, kinh doanh có hiệu quả cao.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Được cộng điểm vào giấy phép lái xe.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 2,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 182,
        "index": 182,
        "text": "Những hành vi nào sau đây thể hiện là người có văn hóa giao thông?",
        "tip": "Văn hóa giao thông: Tuân thủ pháp luật, nhường nhịn, giúp đỡ.",
        "answers": [
            {
                "id": 1,
                "text": "Luôn tuân thủ pháp luật về trật tự, an toàn giao thông đường bộ, nhường nhịn và giúp đỡ người khác.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Đi nhanh, vượt đèn đỏ nếu không có lực lượng Công an.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Bấm còi và nháy đèn liên tục để cảnh báo xe khác.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Tránh nhường đường để đi nhanh hơn.",
                "correct": false
            }
        ],
        "topic": 2,
        "a1": 101,
        "a2": 101,
        "b1": 111,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 183,
        "index": 183,
        "text": "Người lái xe kinh doanh vận tải cần thực hiện những công việc gì ghi ở dưới đây để thường xuyên rèn luyện nâng cao đạo đức nghề nghiệp?",
        "tip": "Rèn luyện đạo đức lái xe KDVT: Quản lý xe tốt, tu dưỡng bản thân, chấp hành luật, trách nhiệm với khách, hợp tác.",
        "answers": [
            {
                "id": 1,
                "text": "Quản lý và sử dụng xe tốt; bảo dưỡng xe đúng định kỳ; thực hành tiết kiệm vật tư, nhiên liệu; luôn tu dưỡng bản thân, có lối sống lành mạnh, tác phong làm việc công nghiệp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nắm vững và tự giác chấp hành các quy định của pháp luật về trật tự, an toàn giao thông đường bộ, lái xe an toàn; thực hiện đầy đủ trách nhiệm với khách hàng; có ý thức tổ chức kỷ luật và xây dựng doanh nghiệp vững mạnh; có tinh thần hợp tác, tương trợ, giúp đỡ đồng nghiệp.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 2,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 184,
        "index": 184,
        "text": "Người lái xe ô tô vận chuyển hành khách phải có những phẩm chất, đạo đức nghề nghiệp gì dưới đây?",
        "tip": "Lái xe khách về đạo đức: Lịch sự, giúp đỡ khách; Tu dưỡng bản thân, tôn trọng người khác, bảo vệ môi trường.",
        "answers": [
            {
                "id": 1,
                "text": "Phải có thái độ lịch sự, tôn trọng, thân mật với hành khách; giúp đỡ những người có hoàn cảnh khó khăn, người già, người khuyết tật, phụ nữ có thai, có con nhỏ và trẻ em.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Luôn tu dưỡng bản thân, có lối sống lành mạnh, khiêm tốn, có tác phong làm việc công nghiệp, không tham gia vào các tệ nạn xã hội; tôn trọng người cùng tham gia giao thông đường bộ và có ý thức bảo vệ môi trường.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 2,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 185,
        "index": 185,
        "text": "Khái niệm về văn hóa giao thông được hiểu như thế nào là đúng?",
        "tip": "Văn hóa giao thông = Hiểu biết và chấp hành luật, ý thức trách nhiệm + Tôn trọng, nhường nhịn, giúp đỡ, ứng xử văn hóa.",
        "answers": [
            {
                "id": 1,
                "text": "Là sự hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông, là ý thức trách nhiệm với cộng đồng khi tham gia giao thông.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Là sự tôn trọng, nhường nhịn, giúp đỡ và ứng xử có văn hóa giữa những người tham gia giao thông với nhau.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 2,
        "a1": 102,
        "a2": 102,
        "b1": 112,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 186,
        "index": 186,
        "text": "Trên làn đường dành cho ô tô có vũng nước lớn, người lái xe ô tô bắt buộc phải đi qua vũng nước, trên làn đường bên cạnh có nhiều người đang lái xe mô tô tham gia giao thông, người lái xe ô tô xử lý như thế nào khi lái xe qua vũng nước là có văn hóa giao thông?",
        "tip": "Qua vũng nước (có xe máy bên cạnh): Giảm tốc độ, chạy chậm.",
        "answers": [
            {
                "id": 1,
                "text": "Cho xe chạy thật nhanh qua vũng nước.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giảm tốc độ cho xe chạy chậm qua vũng nước.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Giảm tốc độ cho xe chạy qua làn đường dành cho mô tô để tránh vũng nước.",
                "correct": false
            }
        ],
        "topic": 2,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 187,
        "index": 187,
        "text": "Người lái xe không điều khiển xe đi đúng làn đường quy định, phóng nhanh, vượt ẩu, vượt đèn đỏ, đi vào đường cấm được coi là hành vi nào trong các hành vi dưới đây?",
        "tip": "Sai làn, phóng nhanh, vượt ẩu/đèn đỏ, vào đường cấm = Thiếu văn hóa + Vi phạm pháp luật.",
        "answers": [
            {
                "id": 1,
                "text": "Là thiếu văn hóa giao thông, vi phạm pháp luật về trật tự, an toàn giao thông đường bộ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Là thiếu văn hóa giao thông.",
                "correct": false
            }
        ],
        "topic": 2,
        "a1": 103,
        "a2": 103,
        "b1": 113,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 188,
        "index": 188,
        "text": "Khi sơ cứu người bị tai nạn giao thông đường bộ, có vết thương chảy máu ngoài, phun thành tia và phun mạnh khi mạch đập, bạn phải làm gì dưới đây?",
        "tip": "Máu phun thành tia (tai nạn GT): Cầm máu không trực tiếp (chặn động mạch).",
        "answers": [
            {
                "id": 1,
                "text": "Thực hiện cầm máu trực tiếp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Thực hiện cầm máu không trực tiếp (chặn động mạch).",
                "correct": true
            }
        ],
        "topic": 2,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 189,
        "index": 189,
        "text": "Người lái xe có văn hóa giao thông khi tham gia giao thông đường bộ phải đáp ứng các điều kiện nào dưới đây?",
        "tip": "Lái xe văn hóa: Hiểu và chấp hành luật, ý thức trách nhiệm, tôn trọng, nhường nhịn, giúp đỡ, ứng xử văn hóa.",
        "answers": [
            {
                "id": 1,
                "text": "Hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông đường bộ; có ý thức trách nhiệm với cộng đồng khi tham gia giao thông; tôn trọng, nhường nhịn, giúp đỡ và ứng xử có văn hóa với những người cùng tham gia giao thông.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Điều khiển xe vượt quá tốc độ, đi không đúng làn đường.",
                "correct": false
            }
        ],
        "topic": 2,
        "a1": 104,
        "a2": 104,
        "b1": 114,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 190,
        "index": 190,
        "text": "Người lái xe có văn hóa giao thông khi tham gia giao thông phải tuân thủ những quy định nào dưới đây?",
        "tip": "Lái xe văn hóa tuân thủ: Hiệu lệnh người ĐKGT, tốc độ, đèn, biển báo, vạch kẻ; nhường đường người đi bộ/già/trẻ/khuyết tật.",
        "answers": [
            {
                "id": 1,
                "text": "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông, chỉ đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chấp hành hiệu lệnh, chỉ dẫn của người điều khiển giao thông, quy định về tốc độ, tín hiệu đèn, biển báo hiệu, vạch kẻ đường khi lái xe; nhường đường cho người đi bộ, người già, trẻ em, người khuyết tật.",
                "correct": true
            }
        ],
        "topic": 2,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 191,
        "index": 191,
        "text": "Người lái xe mô tô có văn hóa giao thông khi tham gia giao thông phải tuân thủ những quy định nào dưới đây?",
        "tip": "Lái xe mô tô văn hóa: Đi đúng bên phải, đúng phần đường/làn; đội mũ đúng chuẩn, cài quai.",
        "answers": [
            {
                "id": 1,
                "text": "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đúng quy chuẩn kỹ thuật quốc gia, cài quai đúng quy cách.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Điều khiển xe và đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm.",
                "correct": false
            }
        ],
        "topic": 2,
        "a1": 105,
        "a2": 105,
        "b1": 115,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 192,
        "index": 192,
        "text": "Trong các hành vi dưới đây, người lái xe có văn hóa giao thông phải ứng xử như thế nào?",
        "tip": "Ứng xử văn hóa khi lái xe: Đi đúng bên phải, đúng phần đường/làn, dừng/đỗ đúng nơi; không rượu bia khi lái xe.",
        "answers": [
            {
                "id": 1,
                "text": "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; dừng, đỗ xe đúng nơi quy định; đã uống rượu, bia thì không lái xe.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện giao thông; dừng xe, đỗ xe ở nơi thuận tiện hoặc theo yêu cầu của hành khách, của người thân.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dừng và đỗ xe ở nơi thuận tiện cho việc chuyên chở hành khách và giao nhận hàng hóa; sử dụng ít rượu, bia thì có thể lái xe.",
                "correct": false
            }
        ],
        "topic": 2,
        "a1": 106,
        "a2": 106,
        "b1": 116,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 193,
        "index": 193,
        "text": "Khi tham gia giao thông việc sử dụng còi xe nên dùng như thế nào để thể hiện là người có văn hóa giao thông?",
        "tip": "Sử dụng còi văn hóa: Chỉ khi cần thiết, không liên tục/kéo dài, đúng âm lượng.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ bấm còi khi thật sự cần thiết, không bấm còi liên tục hoặc kéo dài, sử dụng còi với mức âm lượng theo quy định.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Bấm còi liên tục để các xe khác nhường đường.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Bấm còi to khi đi qua khu vực đông dân cư.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Không cần dùng còi, tránh gây tiếng ồn là văn minh.",
                "correct": false
            }
        ],
        "topic": 2,
        "a1": 107,
        "a2": 107,
        "b1": 117,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 194,
        "index": 194,
        "text": "Người điều khiển phương tiện tham giao thông đường bộ gây ra tai nạn giao thông đường bộ, người liên quan đến vụ tai nạn giao thông đường bộ có trách nhiệm gì dưới đây?",
        "tip": "Trách nhiệm khi gây tai nạn/liên quan: Dừng xe, cảnh báo, giữ hiện trường, cứu người, báo tin; Ở lại hiện trường (trừ trường hợp khẩn cấp nhưng phải trình báo); Cung cấp thông tin.",
        "answers": [
            {
                "id": 1,
                "text": "Dừng ngay phương tiện, cảnh báo nguy hiểm, giữ nguyên hiện trường, trợ giúp người bị nạn và báo tin cho cơ quan Công an, cơ sở khám bệnh, chữa bệnh.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Ở lại hiện trường vụ tai nạn giao thông đường bộ cho đến khi người của cơ quan Công an đến, trừ trường hợp phải đi cấp cứu, đưa người bị nạn đi cấp cứu hoặc xét thấy bị đe dọa đến tính mạng, sức khỏe nhưng phải đến trình báo ngay cơ quan Công an, Ủy ban nhân dân nơi gần nhất.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cung cấp thông tin xác định danh tính về bản thân, người liên quan đến vụ tai nạn giao thông đường bộ và thông tin liên quan của vụ tai nạn giao thông đường bộ cho cơ quan có thẩm quyền.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 2,
        "a1": 108,
        "a2": 108,
        "b1": 118,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 195,
        "index": 195,
        "text": "Người có mặt tại nơi xảy ra vụ tai giao thông đường bộ có trách nhiệm gì dưới đây?",
        "tip": "Người có mặt tại tai nạn: Giúp đỡ/cứu người, báo tin, bảo vệ hiện trường/tài sản, cung cấp thông tin.",
        "answers": [
            {
                "id": 1,
                "text": "Giúp đỡ, cứu chữa kịp thời người bị nạn; báo tin ngay cho cơ quan Công an, cơ sở khám bệnh, chữa bệnh hoặc Ủy ban nhân dân nơi gần nhất; tham gia bảo vệ hiện trường; tham gia bảo vệ tài sản của người bị nạn; cung cấp thông tin liên quan về vụ tai nạn theo yêu cầu của cơ quan có thẩm quyền.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Chụp lại hình ảnh vụ tai nạn (nếu có thiết bị ghi hình) và nhanh chóng rời khỏi hiện trường vụ tai nạn.",
                "correct": false
            }
        ],
        "topic": 2,
        "a1": 109,
        "a2": 109,
        "b1": 119,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 196,
        "index": 196,
        "text": "Khi sơ cứu ban đầu cho người bị tai nạn giao thông đường bộ không còn hô hấp, người lái xe và người có mặt tại hiện trường vụ tai nạn phải thực hiện các công việc gì dưới đây?",
        "tip": "Sơ cứu người không hô hấp (TNGT): Nằm ngửa, khai thông đường thở, hô hấp nhân tạo.",
        "answers": [
            {
                "id": 1,
                "text": "Đặt nạn nhân nằm ngửa, khai thông đường thở của nạn nhân; thực hiện các biện pháp hô hấp nhân tạo.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Thực hiện các biện pháp hô hấp nhân tạo.",
                "correct": false
            }
        ],
        "topic": 2,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 197,
        "index": 197,
        "text": "Hành vi bỏ trốn sau khi gây tai nạn để trốn tránh trách nhiệm hoặc khi có điều kiện mà cố ý không cứu giúp người bị tai nạn giao thông có bị nghiêm cấm hay không?",
        "tip": "Bỏ trốn/không cứu giúp sau tai nạn: Bị nghiêm cấm.",
        "answers": [
            {
                "id": 1,
                "text": "Không bị nghiêm cấm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nghiêm cấm tùy từng trường hợp cụ thể.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Bị nghiêm cấm.",
                "correct": true
            }
        ],
        "topic": 2,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 198,
        "index": 198,
        "text": "Khi đang lái xe, thấy một người đi bộ đang sang đường trên vạch kẻ đường dành cho người đi bộ, người lái xe nên làm gì?",
        "tip": "Thấy người đi bộ qua vạch: Giảm tốc độ, nhường đường.",
        "answers": [
            {
                "id": 1,
                "text": "Giảm tốc độ và nhường đường cho người đi bộ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Bấm còi để họ đi nhanh hơn.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tiếp tục đi nếu đang vội.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Vượt qua nếu thấy khoảng trống đủ rộng.",
                "correct": false
            }
        ],
        "topic": 2,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 199,
        "index": 199,
        "text": "Khi gặp vụ tai nạn giao thông, người lái xe nên hành động như thế nào?",
        "tip": "Gặp tai nạn giao thông: Dừng xe, hỗ trợ nạn nhân, báo cơ quan chức năng.",
        "answers": [
            {
                "id": 1,
                "text": "Chạy đi để tránh rắc rối.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Dừng xe, hỗ trợ nạn nhân và báo cho cơ quan chức năng.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Chỉ quan sát rồi tiếp tục di chuyển.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Chỉ giúp đỡ nếu có người thân trong vụ tai nạn.",
                "correct": false
            }
        ],
        "topic": 2,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 200,
        "index": 200,
        "text": "Trong đoạn đường hai chiều tại khu đông dân cư đang ùn tắc, người điều khiển xe mô tô có văn hóa giao thông sẽ lựa chọn cách xử lý tình huống nào dưới đây?",
        "tip": "Ùn tắc (đường 2 chiều, khu dân cư): Kiên nhẫn, tuân thủ hướng dẫn/đèn, đi đúng phần đường, nhường xe ngược chiều.",
        "answers": [
            {
                "id": 1,
                "text": "Cho xe lấn sang làn ngược chiều để nhanh chóng thoát khỏi nơi ùn tắc.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Điều khiển xe trên vỉa hè để nhanh chóng thoát khỏi nơi ùn tắc.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Kiên nhẫn tuân thủ hướng dẫn của người điều khiển giao thông hoặc tín hiệu đèn giao thông, di chuyển trên đúng phần đường bên phải theo chiều đi, nhường đường cho các phương tiện đi ngược chiều.",
                "correct": true
            }
        ],
        "topic": 2,
        "a1": 110,
        "a2": 110,
        "b1": 120,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 201,
        "index": 201,
        "text": "Khi điều khiển phương tiện tham gia giao thông trên đoạn đường bộ đang xảy ra ùn tắc, những hành vi nào dưới đây là thiếu văn hóa?",
        "tip": "Ùn tắc (khu dân cư) - THIẾU văn hóa: Bấm còi, đi trên vỉa hè, chen lấn, lấn làn.",
        "answers": [
            {
                "id": 1,
                "text": "Bấm còi liên tục thúc giục các phương tiện phía trước nhường đường; đi trên vỉa hè, tận dụng mọi khoảng trống để nhanh chóng thoát khỏi nơi ùn tắc; lấn sang trái đường cố gắng vượt lên xe khác.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Tuân thủ hướng dẫn của người điều khiển giao thông hoặc tín hiệu giao thông, đi đúng phần đường, làn đường quy định.",
                "correct": false
            }
        ],
        "topic": 2,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 202,
        "index": 202,
        "text": "Người lái xe, chủ phương tiện giao thông cơ giới đường bộ nên thực hiện các biện pháp phòng cháy, chữa cháy như thế nào dưới đây?",
        "tip": "Phòng cháy xe: Không lắp thêm thiết bị điện sai thiết kế + Phải tắt khóa điện + Không để chất dễ cháy trong xe.",
        "answers": [
            {
                "id": 1,
                "text": "Không lắp đặt thêm thiết bị điện, phụ kiện không đúng theo thiết kế của nhà sản xuất; tuân thủ quy trình vận hành bảo trì bảo dưỡng định kỳ; thường xuyên kiểm tra phương tiện, khi phát hiện thấy dấu hiệu khác lạ (khó nổ, có hơi xăng, có tiếng kêu bất thường, nhiệt độ của máy cao, có mùi khét) cần khắc phục ngay.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Khi để xe trong nhà, ở nơi trông giữ xe phải tắt khóa điện, để xa nguồn lửa, nguồn nhiệt; không mua xăng, dầu ở các điểm bán tự phát, không rõ nguồn gốc; không sử dụng các biện pháp 'tiết kiệm xăng, dầu' khi chưa được kiểm chứng về mức độ an toàn có thể gây hỏng xe hoặc dẫn đến nguy cơ xảy ra cháy cao.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không để các chất dễ cháy, dễ bắt lửa trong xe, dưới yên xe, trong cốp xe, trong khoang động cơ. Đối với xe điện cần chọn địa điểm sạc an toàn, sử dụng các thiết bị sạc đúng cách và giám sát quá trình sạc.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 2,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 203,
        "index": 203,
        "text": "Người điều khiển phương tiện cơ giới đường bộ phải thực hiện những biện pháp gì dưới đây để chữa cháy trong trường hợp phương tiện bị cháy, xét thấy có khả năng dập tắt đám cháy?",
        "tip": "Chữa cháy xe (nếu có khả năng dập): Tắt khóa điện + Sử dụng nước.",
        "answers": [
            {
                "id": 1,
                "text": "Tắt khoá điện, hô hoán để mọi người đến trợ giúp chữa cháy, gọi Cảnh sát phòng cháy chữa cháy và cứu nạn cứu hộ (điện thoại 114).",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nếu nhiên liệu chưa trào ra ngoài (ngọn lửa chưa cháy dữ dội) thì có thể sử dụng nước, hoặc bất kỳ chất, phương tiện chữa cháy có được để dập lửa; nếu nhiên liệu đã trào ra ngoài (ngọn lửa cháy dữ dội) thì phải sử dụng các bình chữa cháy, cát, chăn chiên, bao tải, vải nhúng nước để dập lửa.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 2,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 204,
        "index": 204,
        "text": "Khi phát hiện thấy có ngọn lửa, khói hoặc nhiệt độ cao bất thường từ phương tiện giao thông do mình điều khiển người lái xe phải làm gì trước tiên?",
        "tip": "Phát hiện xe có dấu hiệu cháy: Bình tĩnh, đưa xe sát lề, tắt khóa điện, thực hiện chữa cháy.",
        "answers": [
            {
                "id": 1,
                "text": "Bình tĩnh, đưa xe sát vào lề đường, tránh xa nơi có nhiều người, nhiều chất dễ cháy và tắt khóa điện, thực hiện các bước chữa cháy.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Hô hoán để mọi người đến trợ giúp chữa cháy, gọi Cảnh sát giao thông, Cảnh sát phòng cháy chữa cháy và cứu nạn, cứu hộ, lực lượng y tế để sẵn sàng hỗ trợ cứu người.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Nếu nhiên liệu trào ra ngoài, ngọn lửa chưa cháy dữ dội thì tiếp tục sử dụng nước, hoặc bất kỳ chất, phương tiện chữa cháy có được để dập lửa.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": false
            }
        ],
        "topic": 2,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 205,
        "index": 205,
        "text": "Khi gặp nạn nhân bị bỏng trong vụ tai nạn giao thông, người lái xe cần làm gì?",
        "tip": "Sơ cứu người bị bỏng (TNGT): Gọi 115 +  Loại bỏ nguyên nhân gây bỏng + Cho uống nước (nếu tỉnh), giữ ấm (nếu lạnh), đưa đến y tế.",
        "answers": [
            {
                "id": 1,
                "text": "Gọi số 115 để thông báo về tình trạng tai nạn và yêu cầu hỗ trợ y tế ngay lập tức. Quan sát hiện trường để giúp nạn nhân, đồng thời tránh gây tổn thương cho mình.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nhanh chóng loại bỏ nguyên nhân gây bỏng bằng cách tách nạn nhân khỏi vật gây cháy, cởi bỏ quần áo nếu bén lửa, ngâm vùng da bị bỏng vào nước sạch hoặc đắp khăn mát, lưu ý không dùng khăn hoặc nước quá lạnh.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Nếu nạn nhân còn tỉnh, cần cho uống bù nước. Trong thời tiết lạnh, cần giữ ấm cho cơ thể nạn nhân, sau đó nhanh chóng đưa đến cơ sở y tế gần nhất.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 2,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 206,
        "index": 206,
        "text": "Khi điều khiển xe mô tô tay ga xuống đường dốc dài, độ dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
        "tip": "Mô tô tay ga xuống dốc dài: Giữ ga ở mức phù hợp, phanh trước và phanh sau giảm tốc độ.",
        "answers": [
            {
                "id": 1,
                "text": "Giữ tay ga ở mức độ phù hợp, sử dụng phanh trước và phanh sau để giảm tốc độ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Nhả hết tay ga, tắt động cơ, sử dụng phanh trước và phanh sau để giảm tốc độ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Sử dụng phanh trước để giảm tốc độ kết hợp với tắt chìa khóa điện của xe.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 111,
        "a2": 111,
        "b1": 121,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 207,
        "index": 207,
        "text": "Khi vào số để khởi hành xe ô tô có số tự động, người lái xe phải thực hiện các thao tác nào để bảo đảm an toàn?",
        "tip": "Khởi hành xe số tự động: Đạp phanh chân hết cỡ, vào số, nhả phanh đỗ, kiểm tra số rồi mới lăn bánh.",
        "answers": [
            {
                "id": 1,
                "text": "Đạp bàn đạp phanh chân hết hành trình, vào số và nhả phanh đỗ, kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Đạp bàn đạp để tăng ga với mức độ phù hợp, vào số và kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 208,
        "index": 208,
        "text": "Khi nhả phanh đỗ cơ khí điều khiển bằng tay (phanh tay), người lái xe cần phải thực hiện các thao tác nào?",
        "tip": "Nhả phanh tay: Bóp khóa hãm, đẩy cần về trước; (kẹt) kéo lại đồng thời bóp khóa.",
        "answers": [
            {
                "id": 1,
                "text": "Dùng lực tay phải kéo cần phanh tay về phía sau hết hành trình; nếu khóa hãm bị kẹt cứng phải đẩy mạnh phanh tay về phía trước, sau đó bóp khóa hãm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Dùng lực tay phải bóp khóa hãm đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải kéo cần phanh tay về phía sau đồng thời bóp khóa hãm.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Dùng lực tay phải đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải đẩy mạnh phanh tay về phía trước, sau đó bóp khóa hãm.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 209,
        "index": 209,
        "text": "Khi khởi hành ô tô sử dụng hộp số cơ khí trên đường bằng, người lái xe cần thực hiện các thao tác nào theo trình tự dưới đây?",
        "tip": "Khởi hành xe số sàn (đường bằng): Kiểm tra an toàn; Đạp côn hết cỡ; Vào số 1; Nhả phanh tay, báo hiệu; Ga đủ, nhả côn từ từ (giữ 1/2 khoảng 3s) rồi nhả hết.",
        "answers": [
            {
                "id": 1,
                "text": "Kiểm tra an toàn xung quanh xe ô tô; nhả từ từ đến 1/2 hành trình bàn đạp ly hợp (côn) và giữ trong khoảng 3 giây; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát, sau đó vừa tăng ga vừa nhả hết côn để cho xe ô tô chuyển động.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Kiểm tra an toàn xung quanh xe ô tô; đạp ly hợp (côn) hết hành trình; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát; nhả từ từ đến 1/2 hành trình bàn đạp côn và giữ trong khoảng 3 giây, sau đó vừa tăng ga vừa nhả hết côn để cho xe ô tô chuyển động.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 210,
        "index": 210,
        "text": "Khi quay đầu xe, người lái xe cần phải quan sát và thực hiện các thao tác nào để bảo đảm an toàn giao thông?",
        "tip": "Quay đầu xe an toàn: Quay đầu xe với tốc độ thấp.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe cho thích hợp; quay đầu xe với tốc độ thấp; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đầu xe về phía nguy hiểm, đưa đuôi xe về phía an toàn.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe; quay đầu xe với tốc độ tối đa; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đuôi xe về phía nguy hiểm và đầu xe về phía an toàn.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 211,
        "index": 211,
        "text": "Khi ngồi lái ô tô tư thế chân, lưng, tay của người lái xe như thế nào là đúng để bảo đảm an toàn và thoải mái?",
        "tip": "Tư thế lái đúng: Chân đạp phanh/ga dễ, lưng thẳng, tay nắm vô lăng (trái 9-10h, phải 2-4h).",
        "answers": [
            {
                "id": 1,
                "text": "Điều chỉnh ghế sao cho chân có thể đạp phanh và ga dễ dàng, ngồi thẳng lưng, hai tay nắm vô lăng, tay trái nắm ở vị trí 9 đến 10 giờ và tay phải nắm ở vị trí từ 2 đến 4 giờ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Ngồi sát vô lăng để dễ quan sát hoặc ngồi tự do, không cần điều chỉnh ghế.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Ngồi ngả người về phía sau nhiều để thư giãn, chân trái để ở vị trí chân ga, hai tay nắm vô lăng ở vị trí bất kỳ.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 212,
        "index": 212,
        "text": "Khi điều khiển ô tô lên dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
        "tip": "Lên dốc cao: Về số thấp từ chân dốc.",
        "answers": [
            {
                "id": 1,
                "text": "Tăng lên số cao từ chân dốc, điều chỉnh ga cho xe nhanh lên dốc; đến gần đỉnh dốc phải tăng ga để xe nhanh chóng qua dốc; về số thấp, đi sát về phía bên phải đường, có tín hiệu (còi, đèn) để báo cho người lái xe đi ngược chiều biết.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Về số thấp từ chân dốc, điều chỉnh ga cho xe từ từ lên dốc; đến gần đỉnh dốc phải đi chậm, đi sát về phía bên phải đường, có tín hiệu (còi, đèn) để báo cho người lái xe đi ngược chiều biết.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 213,
        "index": 213,
        "text": "Khi điều khiển ô tô xuống dốc dài, người lái xe cần thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
        "tip": "Xuống dốc dài: Về số thấp.",
        "answers": [
            {
                "id": 1,
                "text": "Tăng lên số cao, nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Về số thấp, nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Về số không (0), nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 214,
        "index": 214,
        "text": "Khi xuống dốc, muốn dừng xe, người lái xe cần thực hiện các thao tác nào để bảo đảm an toàn?",
        "tip": "Dừng xe khi xuống dốc: Tín hiệu rẽ phải, sát lề phải.",
        "answers": [
            {
                "id": 1,
                "text": "Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số 1, đạp 1/2 ly hợp (côn) cho xe đến chỗ dừng; khi xe đã dừng, về số không (N), đạp phanh chân, sử dụng phanh đỗ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên trái; đạp hết hành trình ly hợp (côn) và nhả bàn đạp ga để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được tại chỗ dừng; khi xe đã dừng, đạp và giữ phanh chân.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Có tín hiệu rẽ trái, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số không (N) để xe đi đến chỗ dừng, khi xe đã dừng, sử dụng phanh đỗ.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 215,
        "index": 215,
        "text": "Khi điều khiển xe trên đường vòng người lái xe cần phải làm gì để bảo đảm an toàn?",
        "tip": "Đi đường vòng: Giảm tốc độ, về số thấp.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; giảm tốc độ tới mức cần thiết, về số thấp và thực hiện quay vòng với tốc độ phù hợp với bán kính cong của đường vòng.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; tăng tốc để nhanh chóng qua đường vòng và giảm tốc độ sau khi qua đường vòng.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 112,
        "a2": 112,
        "b1": 122,
        "required1": 0,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 216,
        "index": 216,
        "text": "Khi điều khiển xe ô tô rẽ phải, người lái xe cần thực hiện các thao tác nào để bảo đảm an toàn?",
        "tip": "Rẽ phải ô tô: Tín hiệu rẽ phải sớm, giảm tốc độ.",
        "answers": [
            {
                "id": 1,
                "text": "Có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe sang làn đường bên trái; giảm tốc độ và quan sát an toàn phía bên phải để điều khiển xe qua chỗ đường giao nhau.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; giảm tốc độ, quan sát an toàn phía trước, sau, bên phải và điều khiển xe từ từ rẽ phải.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe bám sát vào phía phải đường; tăng tốc độ và quan sát an toàn phía bên trái để điều khiển xe qua chỗ đường giao nhau.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 217,
        "index": 217,
        "text": "Khi điều khiển xe ô tô rẽ trái, người lái xe cần thực hiện các thao tác nào để bảo đảm an toàn?",
        "tip": "Rẽ trái ô tô: Tín hiệu rẽ trái sớm, giảm tốc độ.",
        "answers": [
            {
                "id": 1,
                "text": "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ trái; giảm tốc độ, quan sát an toàn xung quanh đặc biệt là bên trái; đổi sang làn đường bên trái và điều khiển xe từ từ rẽ trái.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ trái, tăng tốc độ để xe nhanh chóng qua chỗ đường giao nhau; có tín hiệu xin đổi làn đường; quan sát an toàn xung quanh đặc biệt là bên trái; đổi làn đường sang phải để mở rộng vòng cua.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 218,
        "index": 218,
        "text": "Khi điều khiển xe sử dụng hộp số cơ khí vượt qua rãnh lớn cắt ngang mặt đường, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        "tip": "Qua rãnh lớn (số sàn): Về số 1, từ từ và KHÔNG tăng số.",
        "answers": [
            {
                "id": 1,
                "text": "Vào số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tăng số, tăng tốc độ để bánh xe sau vượt qua rãnh.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Tăng ga, tăng số để hai bánh xe trước và bánh xe sau vượt qua khỏi rãnh và chạy bình thường.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Vào số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tiếp tục để bánh xe sau từ từ xuống rãnh rồi tăng dần ga cho xe ô tô lên khỏi rãnh.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 219,
        "index": 219,
        "text": "Khi điều khiển xe qua đường sắt, người lái xe cần phải thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
        "tip": "Qua đường sắt: (Có chuông/chắn hạ) Dừng an toàn, kéo phanh tay nếu chờ lâu + (Không chuông/chắn) Quan sát, an toàn thì về số thấp, ga nhẹ, không đổi số khi qua.",
        "answers": [
            {
                "id": 1,
                "text": "Khi có chuông báo hoặc thanh chắn đã hạ xuống, người lái xe phải dừng xe tạm thời đúng khoảng cách an toàn, kéo phanh tay nếu đường dốc hoặc phải chờ lâu.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Khi không có chuông báo hoặc thanh chắn không hạ xuống, người lái xe cần phải quan sát nếu thấy đủ điều kiện an toàn thì về số thấp, tăng ga nhẹ và không thay đổi số trong quá trình vượt qua đường sắt để tránh động cơ chết máy cho xe cho vượt qua.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 113,
        "a2": 113,
        "b1": 123,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 220,
        "index": 220,
        "text": "Khi điều khiển xe ô tô tự đổ, người lái xe cần chú ý những điểm gì để bảo đảm an toàn?",
        "tip": "Lái xe tự đổ: Chạy chậm đường xấu + Khi đổ hàng phải chọn vị trí.",
        "answers": [
            {
                "id": 1,
                "text": "Khi chạy trên đường xấu, nhiều ổ gà nên chạy chậm để thùng xe không bị lắc mạnh, không gây hiện tượng lệch 'ben'; khi chạy vào đường vòng, cần giảm tốc độ, không lấy lái gấp và không phanh gấp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Khi chạy trên đường quốc lộ, đường bằng phẳng không cần hạ hết thùng xe xuống.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Khi đổ hàng phải chọn vị trí có nền đường cứng và phẳng, dừng hẳn xe, kéo hết phanh đỗ; sau đó mới điều khiển cơ cấu nâng 'ben' để đổ hàng, đổ xong hàng mới hạ thùng xuống.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Ý 1 và ý 3.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 221,
        "index": 221,
        "text": "Khi điều khiển xe tăng số, người lái xe cần chú ý những điểm gì để bảo đảm an toàn?",
        "tip": "Tăng số: Không nhìn xuống buồng lái.",
        "answers": [
            {
                "id": 1,
                "text": "Không được nhìn xuống buồng lái, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, chính xác.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Nhìn xuống buồng lái để biết chính xác vị trí các tay số, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, vù ga phải phù hợp với tốc độ.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 222,
        "index": 222,
        "text": "Khi điều khiển xe giảm số, người lái xe cần phải chú ý những điểm gì để bảo đảm an toàn?",
        "tip": "Giảm số: Không nhìn xuống buồng lái.",
        "answers": [
            {
                "id": 1,
                "text": "Nhìn xuống buồng lái để biết chính xác vị trí các tay số, cần phải giảm thứ tự từ cao xuống thấp, phối hợp các động tác phải nhịp nhàng, chính xác.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không được nhìn xuống buồng lái, cần phải giảm thứ tự từ cao xuống thấp, phối hợp các động tác phải nhịp nhàng, chính xác, vù ga phải phù hợp với tốc độ.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 223,
        "index": 223,
        "text": "Để giảm tốc độ khi ô tô đi xuống đường dốc dài, người lái xe phải thực hiện các thao tác nào để bảo đảm an toàn?",
        "tip": "Giảm tốc độ xuống dốc dài: Về số thấp.",
        "answers": [
            {
                "id": 1,
                "text": "Nhả bàn đạp ga, đạp ly hợp (côn) hết hành trình, đạp mạnh phanh chân để giảm tốc độ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Về số thấp phù hợp, nhả bàn đạp ga, kết hợp đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Nhả bàn đạp ga, tăng lên số cao, đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 224,
        "index": 224,
        "text": "Khi điều khiển ô tô qua đường ngập nước, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        "tip": "Qua đường ngập nước: Ước lượng độ ngập, về số thấp, giữ đều ga, vững tay lái.",
        "answers": [
            {
                "id": 1,
                "text": "Tăng lên số cao, tăng ga và giảm ga liên tục để thay đổi tốc độ, giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đạp ly hợp (côn) hết hành trình, tăng ga và giảm ga liên tục để thay đổi tốc độ, giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Quan sát, ước lượng độ ngập nước mà xe ô tô có thể vượt qua an toàn, về số thấp, giữ đều ga và giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 225,
        "index": 225,
        "text": "Khi điều khiển xe ô tô tới gần xe chạy ngược chiều vào ban đêm, người lái xe cần thực hiện các thao tác nào để bảo đảm an toàn?",
        "tip": "Gặp xe ngược chiều ban đêm: Chuyển đèn xa về gần; không nhìn thẳng đèn xe đối diện, nhìn chếch phải.",
        "answers": [
            {
                "id": 1,
                "text": "Chuyển từ đèn chiếu xa sang đèn chiếu gần; không nhìn thẳng vào đèn của xe chạy ngược chiều mà nhìn chếch sang phía phải theo chiều chuyển động của xe mình.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Chuyển từ đèn chiếu gần sang đèn chiếu xa; không nhìn thẳng vào đèn của xe chạy ngược chiều mà nhìn chếch sang phía phải theo chiều chuyển động của xe mình.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Chuyển từ đèn chiếu xa sang đèn chiếu gần; nhìn thẳng vào đèn của xe chạy ngược chiều để tránh xe bảo đảm an toàn.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 226,
        "index": 226,
        "text": "Khi điều khiển xe ô tô trên đường trơn cần chú ý những điểm gì để bảo đảm an toàn?",
        "tip": "Lái xe đường trơn: Gài cầu (nếu có), đều ga, không lấy nhiều lái/đánh lái ngoặt/phanh gấp.",
        "answers": [
            {
                "id": 1,
                "text": "Giữ vững tay lái cho xe đi đúng vệt bánh xe đi trước, sử dụng số thấp đi chậm, giữ đều ga, đánh lái ngoặt và phanh gấp khi cần thiết.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giữ vững tay lái cho xe đi đúng vệt bánh xe đi trước, sử dụng số thấp đi chậm, gài cầu (nếu có), giữ đều ga, không lấy nhiều lái, không đánh lái ngoặt và phanh gấp.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "q235.png",
        "no": 227,
        "index": 227,
        "text": "Khi động cơ xe ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây là báo hiệu tình trạng gì của xe ô tô?",
        "tip": "BRAKE hiển thị thì đang sử dụng phanh đỗ xe (phanh tay).",
        "answers": [
            {
                "id": 1,
                "text": "Đang sử dụng phanh đỗ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Nhiệt độ nước làm mát quá mức cho phép.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cửa xe đang mở.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q236.png",
        "no": 228,
        "index": 228,
        "text": "Khi động cơ xe ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây là báo hiệu tình trạng gì của xe ô tô?",
        "tip": "Thấy cảnh báo giọt dầu là do áp suất dầu ở mức thấp.",
        "answers": [
            {
                "id": 1,
                "text": "Đang sử dụng phanh đỗ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Thiếu dầu phanh.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Nhiệt độ nước làm mát tăng quá mức cho phép.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Áp suất dầu ở mức thấp.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q237.png",
        "no": 229,
        "index": 229,
        "text": "Khi động cơ xe ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây là báo hiệu tình trạng gì của xe ô tô?",
        "tip": "Biểu tượng này báo Cửa xe đóng chưa chặt hoặc có cửa xe chưa đóng.",
        "answers": [
            {
                "id": 1,
                "text": "Cửa xe đóng chưa chặt hoặc có cửa xe chưa đóng.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Bộ nạp ắc quy gặp sự cố kỹ thuật.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dầu bôi trơn bị thiếu.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Ý 2 và ý 3.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q238.png",
        "no": 230,
        "index": 230,
        "text": "Khi động cơ xe ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây là báo hiệu tình trạng gì của xe ô tô?",
        "tip": "Biểu tượng này báo lái xe hoặc người ngồi ghế trước chưa cài dây an toàn.",
        "answers": [
            {
                "id": 1,
                "text": "Thiếu dầu phanh, phanh tay đang hãm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Hệ thống túi khí an toàn gặp sự cố.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Lái xe và người ngồi ghế trước chưa cài dây đai an toàn.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cửa đóng chưa chặt, có cửa chưa đóng.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q239.png",
        "no": 231,
        "index": 231,
        "text": "Khi động cơ xe ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây là báo hiệu tình trạng gì của xe ô tô?",
        "tip": "Biểu tượng này báo xe sắp xếp nhiên liệu.",
        "answers": [
            {
                "id": 1,
                "text": "Báo hiệu thiếu dầu phanh.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Áp suất lốp không đủ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Đang sử dụng phanh đỗ.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Sắp hết nhiên liệu.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 232,
        "index": 232,
        "text": "Trong các loại nhiên liệu dưới đây, loại nhiên liệu nào giảm thiểu ô nhiễm môi trường?",
        "tip": "Nhiên liệu giảm ô nhiễm: Xăng sinh học, khí sinh học.",
        "answers": [
            {
                "id": 1,
                "text": "Xăng và dầu diesel.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xăng sinh học và khí sinh học.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 114,
        "a2": 114,
        "b1": 124,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 233,
        "index": 233,
        "text": "Các biện pháp tiết kiệm nhiên liệu khi chạy xe?",
        "tip": "Tiết kiệm nhiên liệu: Bảo dưỡng định kỳ + Kiểm tra áp suất lốp, chạy tốc độ phù hợp.",
        "answers": [
            {
                "id": 1,
                "text": "Bảo dưỡng xe theo định kỳ và có kế hoạch lộ trình trước khi xe chạy.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Kiểm tra áp suất lốp theo quy định và chạy xe với tốc độ phù hợp với tình trạng mặt đường và mật độ giao thông trên đường.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 115,
        "a2": 115,
        "b1": 125,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 234,
        "index": 234,
        "text": "Khi đã đỗ xe ô tô sát lề đường bên phải, người lái xe phải thực hiện các thao tác nào dưới đây khi mở cửa xuống xe để đảm bảo an toàn?",
        "tip": "Mở cửa xe: Mở hé cửa, an toàn mới mở đủ để xuống.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát tình hình giao thông phía trước, phía sau và phía bên mở cửa xe, mở hé cánh cửa, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Mở cánh cửa và quan sát tình hình giao thông phía trước, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Mở cánh cửa hết hành trình và nhanh chóng ra khỏi xe ô tô.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 235,
        "index": 235,
        "text": "Khi điều khiển xe ô tô qua đường sắt không có rào chắn, không có người điều khiển giao thông, người lái xe phải xử lý như thế nào?",
        "tip": "Qua đường sắt không rào chắn: Giảm tốc + Nếu có tàu: dừng hẳn chờ tàu qua.",
        "answers": [
            {
                "id": 1,
                "text": "Giảm tốc độ, dừng lại trước vạch dừng, quan sát cả hai phía, nếu không có tàu đi tới, tăng ga nhẹ vượt qua đường sắt.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nếu thấy có tàu đi tới thì dừng lại trước vạch dừng, chỉ khi tàu đi qua mới được đi.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 236,
        "index": 236,
        "text": "Khi lái xe ô tô qua đường sắt không có rào chắn, không có người điều khiển giao thông, người lái xe thực hiện thao tác: 'giảm tốc độ, dừng lại trước vạch dừng, quan sát cả hai phía, nếu không có tàu đi tới, tăng ga nhẹ vượt qua đường sắt. Nếu thấy có tàu đi tới thì dừng lại trước vạch dừng, chỉ khi tàu đi qua mới được đi' để đảm bảo an toàn là đúng hay không?",
        "tip": "Qua đường sắt không rào chắn: dừng, quan sát, an toàn mới qua là ĐÚNG.",
        "answers": [
            {
                "id": 1,
                "text": "Không đúng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đúng.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Không cần thiết, vì nếu nhìn thấy tàu còn cách xa, người lái xe có thể tăng số cao, tăng ga để cho xe nhanh chóng vượt qua đường sắt.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 237,
        "index": 237,
        "text": "Khi điều khiển xe ô tô có hộp số tự động đi vào đường trơn trượt, lầy lội, người lái xe phải xử lý như thế nào để đảm bảo an toàn?",
        "tip": "Xe số tự động (đường trơn/lầy): Về số thấp, kết hợp phanh chân giảm tốc.",
        "answers": [
            {
                "id": 1,
                "text": "Về số thấp, kết hợp phanh chân để giảm tốc độ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Giữ nguyên tay số D, kết hợp phanh đỗ để giảm tốc độ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Về số N (số 0), kết hợp phanh chân để giảm tốc độ.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 238,
        "index": 238,
        "text": "Khi động cơ ô tô đã khởi động, muốn điều chỉnh ghế của người lái, người lái xe phải để cần số ở vị trí nào?",
        "tip": "Điều chỉnh ghế (động cơ đã nổ): Cần số ở N, P, hoặc số 0.",
        "answers": [
            {
                "id": 1,
                "text": "Vị trí N hoặc vị trí P hoặc số 0.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Vị trí D hoặc số 1.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Vị trí R.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 239,
        "index": 239,
        "text": "Khi điều khiển xe ô tô có hộp số tự động, người lái xe sử dụng chân như thế nào là đúng để bảo đảm an toàn?",
        "tip": "Lái xe số tự động: Không dùng chân trái, chân phải điều khiển phanh và ga.",
        "answers": [
            {
                "id": 1,
                "text": "Không sử dụng chân trái; chân phải điều khiển bàn đạp phanh và bàn đạp ga.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Chân trái điều khiển bàn đạp phanh, chân phải điều khiển bàn đạp ga.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không sử dụng chân phải; chân trái điều khiển bàn đạp phanh và bàn đạp ga.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 240,
        "index": 240,
        "text": "Khi tầm nhìn bị hạn chế bởi sương mù hoặc mưa to, người lái xe phải thực hiện các thao tác nào để bảo đảm an toàn?",
        "tip": "Sương mù/mưa to: Giảm tốc độ, giữ khoảng cách, bật đèn sương mù và đèn gần.",
        "answers": [
            {
                "id": 1,
                "text": "Tăng tốc độ, chạy gần xe trước, nhìn đèn hậu để định hướng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giảm tốc độ, chạy cách xa xe trước với khoảng cách an toàn, bật đèn sương mù và đèn chiếu gần.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Tăng tốc độ, bật đèn pha vượt qua xe chạy trước.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 116,
        "a2": 116,
        "b1": 126,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 241,
        "index": 241,
        "text": "Khi đèn pha của xe đi ngược chiều gây chói mắt, làm giảm khả năng quan sát trên đường, người lái xe xử lý như thế nào dưới đây để bảo đảm an toàn?",
        "tip": "Đèn pha xe ngược chiều chói mắt: Giảm tốc độ, vững tay lái, nhìn chếch lề phải.",
        "answers": [
            {
                "id": 1,
                "text": "Giảm tốc độ, giữ vững tay lái, nhìn chếch sang lề đường bên phải.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Bật đèn pha chiếu xa và giữ nguyên tốc độ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tăng tốc độ, bật đèn pha đối diện xe phía trước.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 117,
        "a2": 117,
        "b1": 127,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 242,
        "index": 242,
        "text": "Để đạt được hiệu quả phanh cao nhất, người lái xe mô tô phải sử dụng các kỹ năng như thế nào dưới đây?",
        "tip": "Phanh xe mô tô hiệu quả: Giảm hết ga, dùng đồng thời phanh sau và phanh trước.",
        "answers": [
            {
                "id": 1,
                "text": "Sử dụng phanh trước.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Sử dụng phanh sau.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Giảm hết ga, sử dụng đồng thời cả phanh sau và phanh trước.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 118,
        "a2": 118,
        "b1": 128,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 243,
        "index": 243,
        "text": "Khi lái xe ô tô trên mặt đường có nhiều 'ổ gà', người lái xe phải thực hiện thao tác như thế nào để bảo đảm an toàn?",
        "tip": "Đường nhiều ổ gà: Giảm tốc độ, về số thấp, giữ đều ga.",
        "answers": [
            {
                "id": 1,
                "text": "Giảm tốc độ, về số thấp và giữ đều ga.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Tăng tốc độ cho xe lướt qua nhanh.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tăng tốc độ, đánh lái liên tục để tránh 'ổ gà'.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 244,
        "index": 244,
        "text": "Khi điều khiển xe ô tô gặp mưa to hoặc sương mù, người lái xe phải làm gì để bảo đảm an toàn?",
        "tip": "Mưa to/sương mù: Bật đèn chiếu gần.",
        "answers": [
            {
                "id": 1,
                "text": "Bật đèn chiếu gần và đèn vàng (nếu có), điều khiển gạt nước, điều khiển ô tô đi với tốc độ chậm để có thể quan sát được; tìm chỗ an toàn dừng xe, bật đèn dừng khẩn cấp báo hiệu cho các xe khác biết.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Bật đèn chiếu xa và đèn vàng, điều khiển gạt nước, tăng tốc độ điều khiển ô tô qua khỏi khu vực mưa hoặc sương mù.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tăng tốc độ, bật đèn pha vượt qua xe chạy phía trước.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 245,
        "index": 245,
        "text": "Điều khiển xe ô tô trong trời mưa, người lái xe phải xử lý như thế nào để bảo đảm an toàn?",
        "tip": "Lái xe trời mưa: Giảm tốc, tăng quan sát, không phanh/ga/lái đột ngột, bật đèn gần, gạt nước.",
        "answers": [
            {
                "id": 1,
                "text": "Giảm tốc độ, tăng cường quan sát, không nên phanh gấp, không nên tăng ga hay đánh vô lăng đột ngột, bật đèn chiếu gần, mở chế độ gạt nước ở chế độ phù hợp để đảm bảo quan sát.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Phanh gấp khi xe đi vào vũng nước và tăng ga ngay sau khi ra khỏi vũng nước.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Bật đèn chiếu xa, tăng tốc độ điều khiển ô tô qua khỏi khu vực mưa.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 119,
        "a2": 119,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 246,
        "index": 246,
        "text": "Khi lùi xe, người lái xe phải xử lý như thế nào để bảo đảm an toàn giao thông?",
        "tip": "Lùi xe an toàn: Quan sát trái/phải/sau, có tín hiệu, lùi tốc độ phù hợp.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát bên trái, bên phải, phía sau xe, có tín hiệu cần thiết và lùi xe với tốc độ phù hợp.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Quan sát phía trước xe và lùi xe với tốc độ nhanh.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Quan sát bên trái và phía trước của xe và lùi xe với tốc độ nhanh.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 247,
        "index": 247,
        "text": "Điều khiển xe ô tô trong khu vực đông dân cư cần lưu ý điều gì dưới đây?",
        "tip": "Lái xe khu đông dân cư: Giảm tốc độ an toàn + Đi đúng làn.",
        "answers": [
            {
                "id": 1,
                "text": "Giảm tốc độ đến mức an toàn, quan sát, nhường đường cho người đi bộ, giữ khoảng cách an toàn với các xe phía trước.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đi đúng làn đường quy định, chỉ được chuyển làn đường ở nơi cho phép, nhưng phải quan sát.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 248,
        "index": 248,
        "text": "Khi điều khiển xe ô tô nhập vào đường cao tốc người lái xe cần thực hiện như thế nào dưới đây để bảo đảm an toàn giao thông?",
        "tip": "Nhập làn cao tốc: Quan sát, tín hiệu, nhường xe trên cao tốc.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát, phát tín hiệu, nhường đường cho các xe đang chạy trên đường cao tốc, khi đủ điều kiện an toàn thì tăng tốc độ cho xe nhập vào làn đường cao tốc, nếu có làn đường tăng tốc thì phải cho xe chạy trên làn đường đó trước khi cho xe nhập vào làn của đường cao tốc.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Phát tín hiệu, quan sát các xe đang chạy phía trước, nếu bảo đảm các điều kiện an toàn thì tăng tốc độ cho xe nhập ngay vào làn đường cao tốc.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phát tín hiệu và lái xe nhập vào làn đường tăng tốc, quan sát các xe phía sau đang chạy trên đường cao tốc, khi đủ điều kiện an toàn thì giảm tốc độ, từ từ cho xe nhập vào làn đường cao tốc.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 249,
        "index": 249,
        "text": "Khi điều khiển xe ô tô ra khỏi đường cao tốc người lái xe cần thực hiện như thế nào dưới đây để bảo đảm an toàn giao thông?",
        "tip": "Ra khỏi cao tốc: Tìm biển lối ra, quan sát sau/phải, an toàn thì tín hiệu, chuyển dần sang phải; KHÔNG lùi xe.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát phía trước để tìm biển báo chỉ dẫn 'lối ra đường cao tốc', kiểm tra tình trạng giao thông phía sau và bên phải, nếu bảo đảm điều kiện an toàn thì phát tín hiệu và điều khiển xe chuyển dần sang làn bên phải, nếu có làn đường giảm tốc thì phải cho xe di chuyển trên làn đường đó trước khi ra khỏi đường cao tốc.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Quan sát phía trước để tìm biển báo chỉ dẫn 'lối ra đường cao tốc', trường hợp vượt qua 'lối ra đường cao tốc' thì phát tín hiệu, di chuyển sang làn đường giảm tốc và lùi xe quay trở lại.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 250,
        "index": 250,
        "text": "Người lái xe được dừng xe, đỗ xe trên làn dừng khẩn cấp của đường cao tốc trong trường hợp nào dưới đây?",
        "tip": "Dừng/đỗ làn khẩn cấp cao tốc: Chỉ khi xe sự cố, tai nạn, khẩn cấp không đi được.",
        "answers": [
            {
                "id": 1,
                "text": "Xe gặp sự cố, tai nạn hoặc trường hợp khẩn cấp không thể di chuyển bình thường.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Để nghỉ ngơi, đi vệ sinh, chụp ảnh, làm việc riêng...",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 251,
        "index": 251,
        "text": "Trên đường đôi muốn vượt xe kéo rơ moóc phía trước, người lái xe phải xử lý như thế nào?",
        "tip": "Vượt xe kéo rơ moóc (đường đôi): Giữ khoảng cách + Chờ tín hiệu cho vượt + Vượt qua thì về lại làn và tắt xi nhan.",
        "answers": [
            {
                "id": 1,
                "text": "Giữ khoảng cách an toàn, tránh đi vào vị trí điểm mù của xe kéo rơ moóc, bật xi nhan trái đồng thời kết hợp đèn, còi xin vượt.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Khi xe kéo rơ moóc đã có tín hiệu cho vượt (không có chướng ngại vật phía trước và xe đi ngược chiều), thấy đủ điều kiện an toàn thì vượt dứt khoát, không di chuyển song song bên cạnh xe kéo rơ moóc.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Khi vượt qua, phải quan sát gương chiếu hậu bên phải nếu có khoảng trống an toàn mới được cho xe chạy vào làn của mình, tắt xi nhan và tiếp tục hành trình.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 252,
        "index": 252,
        "text": "Khi điều khiển xe ô tô xuống đường dốc dài, độ dốc cao, người lái xe số tự động cần thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
        "tip": "Xuống dốc dài (số tự động): Nhả ga, về số thấp, phanh chân phù hợp.",
        "answers": [
            {
                "id": 1,
                "text": "Nhả bàn đạp ga, về số thấp, đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Nhả bàn đạp ga, về số N đạp phanh chân và kéo phanh tay để giảm tốc độ.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 253,
        "index": 253,
        "text": "Khi đi từ đường nhánh ra đường chính, người lái xe phải xử lý như thế nào là đúng?",
        "tip": "Từ đường nhánh ra đường chính: Quan sát, giảm tốc, tín hiệu, nhường xe đường chính.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát, giảm tốc độ, phát tín hiệu, nhường đường cho xe trên đường chính từ bất kỳ hướng nào tới.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Nháy đèn, bấm còi để xe đi trên đường chính biết và tăng tốc độ cho xe đi ra đường chính.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Quan sát xe đang đi trên đường chính, nếu là xe có kích thước lớn hơn thì nhường đường, xe có kích thước nhỏ hơn thì tăng tốc độ cho xe đi ra đường chính.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 254,
        "index": 254,
        "text": "Khi đang lái xe mô tô hoặc ô tô, nếu có nhu cầu sử dụng điện thoại để nhắn tin hoặc gọi điện, người lái xe phải thực hiện như thế nào trong các tình huống nêu dưới đây?",
        "tip": "Muốn dùng điện thoại khi lái xe: Giảm tốc độ, dừng xe nơi cho phép rồi mới dùng.",
        "answers": [
            {
                "id": 1,
                "text": "Giảm tốc độ để bảo đảm an toàn với xe phía trước và sử dụng điện thoại để liên lạc.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giảm tốc độ để dừng xe ở nơi cho phép sau đó sử dụng điện thoại để liên lạc.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Tăng tốc độ để cách xa xe phía sau và sử dụng điện thoại để liên lạc.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 129,
        "required1": 0,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 255,
        "index": 255,
        "text": "Những thói quen nào dưới đây khi điều khiển xe mô tô tay ga tham gia giao thông dễ gây tai nạn nguy hiểm?",
        "tip": "Thói quen nguy hiểm (xe tay ga): Chỉ dùng phanh trước.",
        "answers": [
            {
                "id": 1,
                "text": "Sử dụng còi.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Phanh đồng thời cả phanh trước và phanh sau.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Chỉ sử dụng phanh trước.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 120,
        "a2": 120,
        "b1": 130,
        "required1": 0,
        "required2": 1,
        "required3": 1
    },
    {
        "image": "",
        "no": 256,
        "index": 256,
        "text": "Người ngồi trên xe ô tô cần thực hiện những thao tác mở cửa như thế nào dưới đây để xuống xe để bảo đảm an toàn?",
        "tip": "Mở cửa ô tô xuống xe: Quan sát, an toàn thì mở hé, rồi mở đủ.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát phía trước, phía sau và bên phía mở cửa để phát hiện các phương tiện đang di chuyển tới gần, khi đủ điều kiện an toàn, mở hé cửa, sau đó mở ở mức cần thiết để xuống xe.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Quan sát tình hình giao thông phía trước, không cần quan sát phía sau và bên mở cửa; mở cánh cửa hết hành trình và nhanh chóng ra khỏi xe ô tô.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 257,
        "index": 257,
        "text": "Khi điều khiển xe mô tô quay đầu, người lái xe cần thực hiện như thế nào để bảo đảm an toàn?",
        "tip": "Xe mô tô quay đầu: Tín hiệu trước, giảm tốc + Chỉ nơi cho phép + Quan sát, nhường đường.",
        "answers": [
            {
                "id": 1,
                "text": "Bật tín hiệu báo rẽ trước khi quay đầu, từ từ giảm tốc độ đến mức có thể dừng lại.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chỉ quay đầu xe tại những nơi được phép quay đầu.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Quan sát an toàn các phương tiện tới từ phía trước, phía sau, hai bên đồng thời nhường đường cho xe từ bên phải và phía trước đi tới.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 121,
        "a2": 121,
        "b1": 131,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 258,
        "index": 258,
        "text": "Tay ga trên xe mô tô hai bánh có tác dụng gì dưới đây?",
        "tip": "Tay ga xe mô tô: Điều khiển xe chạy về trước + Điều khiển tốc độ.",
        "answers": [
            {
                "id": 1,
                "text": "Để điều khiển xe chạy về phía trước.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Để điều tiết công suất động cơ qua đó điều khiển tốc độ của xe.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Để điều khiển xe chạy lùi.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 122,
        "a2": 122,
        "b1": 132,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 259,
        "index": 259,
        "text": "Gương chiếu hậu của xe mô tô hai bánh có tác dụng gì dưới đây?",
        "tip": "Gương chiếu hậu xe mô tô: Quan sát an toàn sau trái, phải trước khi chuyển hướng.",
        "answers": [
            {
                "id": 1,
                "text": "Để quan sát an toàn phía bên trái khi chuẩn bị rẽ trái.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Để quan sát an toàn phía bên phải khi chuẩn bị rẽ phải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Để quan sát an toàn phía sau của bên trái và bên phải trước khi chuyển hướng.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Để quan sát an toàn phía trước cả bên trái và bên phải trước khi chuyển hướng.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 123,
        "a2": 123,
        "b1": 133,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 260,
        "index": 260,
        "text": "Để bảo đảm an toàn khi tham gia giao thông, người lái xe mô tô hai bánh cần điều khiển tay ga như thế nào?",
        "tip": "Điều khiển tay ga mô tô an toàn: Tăng từ từ, giảm nhanh.",
        "answers": [
            {
                "id": 1,
                "text": "Tăng ga thật mạnh, giảm ga từ từ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Tăng ga thật mạnh, giảm ga thật nhanh.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tăng ga từ từ, giảm ga thật nhanh.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Tăng ga từ từ, giảm ga từ từ.",
                "correct": false
            }
        ],
        "topic": 3,
        "a1": 124,
        "a2": 124,
        "b1": 134,
        "required1": 0,
        "required2": 0,
        "required3": 1
    },
    {
        "image": "",
        "no": 261,
        "index": 261,
        "text": "Để tránh đổ, ngã khi điều khiển xe mô tô hai bánh ở nơi đường xấu, nhỏ và hẹp, người lái xe cần xử lý như thế nào?",
        "tip": "Tránh ngã xe máy (đường xấu/hẹp): Tốc độ thấp + Không nên dùng phanh trước + Không lắc người.",
        "answers": [
            {
                "id": 1,
                "text": "Đi ở tốc độ thấp, quan sát liên tục khoảng cách từ 05 m đến 10 m phía trước để điều chỉnh sớm hướng di chuyển.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Trong quá trình di chuyển không nên dùng phanh trước tránh làm khóa bánh dẫn hướng.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không được lắc người sang trái hoặc phải nhiều, trọng tâm cơ thể cần trùng với trọng tâm của xe.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 125,
        "a2": 125,
        "b1": 135,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 262,
        "index": 262,
        "text": "Khi lái xe ô tô điện xuống dốc dài, đổ đèo, người lái xe cần chú ý những vấn đề gì để bảo đảm an toàn?",
        "tip": "Lái ô tô điện xuống dốc dài/đèo: Kiểm tra hệ thống an toàn/pin + Nhả ga + Rà phanh chân.",
        "answers": [
            {
                "id": 1,
                "text": "Kiểm tra hệ thống an toàn, pin của xe trước khi xuất phát.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nhả chân ga để phanh tái sinh hoạt động.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Rà phanh chân để kịp thời xử lý tình huống khẩn cấp.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 263,
        "index": 263,
        "text": "Khi lái xe ô tô điện qua khu vực ngập nước, người lái xe cần phải chú ý những vấn đề gì?",
        "tip": "Ô tô điện qua ngập nước: Biết khả năng chìm của xe + Vững lái, đều ga + Chạy chậm.",
        "answers": [
            {
                "id": 1,
                "text": "Người lái xe phải tìm hiểu khả năng chìm trong nước của xe để xác định cung đường di chuyển.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giữ vững tay lái, đi đều ga, tránh không để xe chết máy giữa dòng, không nên dừng xe trên đường ngập nước.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Lái xe tốc độ chậm, không tạo sóng và giữ khoảng cách an toàn với các phương tiện xung quanh, nhất là người đi bộ.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba ý trên.",
                "correct": true
            }
        ],
        "topic": 3,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 264,
        "index": 264,
        "text": "Phương pháp kiểm tra mức dầu bôi trơn động cơ nào dưới đây là đúng?",
        "tip": "Kiểm tra dầu bôi trơn: Rút que, lau sạch.",
        "answers": [
            {
                "id": 1,
                "text": "Kiểm tra que thăm dầu trên các-te. Quan sát vệt dầu trên que thăm, mức dầu này phải nằm ở mức tối đa được thể hiện trên que thăm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Rút que thăm dầu trên các-te. Quan sát vệt dầu trên que thăm, mức dầu này phải nằm ở mức tối thiểu được thể hiện trên que thăm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Rút que thăm dầu trên các-te, lau sạch que thăm sau đó cắm vào các-te và rút ra quan sát vệt dầu trên que thăm, mức dầu phải nằm trong khoảng vạch mức tối thiểu và tối đa được thể hiện trên que thăm.",
                "correct": true
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 265,
        "index": 265,
        "text": "Xe ô tô tham gia giao thông đường bộ phải bảo đảm các quy định về chất lượng, an toàn kỹ thuật và bảo vệ môi trường nào dưới đây?",
        "tip": "Xe ô tô tham gia giao thông: Kính chắn gió + Đủ đèn chiếu sáng gần xa.",
        "answers": [
            {
                "id": 1,
                "text": "Kính chắn gió, kính cửa phải là loại kính an toàn, bảo đảm tầm nhìn cho người điều khiển; có đủ hệ thống hãm và hệ thống chuyển hướng có hiệu lực, tay lái xe ô tô ở bên trái của xe, có còi với âm lượng đúng quy chuẩn kỹ thuật.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Có đủ đèn chiếu sáng gần và xa, đèn soi biển số, đèn báo hãm, đèn tín hiệu; có đủ bộ phận giảm thanh, giảm khói, các kết cấu phải đủ độ bền và bảo đảm tính năng vận hành ổn định.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 266,
        "index": 266,
        "text": "Xe mô tô và xe ô tô tham gia giao thông trên đường bộ có bắt buộc phải đủ bộ phận giảm thanh không?",
        "tip": "Bộ phận giảm thanh: Bắt buộc.",
        "answers": [
            {
                "id": 1,
                "text": "Không bắt buộc.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Bắt buộc.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Tùy từng trường hợp.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 136,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 267,
        "index": 267,
        "text": "Xe ô tô tham gia giao thông trên đường bộ phải có đủ các loại đèn nào dưới đây?",
        "tip": "Đèn bắt buộc trên ô tô: Chiếu sáng gần xa + Soi biển số.",
        "answers": [
            {
                "id": 1,
                "text": "Đèn chiếu sáng gần và xa.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đèn soi biển số, đèn báo hãm và đèn tín hiệu.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dàn đèn pha trên nóc xe.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 268,
        "index": 268,
        "text": "Kính chắn gió của xe ô tô phải bảo đảm yêu cầu nào dưới đây?",
        "tip": "Kính chắn gió ô tô: Kính an toàn.",
        "answers": [
            {
                "id": 1,
                "text": "Là loại kính an toàn, kính nhiều lớp, đúng quy cách, không rạn nứt, bảo đảm hình ảnh quan sát rõ ràng, không bị méo mó.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Là loại kính trong suốt, không rạn nứt, bảo đảm tầm nhìn cho người điều khiển về phía trước mặt và hai bên.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 269,
        "index": 269,
        "text": "Bánh xe, lốp lắp cho xe ô tô phải bảo đảm an toàn kỹ thuật như thế nào dưới đây?",
        "tip": "Bánh xe/lốp ô tô: Bánh xe chắc chắn + Lốp đủ số lượng/áp suất.",
        "answers": [
            {
                "id": 1,
                "text": "Bánh xe phải có kết cấu chắc chắn, lắp đặt đúng quy cách của nhà sản xuất.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Lốp phải đủ số lượng, đủ áp suất, không phồng rộp, đúng cỡ lốp của nhà sản xuất hoặc tài liệu kỹ thuật quy định; lốp trên cùng một trục của xe sử dụng trong điều kiện hoạt động bình thường phải cùng kiểu loại.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 270,
        "index": 270,
        "text": "Hệ thống lái trên xe ô tô phải bảo đảm yêu cầu nào dưới đây?",
        "tip": "Hệ thống lái ô tô: Chuyển hướng chính xác + Cơ cấu không va chạm, quay vô lăng 2 bên lực không khác biệt nhiều.",
        "answers": [
            {
                "id": 1,
                "text": "Bảo đảm cho xe chuyển hướng chính xác, điều khiển nhẹ nhàng, an toàn ở mọi vận tốc và tải trọng trong phạm vi tính năng kỹ thuật cho phép của xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Khi hoạt động các cơ cấu chuyển động của hệ thống lái không được va chạm với bất kỳ bộ phận nào của xe; khi quay vô lăng lái về bên phải và bên trái thì không được có sự khác biệt đáng kể về lực tác động lên vành tay lái.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 271,
        "index": 271,
        "text": "Mục đích của bảo dưỡng thường xuyên đối với xe ô tô có tác dụng gì dưới đây?",
        "tip": "Bảo dưỡng thường xuyên ô tô: Giữ tính năng kỹ thuật tốt + Ngăn ngừa/phát hiện hư hỏng, giữ hình thức.",
        "answers": [
            {
                "id": 1,
                "text": "Bảo dưỡng ô tô thường xuyên làm cho ô tô luôn luôn có tính năng kỹ thuật tốt, giảm cường độ hao mòn của các chi tiết, kéo dài tuổi thọ của xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Ngăn ngừa và phát hiện kịp thời các hư hỏng và sai lệch kỹ thuật để khắc phục, giữ gìn được hình thức bên ngoài.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 272,
        "index": 272,
        "text": "Trong các nguyên nhân nêu dưới đây, nguyên nhân nào làm động cơ diesel không nổ?",
        "tip": "Động cơ diesel không nổ: có tạp chất.",
        "answers": [
            {
                "id": 1,
                "text": "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, tạp chất.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, không có tia lửa điện.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí và nước, không có tia lửa điện.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 273,
        "index": 273,
        "text": "Ống xả lắp trên xe ô tô phải bảo đảm yêu cầu an toàn kỹ thuật nào dưới đây?",
        "tip": "Ống xả ô tô: Không gây cháy + Miệng thoát không hướng trước/phải.",
        "answers": [
            {
                "id": 1,
                "text": "Ống xả không được đặt ở vị trí có thể gây cháy xe hoặc ảnh hưởng đến người ngồi trên xe và gây cản trở hoạt động của hệ thống khác.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Miệng thoát khí thải của ống xả không được hướng về phía trước và không được hướng về bên phải theo chiều tiến của xe.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 274,
        "index": 274,
        "text": "Dây đai an toàn lắp trên xe ô tô phải bảo đảm yêu cầu an toàn kỹ thuật nào dưới đây?",
        "tip": "Dây đai an toàn: cơ cấu hãm giữ chặt khi giật.",
        "answers": [
            {
                "id": 1,
                "text": "Đủ số lượng, lắp đặt chắc chắn không bị rách, đứt, khóa cài đóng, mở nhẹ nhàng, không tự mở, không bị kẹt; kéo ra thu vào dễ dàng, cơ cấu hãm giữ chặt dây khi giật dây đột ngột.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Đủ số lượng, lắp đặt chắc chắn không bị rách, đứt, khóa cài đóng, mở nhẹ nhàng, không tự mở, không bị kẹt; kéo ra thu vào dễ dàng, cơ cấu hãm mở ra khi giật dây đột ngột.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 275,
        "index": 275,
        "text": "Thế nào là động cơ 4 kỳ?",
        "tip": "Động cơ 4 kỳ: Pít tông 4 hành trình / 1 lần sinh công.",
        "answers": [
            {
                "id": 1,
                "text": "Là loại động cơ: để hoàn thành một chu trình công tác của động cơ, pít tông thực hiện 2 (hai) hành trình, trong đó có một lần sinh công.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Là loại động cơ: để hoàn thành một chu trình công tác của động cơ, pít tông thực hiện 4 (bốn) hành trình, trong đó có một lần sinh công.",
                "correct": true
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 276,
        "index": 276,
        "text": "Công dụng của hệ thống bôi trơn đối với động cơ ô tô?",
        "tip": "Hệ thống bôi trơn: Giảm ma sát/mài mòn, làm kín/sạch/mát, chống gỉ.",
        "answers": [
            {
                "id": 1,
                "text": "Cung cấp một lượng dầu bôi trơn đủ và sạch dưới áp suất nhất định đi bôi trơn cho các chi tiết của động cơ để giảm ma sát, giảm mài mòn, làm kín, làm sạch, làm mát và chống gỉ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Cung cấp một lượng nhiên liệu đầy đủ và sạch để cho động cơ ô tô hoạt động.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 277,
        "index": 277,
        "text": "Niên hạn sử dụng của xe ô tô tải (tính bắt đầu từ năm sản xuất) không quá bao nhiêu năm?",
        "tip": "Niên hạn xe tải: Không quá 25 năm.",
        "answers": [
            {
                "id": 1,
                "text": "15 năm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "20 năm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "25 năm.",
                "correct": true
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 278,
        "index": 278,
        "text": "Niên hạn sử dụng của xe ô tô chở người trên 8 chỗ ngồi (không kể chỗ của người lái xe) tính bắt đầu từ năm sản xuất không quá bao nhiêu năm?",
        "tip": "Niên hạn xe khách (>8 chỗ): Không quá 20 năm.",
        "answers": [
            {
                "id": 1,
                "text": "5 năm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "20 năm.",
                "correct": true
            },
            {
                "id": 3,
                "text": "25 năm.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 279,
        "index": 279,
        "text": "Hãy nêu công dụng của động cơ xe ô tô?",
        "tip": "Động cơ ô tô: Biến nhiệt năng thành cơ năng.",
        "answers": [
            {
                "id": 1,
                "text": "Khi làm việc, nhiệt năng được biến đổi thành cơ năng làm trục khủy động cơ quay, truyền lực đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho xe ô tô.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Khi làm việc, cơ năng được biến đổi thành nhiệt năng và truyền đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho xe ô tô.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 280,
        "index": 280,
        "text": "Hãy nêu công dụng hệ thống truyền lực của xe ô tô?",
        "tip": "Hệ thống truyền lực: Truyền mô men quay từ động cơ đến bánh xe chủ động.",
        "answers": [
            {
                "id": 1,
                "text": "Dùng để truyền mô men quay từ động cơ tới các bánh xe chủ động của xe ô tô.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dùng để làm giảm tốc độ, dừng chuyển động của xe ô tô.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 281,
        "index": 281,
        "text": "Hãy nêu công dụng ly hợp (côn) của xe ô tô?",
        "tip": "Ly hợp (côn): Truyền hoặc ngắt truyền động từ động cơ đến hộp số.",
        "answers": [
            {
                "id": 1,
                "text": "Dùng để truyền mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình xe ô tô chuyển động.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Dùng để truyền hoặc ngắt truyền động từ động cơ đến hộp số của xe ô tô.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Dùng để truyền truyền động từ hộp số đến bánh xe chủ động của ô tô.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 282,
        "index": 282,
        "text": "Hãy nêu công dụng hộp số của xe ô tô?",
        "tip": "Hộp số ô tô: Giúp xe lùi.",
        "answers": [
            {
                "id": 1,
                "text": "Truyền và tăng mô men xoắn giữa các trục vuông góc nhau, bảo đảm cho các bánh xe chủ động quay với tốc độ khác nhau khi sức cản chuyển động ở bánh xe hai bên không bằng nhau.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Truyền và thay đổi mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình ô tô chuyển động, chuyển số êm dịu, dễ điều khiển.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Truyền và thay đổi mô men từ động cơ đến bánh xe chủ động, cắt truyền động từ động cơ đến bánh xe chủ động, bảo đảm cho xe ô tô chuyển động lùi.",
                "correct": true
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 283,
        "index": 283,
        "text": "Hãy nêu công dụng hệ thống lái của xe ô tô?",
        "tip": "Hệ thống lái: Thay đổi hướng chuyển động hoặc giữ xe ổn định.",
        "answers": [
            {
                "id": 1,
                "text": "Dùng để thay đổi mô men từ động cơ tới các bánh xe chủ động khi xe ô tô chuyển động theo hướng xác định.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Dùng để thay đổi mô men giữa các trục vuông góc nhau khi xe ô tô chuyển động theo hướng xác định.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định.",
                "correct": true
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 284,
        "index": 284,
        "text": "Hãy nêu công dụng hệ thống phanh của xe ô tô?",
        "tip": "Hệ thống phanh: Giảm tốc độ, dừng xe, giữ xe đứng yên trên dốc.",
        "answers": [
            {
                "id": 1,
                "text": "Dùng để giảm tốc độ, dừng chuyển động của xe ô tô và giữ cho xe ô tô đứng yên trên dốc.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dùng để truyền hoặc ngắt truyền động từ động cơ đến bánh xe chủ động của xe ô tô.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 285,
        "index": 285,
        "text": "Đèn phanh trên xe mô tô có tác dụng gì dưới đây?",
        "tip": "Đèn phanh mô tô: Cảnh báo xe sau (đang giảm tốc) + Định vị ban đêm.",
        "answers": [
            {
                "id": 1,
                "text": "Có tác dụng cảnh báo cho các xe phía sau biết xe đang giảm tốc để chủ động tránh hoặc giảm tốc để tránh va chạm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Có tác dụng định vị vào ban đêm với các xe từ phía sau tới để tránh va chạm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai ý trên.",
                "correct": true
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 137,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q292.png",
        "no": 286,
        "index": 286,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "Biểu tượng này báo nhiệt độ nước làm mát động cơ quá ngưỡng cho phép.",
        "answers": [
            {
                "id": 1,
                "text": "Nhiệt độ nước làm mát động cơ quá ngưỡng cho phép.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Áp suất lốp không đủ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Đang hãm phanh tay.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cần kiểm tra động cơ.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q293.png",
        "no": 287,
        "index": 287,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "Biểu tượng này báo cần kiểm tra động cơ.",
        "answers": [
            {
                "id": 1,
                "text": "Báo hiệu hệ thống chống bó cứng khi phanh bị lỗi.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Áp suất lốp không đủ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Đang hãm phanh tay.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cần kiểm tra động cơ.",
                "correct": true
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q294.png",
        "no": 288,
        "index": 288,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "Biểu tượng này báo áp suất lốp không đủ.",
        "answers": [
            {
                "id": 1,
                "text": "Báo hiệu thiếu dầu phanh.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Áp suất lốp không đủ.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Đang hãm phanh tay.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Sắp hết nhiên liệu.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q295.png",
        "no": 289,
        "index": 289,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "Biểu tượng này báo hệ thống chống bó cứng phanh bị lỗi.",
        "answers": [
            {
                "id": 1,
                "text": "Báo hiệu hệ thống chống bó cứng phanh bị lỗi.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Áp suất lốp không đủ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Đang hãm phanh tay.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Sắp hết nhiên liệu.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q296.png",
        "no": 290,
        "index": 290,
        "text": "Khi khởi động xe ô tô số tự động có trang bị chìa khóa thông minh có cần đạp hết hành trình bàn đạp chân phanh hay không?",
        "tip": "Để khởi động xe, bạn phải đạp hết hành trình bàn đạp chân phanh.",
        "answers": [
            {
                "id": 1,
                "text": "Phải đạp hết hành trình bàn đạp chân phanh.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Không cần đạp phanh.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tùy từng trường hợp.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 291,
        "index": 291,
        "text": "Ắc quy được trang bị trên xe ô tô có tác dụng gì dưới đây?",
        "tip": "Để tích trữ điện năng cung cấp cho các phụ tải khi máy phát chưa làm việc.",
        "answers": [
            {
                "id": 1,
                "text": "Giúp người lái xe kịp thời tạo xung lực tối đa lên hệ thống phanh trong khoảnh khắc đầu tiên của tình huống khẩn cấp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Hỗ trợ người lái xe khởi hành ngang dốc.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Để tích trữ điện năng, cung cấp cho các phụ tải khi máy phát chưa làm việc.",
                "correct": true
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 292,
        "index": 292,
        "text": "Máy phát điện được trang bị trên xe ô tô có tác dụng gì dưới đây?",
        "tip": "Để phát điện năng cung cấp cho các phụ tải làm việc và nạp điện cho ắc quy.",
        "answers": [
            {
                "id": 1,
                "text": "Để phát điện năng cung cấp cho các phụ tải làm việc và nạp điện cho ắc quy.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Hỗ trợ người lái xe khởi hành ngang dốc.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Để tích trữ điện năng và cung cấp điện cho các phụ tải làm việc.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 293,
        "index": 293,
        "text": "Dây đai an toàn được trang bị trên xe ô tô có tác dụng gì dưới đây?",
        "tip": "Dây đai giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại.",
        "answers": [
            {
                "id": 1,
                "text": "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại.",
                "correct": true
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "",
        "no": 294,
        "index": 294,
        "text": "Túi khí được trang bị trên xe ô tô có tác dụng gì dưới đây?",
        "tip": "Túi khí giúp giảm khả năng va đập và hấp thụ một phần lực va đập.",
        "answers": [
            {
                "id": 1,
                "text": "Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giảm khả năng va đập của một số bộ phận cơ thể quan trọng với các vật thể trong xe.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Hấp thụ một phần lực va đập lên người lái và hành khách.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Ý 2 và ý 3.",
                "correct": true
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q301.png",
        "no": 295,
        "index": 295,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây không tắt trong thời gian dài, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "Biểu tượng này báo hệ thống lái đang gặp sự cố.",
        "answers": [
            {
                "id": 1,
                "text": "Nhiệt độ nước làm mát động cơ quá ngưỡng cho phép.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Áp suất lốp không đủ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Đang hãm phanh tay.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Hệ thống lái gặp sự cố.",
                "correct": true
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q302.png",
        "no": 296,
        "index": 296,
        "text": "Trên xe ô tô có trang bị thiết bị như hình vẽ dưới đây có tác dụng gì?",
        "tip": "Thiết bị hình kích nâng: Dùng để kích (nâng) xe ô tô.",
        "answers": [
            {
                "id": 1,
                "text": "Dùng để kích (hay nâng) xe ô tô.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Vặn ốc lắp bánh xe.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q303.png",
        "no": 297,
        "index": 297,
        "text": "Trên xe ô tô có trang bị thiết bị như hình vẽ dưới đây, dùng để làm gì?",
        "tip": "Thiết bị hình chữ T: Dùng để phá cửa kính xe khi khẩn cấp.",
        "answers": [
            {
                "id": 1,
                "text": "Thay lốp xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chữa cháy.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phá cửa kính xe ô tô trong các trường hợp khẩn cấp.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Vặn ốc để tháo lắp bánh xe.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q304.png",
        "no": 298,
        "index": 298,
        "text": "Trên xe ô tô có trang bị thiết bị như hình vẽ dưới đây, dùng để làm gì?",
        "tip": "Thiết bị hình bình chữa cháy: Dùng để chữa cháy.",
        "answers": [
            {
                "id": 1,
                "text": "Thay lốp xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chữa cháy trong các trường hợp hỏa hoạn.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cầm máu cho người bị nạn.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q299.png",
        "no": 299,
        "index": 299,
        "text": "Nút bấm biểu tượng như hình vẽ trên xe ô tô có ý nghĩa như thế nào?",
        "tip": "Biểu tượng 2 hình tam giác: Báo hiệu xe đang tình huống nguy hiểm.",
        "answers": [
            {
                "id": 1,
                "text": "Báo hiệu xin đường cho xe đi thẳng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Báo hiệu hệ thống phanh bị lỗi.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Báo hiệu xe đang ở tình huống nguy hiểm.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Báo hiệu đến thời gian cần bảo dưỡng.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q300.png",
        "no": 300,
        "index": 300,
        "text": "Khi động cơ đã hoạt động, bảng đồng hồ xuất hiện biểu tượng hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe?",
        "tip": "Biểu tượng ECO: Chế độ lái tiết kiệm.",
        "answers": [
            {
                "id": 1,
                "text": "Báo hiệu hệ thống túi khí đã bật.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Báo hiệu đèn chiếu sáng xa đã bật.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Báo hiệu chế độ lái tiết kiệm nhiên liệu đã bật.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Báo hiệu đèn cảnh báo khoảng cách đã bật.",
                "correct": false
            }
        ],
        "topic": 4,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q305.png",
        "no": 301,
        "index": 301,
        "text": "Biển nào cấm các loại xe cơ giới đi vào, trừ xe máy hai bánh, xe gắn máy và các loại xe ưu tiên theo quy định?",
        "tip": "Biển 2: P.103a 'Cấm xe ô tô'; Biển 2: P.107a 'Cấm xe ô tô khách'; Biển 3: P.108 'Cấm xe kéo rơ-moóc'.<br/>Biển 2 và Biển 3 không cấm ô tô con nên chỉ có Biển 1 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 1 và biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q305.png",
        "no": 302,
        "index": 302,
        "text": "Biển nào cấm xe ô tô tải?",
        "tip": "Biển 2: P.103a 'Cấm xe ô tô'; Biển 2: P.107a 'Cấm xe ô tô khách'; Biển 3: P.108 'Cấm xe kéo rơ-moóc'.<br/>Biển 3 không cấm ô tô tải nên Biển 1 và Biển 2 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Cả ba biển.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2 và biển 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 1 và biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 1 và biển 2.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q307.png",
        "no": 303,
        "index": 303,
        "text": "Biển nào cấm máy kéo?",
        "tip": "Biển 1: P.104 'Cấm mô tô'; Biển 2: P.106 'Cấm xe ôtô tải' sẽ cấm cả máy kéo và các xe máy chuyên dùng; Biển 3: P.109 'Cấm máy kéo' nên Biển 2 và Biển 3 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2 và biển 3.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 1 và biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 126,
        "a2": 126,
        "b1": 138,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q308.png",
        "no": 304,
        "index": 304,
        "text": "Biển nào báo hiệu cấm xe mô tô ba bánh chở hàng đi qua?",
        "tip": "Biển 1: P.104 'Cấm mô tô' thì cấm cả mô tô 3 bánh; Biển 2: P.103a 'Cấm ô tô' cấm ô tô và và cả phương tiện 3 bánh đi vào.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và biển 2.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 127,
        "a2": 127,
        "b1": 139,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q309.png",
        "no": 305,
        "index": 305,
        "text": "Biển nào dưới đây xe gắn máy được phép đi vào?",
        "tip": "Biển 104 'Cấm mô tô' và biển 103a 'Cấm ô tô' không cấm xe gắn máy (không phải mô tô). Nên cả 2 biển đều cho phép xe gắn máy đi vào.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 128,
        "a2": 128,
        "b1": 140,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q308.png",
        "no": 306,
        "index": 306,
        "text": "Biển nào báo hiệu cấm xe mô tô đi vào?",
        "tip": "Biển 1: P.104 'Cấm xe máy' cấm xe mô tô đi vào.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 129,
        "a2": 129,
        "b1": 141,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q308.png",
        "no": 307,
        "index": 307,
        "text": "Khi gặp biển nào thì xe mô tô hai bánh được đi vào?",
        "tip": "Biển 1: P.104 'Cấm xe máy' thì xe mô tô hai bánh không được đi vào.",
        "answers": [
            {
                "id": 1,
                "text": "Không biển nào.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và biển 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 130,
        "a2": 130,
        "b1": 142,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q312.png",
        "no": 308,
        "index": 308,
        "text": "Biển nào cho phép xe ô tô con được vượt?",
        "tip": "Biển 1: DP.133 'Hết cấm vượt'; Biển 2: P.125 'Cấm vượt'; Biển 3: P.126 'Cấm ô tô tải vượt'. Chỉ có biển 2 cấm ô tô con vượt nên là đáp án đúng Biển 1 và biển 3.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và biển 2.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 1 và biển 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Biển 2 và biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q312.png",
        "no": 309,
        "index": 309,
        "text": "Biển nào không cho phép xe ô tô con vượt?",
        "tip": "Biển 1: DP.133 'Hết cấm vượt'; Biển 2: P.125 'Cấm vượt'; Biển 3: P.126 'Cấm ô tô tải vượt'. Biển 2 cấm ô tô con vượt nên là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q312.png",
        "no": 310,
        "index": 310,
        "text": "Biển nào cấm xe ô tô tải vượt?",
        "tip": "Biển 1: DP.133 'Hết cấm vượt'; Biển 2: P.125 'Cấm vượt'; Biển 3: P.126 'Cấm ô tô tải vượt'. Biển 2 áp dụng với xe tải nên đáp án đúng là Biển 2 và Biển 3.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 1 và biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 2 và biển 3.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q315.png",
        "no": 311,
        "index": 311,
        "text": "Biển nào cấm xe tải vượt?",
        "tip": "Biển 1: P.125 'Cấm vượt'; Biển 3: P.126 'Cấm ô tô tải vượt'. Biển 1 áp dụng cho cả xe tải nên đáp án đúng là cả 2 biển.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q315.png",
        "no": 312,
        "index": 312,
        "text": "Biển nào xe ô tô con được phép vượt?",
        "tip": "Biển 1: P.125 'Cấm vượt'; Biển 3: P.126 'Cấm ô tô tải vượt'. Biển 2  KHÔNG áp dụng cho xe ô tô con nên là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q317.png",
        "no": 313,
        "index": 313,
        "text": "Biển nào cấm quay đầu xe?",
        "tip": "Biển 1: P.123a 'Cấm rẽ trái' không cấm quay đầu xe; Biển 2: P.124a 'Cấm quay xe' không cấm rẽ trái. Nên Biển 2 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Không biển nào.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả hai biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 131,
        "a2": 131,
        "b1": 143,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q317.png",
        "no": 314,
        "index": 314,
        "text": "Biển nào cấm xe rẽ trái?",
        "tip": "Biển 1: P.123a 'Cấm rẽ trái' không cấm quay đầu xe; Biển 2: P.124a 'Cấm quay xe' không cấm rẽ trái. Nên Biển 1 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 132,
        "a2": 132,
        "b1": 144,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q317.png",
        "no": 315,
        "index": 315,
        "text": "Khi gặp biển nào xe được rẽ trái?",
        "tip": "Biển 1: P.123a 'Cấm rẽ trái' không cấm quay đầu xe; Biển 2: P.124a 'Cấm quay xe' không cấm rẽ trái.<br/>Nên Biển 2 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Không biển nào.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 133,
        "a2": 133,
        "b1": 145,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q320.png",
        "no": 316,
        "index": 316,
        "text": "Biển nào cấm xe ô tô rẽ trái?",
        "tip": "Biển 1: P.123a 'Cấm rẽ trái'; Biển 2: P.124e 'Cấm ô tô rẽ trái và quay xe' nên cả 2 biển đều cấm rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q321.png",
        "no": 317,
        "index": 317,
        "text": "Biển nào cấm các phương tiện rẽ phải?",
        "tip": "Biển 1: P.123b 'Cấm rẽ phải'; Biển 2: P.124d 'Cấm rẽ phải và quay xe'; Biển 3: P.124f 'Cấm ô tô rẽ phải và quay xe'.<br/>Nên biển 3 chỉ cấm xe ô tô, còn biển 1 và biển 2 cấm toàn bộ phương tiện rẽ phải.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và biển 2.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 134,
        "a2": 134,
        "b1": 146,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q322.png",
        "no": 318,
        "index": 318,
        "text": "Biển nào cấm các phương tiện rẽ trái?",
        "tip": "Biển 1: P.123a 'Cấm rẽ trái'; Biển 2: P.124c 'Cấm rẽ trái và quay xe'; Biển 3: P.124e 'Cấm ô tô rẽ trái và quay xe'.<br/>Nên biển 3 chỉ cấm xe ô tô, còn biển 1 và biển 2 cấm toàn bộ phương tiện rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và biển 2.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 135,
        "a2": 135,
        "b1": 147,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q323.png",
        "no": 319,
        "index": 319,
        "text": "Biển nào dưới đây chỉ cấm xe ô tô quay đầu?",
        "tip": "Biển 1: P.124b 'Cấm ô tô quay đầu xe' không cấm rẽ trái; Biển 2: P.124e 'Cấm ôtô rẽ trái và quay xe'; Biển 3: P.124f 'Cấm ô tô rẽ phải và quay xe'. Nên Biển 1 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 1 và biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q323.png",
        "no": 320,
        "index": 320,
        "text": "Biển nào dưới đây cấm xe ô tô rẽ trái và quay đầu?",
        "tip": "Biển 1: P.124b 'Cấm ô tô quay đầu xe' không cấm rẽ trái; Biển 2: P.124e 'Cấm ôtô rẽ trái và quay xe'; Biển 3: P.124f 'Cấm ô tô rẽ phải và quay xe'. Nên Biển 2 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 1 và biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q325.png",
        "no": 321,
        "index": 321,
        "text": "Biển nào cấm xe taxi mà không cấm các phương tiện khác?",
        "tip": "Biển 2 chỉ cấm xe taxi nhưng không cấm các phương tiện khác.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Không biển nào.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q326.png",
        "no": 322,
        "index": 322,
        "text": "Biển nào xe được phép rẽ trái?",
        "tip": "Theo QCVN41:2024 thì Biển 2: I.410 'Khu vực quay xe' chỉ dẫn khu vực được phép quay đầu xe. Biển này thuộc nhóm biển chỉ dẫn nên KHÔNG cấm rẽ trái. Do đó, đáp án đúng là câu 2.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Không biển nào.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 136,
        "a2": 136,
        "b1": 148,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q326.png",
        "no": 323,
        "index": 323,
        "text": "Biển nào xe quay đầu không bị cấm?",
        "tip": "Biển 1: P.123a 'Cấm rẽ trái' không cấm quay đầu; Biển 2: I.410 'Khu vực quay xe' chỉ dẫn khu vực được phép quay đầu xe. Nên cả 2 biển là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 137,
        "a2": 137,
        "b1": 149,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q328.png",
        "no": 324,
        "index": 324,
        "text": "Biển nào xe được phép quay đầu nhưng không được rẽ trái?",
        "tip": "Biển 1: 123a 'Cấm rẽ trái' nhưng không cấm quay đầu xe. Biển 2: R.301e đặt trước ngã ba ngã tư chỉ được rẽ trái ở phạm vi ngã ba, ngã tư phía sau mặt biển nên không thể quay đầu xe.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 138,
        "a2": 138,
        "b1": 150,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q329.png",
        "no": 325,
        "index": 325,
        "text": "Biển nào là biển 'Cấm đi ngược chiều'?",
        "tip": "Biển 1: P.101 'Đường cấm'; Biển 2: P.102 'Cấm đi ngược chiều'; Biển 3: P.301a 'Cấm đỗ xe'. Nên biển 2 là cấm đi ngược chiều.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 139,
        "a2": 139,
        "b1": 151,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q329.png",
        "no": 326,
        "index": 326,
        "text": "Biển nào dưới đây các phương tiện không được phép đi vào?",
        "tip": "Biển 1: P.101 'Đường cấm'; Biển 2: P.102 'Cấm đi ngược chiều' cấm đi vào theo chiều đặt biển; Biển 3: P.301a 'Cấm đỗ xe'. Nên biển 1 và biển 2 là cấm các phương tiện không được phép đi vào.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 1 và biển 2.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 140,
        "a2": 140,
        "b1": 152,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q331.png",
        "no": 327,
        "index": 327,
        "text": "Gặp biển nào người lái xe không được đỗ xe vào ngày chẵn?",
        "tip": "Biển 1: P.301a 'Cấm đỗ xe' bất kỳ ngày nào; Biển 2: P301b 'Cấm đỗ xe' vào ngày lẻ; Biển 3: P301c 'Cấm đỗ xe' vào ngày chẵn. Nên biển 1 và biển 3 là cấm đỗ xe ngày chẵn.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 3.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 2 và biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q331.png",
        "no": 328,
        "index": 328,
        "text": "Gặp biển nào người lái xe không được đỗ xe vào ngày lẻ?",
        "tip": "Biển 1: P.301a 'Cấm đỗ xe' bất kỳ ngày nào; Biển 2: P301b 'Cấm đỗ xe' vào ngày lẻ; Biển 3: P301c 'Cấm đỗ xe' vào ngày chẵn. Nên biển 1 và biển 2 là cấm đỗ xe ngày lẻ.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và biển 2.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q333.png",
        "no": 329,
        "index": 329,
        "text": "Khi gặp biển nào xe ưu tiên theo luật định vẫn phải dừng lại?",
        "tip": "Biển 1: P.101 'Đường cấm' không cấm xe ưu tiên;<br/>Biển 2: R.122 'Dừng lại' áp dụng với cả xe ưu tiên;<br/>Biển 3: P.102 'Cấm đi ngược chiều' không áp dụng với xe ưu tiên;<br/>Nên Biển 2 là đáp án đúng, áp dụng với cả xe ưu tiên.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 141,
        "a2": 141,
        "b1": 153,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q334.png",
        "no": 330,
        "index": 330,
        "text": "Biển nào cấm tất cả các loại xe cơ giới và thô sơ đi lại trên đường, trừ xe ưu tiên theo luật định (nếu đường vẫn cho xe chạy được)?",
        "tip": "Biển 1: P.101 'Đường cấm' không cấm xe ưu tiên;<br/>Biển 2: R.122 'Dừng lại' áp dụng với cả xe ưu tiên;<br/>Nên Biển 1 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 142,
        "a2": 142,
        "b1": 154,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q335.png",
        "no": 331,
        "index": 331,
        "text": "Biển nào là biển 'Cấm xe chở hàng nguy hiểm'?",
        "tip": "Biển 1: P.106a 'Cấm xe tải'; Biển 2: P.106b 'Cấm xe tải có khối lượng chuyên chở lớn hơn 2.5 tấn'; P.106c: 'Cấm xe chở hàng nguy hiểm'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q336.png",
        "no": 332,
        "index": 332,
        "text": "Gặp biển nào xe xích lô được phép đi vào?",
        "tip": "BIển 1 và 2: P.111 (b,c) 'Cấm xe ba bánh loại có động cơ': Biển 3: P.111d 'Cấm xe ba bánh loại không có động cơ'. Nên đáp án Biển 1 và Biển 2 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 1 và biển 2.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 155,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q336.png",
        "no": 333,
        "index": 333,
        "text": "Gặp biển nào xe lam, xe xích lô máy được phép đi vào?",
        "tip": "BIển 1 và 2: P.111 (b,c) 'Cấm xe ba bánh loại có động cơ': Biển 3: P.111d 'Cấm xe ba bánh loại không có động cơ'. Nên Biển 3 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 156,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q338.png",
        "no": 334,
        "index": 334,
        "text": "Biển báo này có ý nghĩa như thế nào?",
        "tip": "Để báo đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua, đặt biển số P.114 'Cấm xe vật nuôi kéo'.",
        "answers": [
            {
                "id": 1,
                "text": "Đường cấm súc vật vận tải hàng hóa.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đường cấm súc vật vận tải hành khách.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 157,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q339.png",
        "no": 335,
        "index": 335,
        "text": "Biển báo này có ý nghĩa như thế nào?",
        "tip": "Biển số P.127a 'Tốc độ tối đa cho phép về ban đêm'.",
        "answers": [
            {
                "id": 1,
                "text": "Tốc độ tối đa cho phép về ban đêm cho các phương tiện là 70 km/h.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Tốc độ tối thiểu cho phép về ban đêm cho các phương tiện là 70 km/h.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 143,
        "a2": 143,
        "b1": 158,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q340.png",
        "no": 336,
        "index": 336,
        "text": "Khi gặp các biển này xe ưu tiên theo luật định (có tải trọng hay chiều cao toàn bộ vượt quá chỉ số ghi trên biển) có được phép đi qua hay không?",
        "tip": "P.117 'Hạn chế chiều cao', P.116 'Hạn chế tải trọng trên trục xe', P.115 'Hạn chế trọng tải toàn bộ xe'. Cả 3 biển này đều áp dụng với xe ưu tiên.",
        "answers": [
            {
                "id": 1,
                "text": "Được phép.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không được phép.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q340.png",
        "no": 337,
        "index": 337,
        "text": "Biển nào hạn chế chiều cao của xe và hàng?",
        "tip": "P.117 'Hạn chế chiều cao', P.116 'Hạn chế tải trọng trên trục xe', P.115 'Hạn chế trọng tải toàn bộ xe'. Biển 1 hạn chế chiều cao.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q340.png",
        "no": 338,
        "index": 338,
        "text": "Biển số 2 có ý nghĩa như thế nào?",
        "tip": "P.117 'Hạn chế chiều cao', P.116 'Hạn chế tải trọng trên trục xe', P.115 'Hạn chế trọng tải toàn bộ xe'. Biển 2 hạn chế tải trọng trên trục xe.",
        "answers": [
            {
                "id": 1,
                "text": "Cho phép xe ô tô có tải trọng trục lớn hơn 7 tấn đi qua.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Cho phép xe ô tô có tải trọng trên trục xe từ 7 tấn trở xuống đi qua.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q340.png",
        "no": 339,
        "index": 339,
        "text": "Biển số 3 có ý nghĩa như thế nào?",
        "tip": "P.117 'Hạn chế chiều cao', P.116 'Hạn chế tải trọng trên trục xe', P.115 'Hạn chế trọng tải toàn bộ xe'. Biển 3 hạn chế tải trọng toàn bộ xe.",
        "answers": [
            {
                "id": 1,
                "text": "Cấm các loại xe có tải trọng toàn bộ trên 10 tấn đi qua.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Hạn chế khối lượng hàng hóa chở trên xe.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Hạn chế tải trọng trên trục xe.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q344.png",
        "no": 340,
        "index": 340,
        "text": "Biển nào cấm máy kéo kéo theo rơ moóc?",
        "tip": "Biển 1: P.108 'Cấm ô tô kéo moóc'; Biển 2: P.109 'Cấm máy kéo'. Đáp án đúng là cả 2 biển.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q345.png",
        "no": 341,
        "index": 341,
        "text": "Khi gặp biển số 1, xe ô tô tải có được đi vào không?",
        "tip": "Biển 1: P.108 'Cấm ô tô kéo moóc' không áp dụng với xe ô tô tải (không kéo rơ moóc).",
        "answers": [
            {
                "id": 1,
                "text": "Được đi vào.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Không được đi vào.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q346.png",
        "no": 342,
        "index": 342,
        "text": "Biển nào không có hiệu lực đối với xe ô tô tải không kéo moóc?",
        "tip": "Biển 1: P.108 'Cấm ô tô kéo moóc' không áp dụng với ô tô tải không kéo rơ moóc;<br/>Biển 2: P.109 'Cấm máy kéo' không áp dụng với xe ô tô tải.<br/>Biển 3: P.103a 'Cấm ô tô' thì cấm ô tô tải.<br/>Do đó đáp án đúng là biển 1 và 2.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và biển 2.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2 và biển 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 1 và biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q347.png",
        "no": 343,
        "index": 343,
        "text": "Biển nào cấm máy kéo?",
        "tip": "Biển 1: P.108 'Cấm ô tô kéo moóc'; Biển 2: P.109 'Cấm máy kéo'; Biển 3: P.106a 'Cấm ô tô tải' thì cấm máy kéo. Nên đáp án đúng là Biển 2 và Biển 3.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và biển 2.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và biển 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q348.png",
        "no": 344,
        "index": 344,
        "text": "Khi gặp biển này, xe mô tô ba bánh chở hàng có được phép rẽ trái hoặc rẽ phải hay không?",
        "tip": "P.105 'Cấm xe ô tô và xe máy'. Biển phụ S.503b để chỉ đồng thời hai hướng tác dụng (trái và phải). Nên cấm xe mô tô (gồm cả ba bánh) và xe máy rẽ trái và rẽ phải.",
        "answers": [
            {
                "id": 1,
                "text": "Được phép.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không được phép.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 159,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q348.png",
        "no": 345,
        "index": 345,
        "text": "Biển này có hiệu lực đối với xe mô tô hai bánh, ba bánh chở hàng không?",
        "tip": "P.105 'Cấm xe ô tô và xe máy'. Biển phụ S.503b để chỉ đồng thời hai hướng tác dụng (trái và phải). Cấm xe máy rẽ trái và rẽ phải thì gồm cả xe ba bánh.",
        "answers": [
            {
                "id": 1,
                "text": "Có.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Không.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 144,
        "a2": 144,
        "b1": 160,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q348.png",
        "no": 346,
        "index": 346,
        "text": "Biển này có ý nghĩa như thế nào?",
        "tip": "P.105 'Cấm xe ô tô và xe máy'. Biển phụ S.503b để chỉ đồng thời hai hướng tác dụng (trái và phải). Cấm xe cơ giới và xe máy (trừ xe ưu tiên) đi về bên trái và bên phải.",
        "answers": [
            {
                "id": 1,
                "text": "Cấm xe cơ giới (trừ xe ưu tiên theo luật định) đi thẳng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Cấm các loại xe cơ giới và xe mô tô (trừ xe ưu tiên theo luật định) đi về bên trái và bên phải.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Hướng trái và phải không cấm xe cơ giới.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 145,
        "a2": 145,
        "b1": 161,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q351.png",
        "no": 347,
        "index": 347,
        "text": "Biển phụ đặt dưới biển cấm bóp còi có ý nghĩa như thế nào?",
        "tip": "Biển phụ là biển S.501 'Phạm vi tác dụng của biển' xác định chiều dài áp dụng biển chính từ nơi đặt biển.",
        "answers": [
            {
                "id": 1,
                "text": "Báo khoảng cách đến nơi cấm bóp còi.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Báo cấm dùng còi có độ vang xa 500m.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 146,
        "a2": 146,
        "b1": 162,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q351.png",
        "no": 348,
        "index": 348,
        "text": "Chiều dài đoạn đường 500 m từ nơi đặt biển này, người lái xe có được phép bấm còi không?",
        "tip": "Biển phụ là biển S.501 'Phạm vi tác dụng của biển' xác định chiều dài áp dụng biển chính từ nơi đặt biển.",
        "answers": [
            {
                "id": 1,
                "text": "Được phép.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không được phép.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 147,
        "a2": 147,
        "b1": 163,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q353.png",
        "no": 349,
        "index": 349,
        "text": "Biển nào xe mô tô hai bánh được đi vào?",
        "tip": "Biển chính là P.101 'Đường cấm', có biển phụ thì áp dụng cấm theo biển phụ. Nên Biển 1 và Biển 3 không áp dụng với xe mô tô là câu trả lời đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và biển 2.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 3.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 2 và biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 148,
        "a2": 148,
        "b1": 164,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q353.png",
        "no": 350,
        "index": 350,
        "text": "Biển nào xe mô tô hai bánh không được đi vào?",
        "tip": "Biển chính là P.101 'Đường cấm', có biển phụ thì áp dụng kèm theo biển phụ. Nên Biển 2 áp dụng với xe mô tô là câu trả lời đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 149,
        "a2": 149,
        "b1": 165,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q353.png",
        "no": 351,
        "index": 351,
        "text": "Ba biển này có hiệu lực như thế nào?",
        "tip": "Biển chính là P.101 'Đường cấm', có biển phụ thì áp dụng cấm các loại xe theo biển phụ.",
        "answers": [
            {
                "id": 1,
                "text": "Cấm các loại xe ở biển phụ đi vào.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Cấm các loại xe cơ giới đi vào trừ loại xe ở biển phụ.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 150,
        "a2": 150,
        "b1": 166,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q356.png",
        "no": 352,
        "index": 352,
        "text": "Biển nào báo hiệu chiều dài đoạn đường phải giữ cự ly tối thiểu giữa hai xe?",
        "tip": "Biển phụ 1: S.501 'Phạm vi tác dụng của biển'; Biển phụ 2: S.502 'Khoảng cách đến đối tượng báo hiệu'. Biển 1 báo hiệu chiều dài đoạn đường áp dụng biển chính.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q356.png",
        "no": 353,
        "index": 353,
        "text": "Biển nào báo hiệu khoảng cách thực tế từ nơi đặt biển đến nơi cần cự ly tối thiểu giữa hai xe?",
        "tip": "Biển phụ 1: S.501 'Phạm vi tác dụng của biển'; Biển phụ 2: S.502 'Khoảng cách đến đối tượng báo hiệu'. Biển 2 báo hiệu khoảng cách thực tế đến nơi áp dụng biển chính.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q358.png",
        "no": 354,
        "index": 354,
        "text": "Biển này có ý nghĩa như thế nào?",
        "tip": "P.130 'Cấm dừng xe và đỗ xe', biển phụ chỉ hướng áp dụng. Cấm dừng và đỗ xe theo hướng bên phải.",
        "answers": [
            {
                "id": 1,
                "text": "Cấm dừng xe về hướng bên trái.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Cấm dừng và đỗ xe theo hướng bên phải.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Được phép đỗ xe và dừng xe theo hướng bên phải.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 151,
        "a2": 151,
        "b1": 167,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q358.png",
        "no": 355,
        "index": 355,
        "text": "Theo hướng bên phải có được phép đỗ xe, dừng xe không?",
        "tip": "P.130 'Cấm dừng xe và đỗ xe', biển phụ chỉ hướng áp dụng. Cấm dừng và đỗ xe theo hướng bên phải.",
        "answers": [
            {
                "id": 1,
                "text": "Không được phép.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Được phép.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 168,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q360.png",
        "no": 356,
        "index": 356,
        "text": "Gặp biển này, xe ô tô sơ mi rơ moóc có chiều dài toàn bộ kể cả xe, moóc và hàng lớn hơn trị số ghi trên biển có được phép đi vào hay không?",
        "tip": "Biển P.120 'Hạn chế chiều dài xe cơ giới kéo theo rơ-moóc hoặc sơ-mi rơ moóc'.",
        "answers": [
            {
                "id": 1,
                "text": "Không được phép.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Được phép.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q360.png",
        "no": 357,
        "index": 357,
        "text": "Xe ô tô chở hàng vượt quá phía trước và sau thùng xe, mỗi phía quá 10% chiều dài toàn bộ thân xe, tổng chiều dài xe (cả hàng) từ trước đến sau nhỏ hơn trị số ghi trên biển thì có được phép đi vào không?",
        "tip": "Biển P.120 'Hạn chế chiều dài xe cơ giới kéo theo rơ-moóc hoặc sơ-mi rơ moóc'.",
        "answers": [
            {
                "id": 1,
                "text": "Không được phép.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Được phép.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q362.png",
        "no": 358,
        "index": 358,
        "text": "Biển này có ý nghĩa như thế nào?",
        "tip": "Biển P.107a 'Cấm xe ô tô khách'.",
        "answers": [
            {
                "id": 1,
                "text": "Cấm ô tô buýt.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Cấm xe ô tô khách.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cấm xe ô tô con.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q363.png",
        "no": 359,
        "index": 359,
        "text": "Biển này có ý nghĩa như thế nào?",
        "tip": "Biển P.118 'Hạn chế chiều ngang xe': Để báo hạn chế chiều ngang của xe và hàng.",
        "answers": [
            {
                "id": 1,
                "text": "Hạn chế chiều cao của xe và hàng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Hạn chế chiều ngang của xe và hàng.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Hạn chế chiều dài của xe và hàng.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q364.png",
        "no": 360,
        "index": 360,
        "text": "Biển nào là biển 'Tốc độ tối đa cho phép về ban đêm'?",
        "tip": "Biển 1: P.127a 'Tốc độ tối đa cho phép về ban đêm'; Biển 2: P.127 'Tốc độ tối đa cho phép'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 152,
        "a2": 152,
        "b1": 169,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q365.png",
        "no": 361,
        "index": 361,
        "text": "Biển báo nào báo hiệu bắt đầu đoạn đường vào phạm vi khu dân cư, các phương tiện tham gia giao thông phải tuân theo các quy định đi đường được áp dụng ở khu đông dân cư?",
        "tip": "Biển 1: R.420 'Bắt đầu khu đông dân cư'; Biển 2: R.421 'Hết khu đông dân cư'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 170,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q362n.png",
        "no": 362,
        "index": 362,
        "text": "Biển nào báo hiệu hạn chế tốc độ của phương tiện không vượt quá trị số ghi trên biển?",
        "tip": "Biển 1: R.306 'Tốc độ tối thiểu cho phép'; Biển 2: P.127 'Tốc độ tối đa cho phép'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 153,
        "a2": 153,
        "b1": 171,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q363n.png",
        "no": 363,
        "index": 363,
        "text": "Trong các biển báo dưới đây biển nào báo hiệu 'Kết thúc đường cao tốc'?",
        "tip": "Biển 1: I.401 'Bắt đầu đường ưu tiên': Biển 2: IE.453c 'Hết đường cao tốc'; Biển 3: R. 404a 'Hết đoạn đường dành cho xe ô tô'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q368.png",
        "no": 364,
        "index": 364,
        "text": "Số 50 ghi trên biển báo dưới đây có ý nghĩa như thế nào?",
        "tip": "Ghi tốc độ tối đa cho phép của biển P.127 'Tốc độ tối đa cho phép'.",
        "answers": [
            {
                "id": 1,
                "text": "Tốc độ tối đa các xe cơ giới được phép chạy.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Tốc độ tối thiểu các xe cơ giới được phép chạy.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 154,
        "a2": 154,
        "b1": 172,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q365n.png",
        "no": 365,
        "index": 365,
        "text": "Biển nào dưới đây chỉ dẫn bắt đầu đường cao tốc phân làn đường có tốc độ khác nhau?",
        "tip": "Biển 1: W.238 'Đường cao tốc phía trước'; Biển 2: IE.452 chỉ dẫn bắt đầu đường cao tốc, giá trị hạn chế tốc độ tối đa và tốc độ tối thiểu.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q370.png",
        "no": 366,
        "index": 366,
        "text": "Biển báo dưới đây có ý nghĩa như thế nào?",
        "tip": "Biển 1: R.306 'Tốc độ tối thiểu cho phép'.",
        "answers": [
            {
                "id": 1,
                "text": "Báo hiệu tốc độ tối đa cho phép các xe cơ giới chạy.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Báo hiệu tốc độ tối thiểu cho phép các xe cơ giới chạy.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 155,
        "a2": 155,
        "b1": 173,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q371.png",
        "no": 367,
        "index": 367,
        "text": "Gặp biển nào người lái xe phải nhường đường cho người đi bộ?",
        "tip": "Biển 1: W.224 'Đường người đi bộ cắt ngang'; Biển 2: P.112 'Cấm người đi bộ'; Biển 3: R.305 'Đường dành cho người đi bộ'. Biển 1 báo ưu tiên cho người đi bộ nên phải nhường đường.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 156,
        "a2": 156,
        "b1": 174,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q371.png",
        "no": 368,
        "index": 368,
        "text": "Biển nào chỉ đường dành cho người đi bộ, các loại xe không được đi vào khi gặp biển này?",
        "tip": "Biển 1: W.224 'Đường người đi bộ cắt ngang'; Biển 2: P.112 'Cấm người đi bộ'; Biển 3: R.305 'Đường dành cho người đi bộ'. Biển 3 cấm các loại xe đi vào đường dành cho người đi bộ.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 157,
        "a2": 157,
        "b1": 175,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q373.png",
        "no": 369,
        "index": 369,
        "text": "Biển nào báo hiệu 'Đường dành cho xe thô sơ'?",
        "tip": "Biển 1: R. 304 'Đường dành cho xe thô sơ'; Biển 2: P.110a 'Cấm xe đạp'; Biển 3: W.226 'Đường người đi xe đạp cắt ngang'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 158,
        "a2": 158,
        "b1": 176,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q374.png",
        "no": 370,
        "index": 370,
        "text": "Biển nào báo hiệu sắp đến chỗ giao nhau nguy hiểm?",
        "tip": "Biển 1: W.210 'Giao nhau với đường sắt có rào chắn'; Biển 2: W.208 'Giao nhau với đường ưu tiên'; Biển 3: W.209 'Giao nhau có tín hiệu đèn'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 159,
        "a2": 159,
        "b1": 177,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q374.png",
        "no": 371,
        "index": 371,
        "text": "Biển nào báo hiệu 'Giao nhau với đường sắt có rào chắn'?",
        "tip": "Biển 1: W.210 'Giao nhau với đường sắt có rào chắn'; Biển 2: W.208 'Giao nhau với đường ưu tiên'; Biển 3: W.209 'Giao nhau có tín hiệu đèn'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2 và biển 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 160,
        "a2": 160,
        "b1": 178,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q374.png",
        "no": 372,
        "index": 372,
        "text": "Biển nào báo hiệu 'Giao nhau có tín hiệu đèn'?",
        "tip": "Biển 1: W.210 'Giao nhau với đường sắt có rào chắn'; Biển 2: W.208 'Giao nhau với đường ưu tiên'; Biển 3: W.209 'Giao nhau có tín hiệu đèn'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 161,
        "a2": 161,
        "b1": 179,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q377.png",
        "no": 373,
        "index": 373,
        "text": "Biển nào báo hiệu nguy hiểm giao nhau với đường sắt?",
        "tip": "Biển 1: W.210 'Giao nhau với đường sắt có rào chắn'; Biển 2: W.234 'Giao nhau với đường hai chiều'; Biển 3: W.242a 'Nơi đường sắt giao vuông góc với đường bộ'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và biển 2.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 3.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 2 và biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 162,
        "a2": 162,
        "b1": 180,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q378.png",
        "no": 374,
        "index": 374,
        "text": "Biển nào báo hiệu đường bộ giao nhau với đường sắt không có rào chắn?",
        "tip": "Biển 1: W.210 'Giao nhau với đường sắt có rào chắn'; Biển 2: W.211a 'Giao nhau với đường sắt không có rào chắn'; Biển 3: W.242a 'Nơi đường sắt giao vuông góc với đường bộ' bổ sung cho biển W.211a. Nên cả 2 biển 2 và 3 đều đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và biển 2.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và biển 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 163,
        "a2": 163,
        "b1": 181,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q379.png",
        "no": 375,
        "index": 375,
        "text": "Biển nào báo hiệu sắp đến chỗ giao nhau giữa đường bộ và đường sắt?",
        "tip": "Biển 1: Biển 211a Giao nhau với đường sắt không có rào chắn.<br/>Biển 2: Biển 208 Giao nhau với đường ưu tiên.<br/>Biển 3: Biển 211b Giao nhau với tàu điện.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 1 và biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 164,
        "a2": 164,
        "b1": 182,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q380.png",
        "no": 376,
        "index": 376,
        "text": "Biển nào báo hiệu 'Cửa chui'?",
        "tip": "Biển 1: W.237 'Cầu vồng'; Biển 2: W.218 'Cửa chui'; Biển 3: W.240 'Đường hầm'. Đáp án đúng là đáp án 2.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 165,
        "a2": 165,
        "b1": 183,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q381.png",
        "no": 377,
        "index": 377,
        "text": "Hai biển này có ý nghĩa như thế nào?",
        "tip": "Hai biển này là 242a và 242b 'Nơi đường sắt giao nhau vuông góc với đường bộ' bổ sung cho biển 211 'Giao nhau với đường sắt không có rào chắn'. Do đó câu trả lời 1 đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Để chỉ nơi đường sắt giao vuông góc với đường bộ không có rào chắn.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Để báo trước sắp đến vị trí giao cắt đường bộ với đường sắt cùng mức, không vuông góc và không có người gác, không có rào chắn.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Nơi đường sắt giao nhau với đường bộ.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 166,
        "a2": 166,
        "b1": 184,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q382.png",
        "no": 378,
        "index": 378,
        "text": "Biển nào báo hiệu 'Nơi đường sắt giao vuông góc với đường bộ'?",
        "tip": "Biển 1 và Biển 2 là 242a và 242b 'Nơi đường sắt giao nhau vuông góc với đường bộ' bổ sung cho biển 211 'Giao nhau với đường sắt không có rào chắn'.<br/> Biển 3 là 243a 'Nơi giao nhau không vuông góc với đường bộ'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 1 và biển 2.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q383.png",
        "no": 379,
        "index": 379,
        "text": "Các biển này có ý nghĩa như thế nào?",
        "tip": "Ba biển này là 243a, a43b và 243c Nơi giao nhau không vuông góc với đường sắt, không có người gác và không có rào chắn với đường sắt.",
        "answers": [
            {
                "id": 1,
                "text": "Nơi đường sắt giao nhau với đường bộ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nơi đường sắt giao vuông góc với đường bộ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Để báo trước sắp đến vị trí đường sắt giao không vuông góc với đường bộ, không có người gác và không có rào chắn.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q384.png",
        "no": 380,
        "index": 380,
        "text": "Biển nào báo hiệu 'Hết đoạn đường ưu tiên'?",
        "tip": "Biển 1: W.207a 'Giao nhau với đường không ưu tiên';<br/>Biển 2: W.208 'Giao nhau với đường ưu tiên';<br/>Biển 3: I.402 'Hết đường ưu tiên'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 167,
        "a2": 167,
        "b1": 185,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q385.png",
        "no": 381,
        "index": 381,
        "text": "Biển nào báo hiệu, chỉ dẫn xe đi trên đường này được quyền ưu tiên qua nơi giao nhau?",
        "tip": "Biển 1: W.207a 'Giao nhau với đường không ưu tiên';<br/>Biển 2: W.208 'Giao nhau với đường ưu tiên';<br/>Biển 3: I.401 'Bắt đầu đường ưu tiên'. Nên Biển 1 và Biển 3 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và biển 2.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 3.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 2 và biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 168,
        "a2": 168,
        "b1": 186,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q385.png",
        "no": 382,
        "index": 382,
        "text": "Biển nào báo hiệu 'Giao nhau với đường không ưu tiên'?",
        "tip": "Biển 1: W.207a 'Giao nhau với đường không ưu tiên';<br/>Biển 2: W.208 'Giao nhau với đường ưu tiên';<br/>Biển 3: I.401 'Bắt đầu đường ưu tiên'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 2 và biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 169,
        "a2": 169,
        "b1": 187,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q385.png",
        "no": 383,
        "index": 383,
        "text": "Biển nào báo hiệu 'Giao nhau với đường ưu tiên'?",
        "tip": "Biển 1: W.207a 'Giao nhau với đường không ưu tiên';<br/>Biển 2: W.208 'Giao nhau với đường ưu tiên';<br/>Biển 3: I.401 'Bắt đầu đường ưu tiên'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và biển 3.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 188,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q388.png",
        "no": 384,
        "index": 384,
        "text": "Biển nào báo hiệu 'Đường bị thu hẹp'?",
        "tip": "Biển 1: W.203a 'Đường bị hẹp cả hai bên'; Biển 2: W203b 'Đường bị hẹp về phía trái'; Biển 3: W.201b 'Chỗ ngoặt nguy hiểm vòng bên phải'. Nên đáp án đúng là Biển 1 và Biển 2.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và biển 2.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 189,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q389.png",
        "no": 385,
        "index": 385,
        "text": "Khi gặp biển nào, người lái xe phải giảm tốc độ, chú ý xe đi ngược chiều, xe đi ở phía đường bị hẹp phải nhường đường cho xe đi ngược chiều?",
        "tip": "Biển 1: W.236 'Hết đường đôi'; Biển 2: W203b 'Đường bị hẹp về phía trái'; Biển 3: W203c 'Đường bị hẹp về phía phải'.<br/>Câu này hỏi về việc đường bị thu hẹp nên câu trả lời đúng là Biển 2 và Biển 3.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và biển 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 190,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q390.png",
        "no": 386,
        "index": 386,
        "text": "Biển nào báo hiệu 'Giao nhau với đường ưu tiên'?",
        "tip": "Biển 1: W.205a 'Đường giao nhau' cùng cấp; Biển 2: W.207a 'Giao nhau với đường không ưu tiên'; Biển 3: W.208 'Giao nhau với đường ưu tiên';",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 170,
        "a2": 170,
        "b1": 191,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q390.png",
        "no": 387,
        "index": 387,
        "text": "Biển nào báo hiệu 'Đường giao nhau' của các tuyến đường cùng cấp?",
        "tip": "Biển 1: W.205a 'Đường giao nhau' cùng cấp; Biển 2: W.207a 'Giao nhau với đường không ưu tiên'; Biển 3: W.208 'Giao nhau với đường ưu tiên';",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 171,
        "a2": 171,
        "b1": 192,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q390.png",
        "no": 388,
        "index": 388,
        "text": "Biển nào báo hiệu 'Giao nhau với đường không ưu tiên'?",
        "tip": "Biển 1: W.205a 'Đường giao nhau' cùng cấp; Biển 2: W.207a 'Giao nhau với đường không ưu tiên'; Biển 3: W.208 'Giao nhau với đường ưu tiên';",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 193,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q393.png",
        "no": 389,
        "index": 389,
        "text": "Biển nào báo hiệu 'Đường hai chiều'?",
        "tip": "Biển 1: W.204 'Đường hai chiều';<br/>Biển 2: P.132 'Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp';<br/>Biển 3: I.406 'Được ưu tiên qua đường hẹp'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 172,
        "a2": 172,
        "b1": 194,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q393.png",
        "no": 390,
        "index": 390,
        "text": "Biển nào báo hiệu phải giảm tốc độ, nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp?",
        "tip": "Biển 1: W.204 'Đường hai chiều';<br/>Biển 2: P.132 'Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp';<br/>Biển 3: I.406 'Được ưu tiên qua đường hẹp'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 173,
        "a2": 173,
        "b1": 195,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q393.png",
        "no": 391,
        "index": 391,
        "text": "Biển nào chỉ dẫn 'Được ưu tiên qua đường hẹp'?",
        "tip": "Biển 1: W.204 'Đường hai chiều';<br/>Biển 2: P.132 'Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp';<br/>Biển 3: I.406 'Được ưu tiên qua đường hẹp'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Biển 2 và biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 174,
        "a2": 174,
        "b1": 196,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q396.png",
        "no": 392,
        "index": 392,
        "text": "Biển nào báo hiệu 'Đường đôi'?",
        "tip": "Biển 1: I.406 'Được ưu tiên qua đường hẹp'; Biển 2: W.235 'Đường đôi'; Biển 3: W.236 'Kết thúc đường đôi'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 197,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q397.png",
        "no": 393,
        "index": 393,
        "text": "Biển nào báo hiệu 'Đường đôi'?",
        "tip": "Biển 1: W.204 'Đường hai chiều'; Biển 2: W.234 'Giao nhau với đường hai chiều'; Biển 3: W.235 'Đường đôi'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 175,
        "a2": 175,
        "b1": 198,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q398.png",
        "no": 394,
        "index": 394,
        "text": "Biển nào báo hiệu 'Kết thúc đường đôi'?",
        "tip": "Biển 1: W.204 'Đường hai chiều'; Biển 2: W.235 'Đường đôi'; Biển 3: W.236 'Kết thúc đường đôi'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 176,
        "a2": 176,
        "b1": 199,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q399.png",
        "no": 395,
        "index": 395,
        "text": "Biển nào báo hiệu 'Giao nhau với đường hai chiều'?",
        "tip": "Biển 1: W.234 'Giao nhau với đường hai chiều'; Biển 2: W.235 'Đường đôi'; Biển 3: W.205a 'Đường giao nhau' đồng cấp. Biển 1 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 177,
        "a2": 177,
        "b1": 200,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q400.png",
        "no": 396,
        "index": 396,
        "text": "Biển nào báo hiệu 'Đường hai chiều'?",
        "tip": "Biển 1: W.205a 'Đường giao nhau' cùng cấp; Biển 2: W.204 'Đường hai chiều'; Biển 3: W.236 'Kết thúc đường đôi'. Biển 2 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 201,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q401.png",
        "no": 397,
        "index": 397,
        "text": "Biển nào báo hiệu 'Giao nhau với đường hai chiều'?",
        "tip": "Biển 1: W.204 'Đường hai chiều'; Biển 2: W.234 'Giao nhau với đường hai chiều'; Biển 3: W.205a 'Đường giao nhau' đồng cấp. Đáp án 2 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 178,
        "a2": 178,
        "b1": 202,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q402.png",
        "no": 398,
        "index": 398,
        "text": "Biển nào báo hiệu 'Chú ý chướng ngại vật'?",
        "tip": "Biển 1: W.236 'Kết thúc đường đôi'; Biển 2: W.246a 'Chú ý chướng ngại vật - Vòng tránh ra hai bên'; Biển 3: W.246c 'Chý ý chướng ngại vật - Vòng tránh sang bên phải'. Nên cả 2 biển 2 và 3 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2 và biển 3.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 179,
        "a2": 179,
        "b1": 203,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q403.png",
        "no": 399,
        "index": 399,
        "text": "Biển nào chỉ dẫn cho người tham gia giao thông biết vị trí và khoảng cách có làn đường cứu nạn hay làn thoát xe khẩn cấp?",
        "tip": "Biển 1: I.416 'Đường tránh'; Biển 2: I448 'Làn đường cứu nạn hay làn thoát xe khẩn cấp'. Nên Biển 2 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q404.png",
        "no": 400,
        "index": 400,
        "text": "Biển nào báo hiệu 'Đường hầm'?",
        "tip": "Biển 1: W.218 'Cửa chui'; Biển 2: W.240 'Đường hầm'; Biển 3: W.237 'Cầu vồng'. Nên biển 2 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Cả ba biển.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 2 và biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 180,
        "a2": 180,
        "b1": 204,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q405.png",
        "no": 401,
        "index": 401,
        "text": "Biển nào dưới đây là biển 'Cầu hẹp'?",
        "tip": "Biển 1: W.213 'Cầu tạm'; Biển 2: W.212 'Cầu hẹp'; Biển 3: W.214 'Cầu xoay - cầu cất'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 181,
        "a2": 181,
        "b1": 205,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q406.png",
        "no": 402,
        "index": 402,
        "text": "Biển nào dưới đây là biển 'Cầu quay - cầu cất'?",
        "tip": "Biển 1: W.213 'Cầu tạm'; Biển 2: W.212 'Cầu hẹp'; Biển 3: W.214 'Cầu xoay - cầu cất'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 206,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q407.png",
        "no": 403,
        "index": 403,
        "text": "Biển nào dưới đây là biển 'Kè, vực sâu phía trước'?",
        "tip": "Biển 1: W.215a 'Kè, vực sâu phía trước';<br/>Biển 2: W.215b 'Kè, vực sâu bên đường phía bên phải';<br/>Biển 3: W.215c 'Kè, vực sâu bên đường phía bên trái'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q407.png",
        "no": 404,
        "index": 404,
        "text": "Biển nào sau đây là biển 'Kè, vực sâu bên đường phía bên trái'?",
        "tip": "Biển 1: W.215a 'Kè, vực sâu phía trước';<br/>Biển 2: W.215b 'Kè, vực sâu bên đường phía bên phải';<br/>Biển 3: W.215c 'Kè, vực sâu bên đường phía bên trái'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Biển 1 và biển 2.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q407.png",
        "no": 405,
        "index": 405,
        "text": "Biển nào sau đây là biển 'Kè, vực sâu bên đường phía bên phải'?",
        "tip": "Biển 1: W.215a 'Kè, vực sâu phía trước';<br/>Biển 2: W.215b 'Kè, vực sâu bên đường phía bên phải';<br/>Biển 3: W.215c 'Kè, vực sâu bên đường phía bên trái'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 207,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q410.png",
        "no": 406,
        "index": 406,
        "text": "Biển nào sau đây là biển 'Đường trơn'?",
        "tip": "Biển 1: W201c 'Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái'; Biển 2: W.222a 'Đường trơn'; Biển 3: W217 'Bến phà'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 208,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q411.png",
        "no": 407,
        "index": 407,
        "text": "Biển nào sau đây là biển 'Lề đường nguy hiểm'?",
        "tip": "Biển 1: W.215b 'Kè, vực sâu bên đường phía bên phải'; Biển 2: W.222b 'Lề đường nguy hiểm'; Biển 3: W201c 'Chỗ ngoặt nguy hiểm có nguy cơ lật xe'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 209,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q412.png",
        "no": 408,
        "index": 408,
        "text": "Biển nào sau đây báo trước gần tới đoạn đường đang tiến hành thi công sửa chữa?",
        "tip": "Biển 1: W.227 'Công trường'; Biển 2: W.228b 'Đá lở'; Biển 3: W.228c 'Sỏi đá bắn lên'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Không biển nào.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 210,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q413.png",
        "no": 409,
        "index": 409,
        "text": "Biển nào sau đây cảnh báo nguy hiểm đoạn đường thường xảy ra tai nạn?",
        "tip": "Biển 1: W.241 'Ùn tắc giao thông'; Biển 2: W.244 'Đoạn đường hay xảy ra tai nạn'; Biển 3: W.201c 'Chỗ ngoặt nguy hiểm có nguy cơ lật xe'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 211,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q414.png",
        "no": 410,
        "index": 410,
        "text": "Biển nào dưới đây báo hiệu đoạn đường hay xảy ra ùn tắc giao thông?",
        "tip": "Biển 1: W.240 'Đường hầm'; Biển 2: W.241 'Ùn tắc giao thông'; Biển 3: W.244 'Đoạn đường hay xảy ra tai nạn'",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 212,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q415.png",
        "no": 411,
        "index": 411,
        "text": "Gặp biển nào người tham gia giao thông phải đi chậm và thận trọng đề phòng khả năng xuất hiện và di chuyển bất ngờ của trẻ em trên mặt đường?",
        "tip": "Biển 1: W.224 'Đường người đi bộ cắt ngang'; Biển 2: W.225 'Trẻ em'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 182,
        "a2": 182,
        "b1": 213,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q416.png",
        "no": 412,
        "index": 412,
        "text": "Biển nào chỉ dẫn nơi bắt đầu đoạn đường dành cho người đi bộ?",
        "tip": "Biển 1: W.224 'Đường người đi bộ cắt ngang'; Biển 2: I.423c 'Điểm bắt đầu đường đi bộ'; Biển 3: W.225 'Trẻ em'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 183,
        "a2": 183,
        "b1": 214,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q417.png",
        "no": 413,
        "index": 413,
        "text": "Biển nào dưới đây báo hiệu gần đến đoạn đường thường có trẻ em đi ngang qua?",
        "tip": "Biển 1: W.224 'Đường người đi bộ cắt ngang'; Biển 2: W.225 'Trẻ em'; Biển 3: W.226 'Đường người đi xe đạp cắt ngang'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 184,
        "a2": 184,
        "b1": 215,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q418.png",
        "no": 414,
        "index": 414,
        "text": "Gặp biển nào dưới đây người tham gia giao thông cần phải điều chỉnh tốc độ xe chạy cho thích hợp, đề phòng gió ngang thổi mạnh gây lật xe?",
        "tip": "Biển 1: W.232 'Gió ngang'; Biển 2: W201c 'Chỗ ngoặt nguy hiểm có nguy cơ lật xe'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q420.png",
        "no": 415,
        "index": 415,
        "text": "Biển nào sau đây là biển 'Dốc xuống nguy hiểm'?",
        "tip": "Biển 1: W.219 'Dốc xuống nguy hiểm'; Biển 2: W.220 'Dốc lên nguy hiểm'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 185,
        "a2": 185,
        "b1": 216,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q420.png",
        "no": 416,
        "index": 416,
        "text": "Biển nào sau đây là biển 'Dốc lên nguy hiểm'?",
        "tip": "Biển 1: W.219 'Dốc xuống nguy hiểm'; Biển 2: W.220 'Dốc lên nguy hiểm'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 217,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q421.png",
        "no": 417,
        "index": 417,
        "text": "Biển báo này có ý nghĩa như thế nào?",
        "tip": "Biển W201c 'Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái'.",
        "answers": [
            {
                "id": 1,
                "text": "Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên trái khi đường cong vòng sang phải.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q422.png",
        "no": 418,
        "index": 418,
        "text": "Biển báo này có ý nghĩa như thế nào?",
        "tip": "Biển W.217 'Bến phà'.",
        "answers": [
            {
                "id": 1,
                "text": "Báo trước đoạn đường có gió ngang.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Báo trước đoạn đường trơn trượt.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Báo trước sắp đến bến phà.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 218,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q423.png",
        "no": 419,
        "index": 419,
        "text": "Biển báo này có ý nghĩa như thế nào?",
        "tip": "Biển W.221a 'Đường ổ gà, sống trâu'.",
        "answers": [
            {
                "id": 1,
                "text": "Báo hiệu đường có ổ gà, lồi lõm.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Báo hiệu đường có gồ giảm tốc phía trước.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 186,
        "a2": 186,
        "b1": 219,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q424.png",
        "no": 420,
        "index": 420,
        "text": "Biển báo này có ý nghĩa như thế nào?",
        "tip": "Biển W221b 'Đường có sóng mấp mô nhân tạo'.",
        "answers": [
            {
                "id": 1,
                "text": "Báo hiệu đường có ổ gà, lồi lõm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Báo hiệu đường có gồ giảm tốc phía trước.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 220,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q425.png",
        "no": 421,
        "index": 421,
        "text": "Biển báo dưới đây có ý nghĩa như thế nào?",
        "tip": "Biển W.228d 'Nền đường yếu'.",
        "answers": [
            {
                "id": 1,
                "text": "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi văng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 221,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q426.png",
        "no": 422,
        "index": 422,
        "text": "Các biển báo này có ý nghĩa như thế nào?",
        "tip": "Biển số W.228 (a, b) 'Đá lở'.",
        "answers": [
            {
                "id": 1,
                "text": "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi văng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 187,
        "a2": 187,
        "b1": 222,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q427.png",
        "no": 423,
        "index": 423,
        "text": "Biển báo này có ý nghĩa như thế nào?",
        "tip": "Biển số W.228c 'Sỏi đá bắn lên'.",
        "answers": [
            {
                "id": 1,
                "text": "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi văng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 223,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q428.png",
        "no": 424,
        "index": 424,
        "text": "Gặp biển báo này người lái xe phải xử lý thế nào?",
        "tip": "Biển số W.230 'Gia súc'.",
        "answers": [
            {
                "id": 1,
                "text": "Đi chậm, quan sát và dừng lại nếu gặp gia súc trên đường.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Bấm còi to để gia súc tránh đường và nhanh chóng di chuyển qua đoạn đường có gia súc.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 224,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q429.png",
        "no": 425,
        "index": 425,
        "text": "Biển báo này có ý nghĩa như thế nào?",
        "tip": "Biển số W.239a 'Đường cáp điện ở phía trên'.",
        "answers": [
            {
                "id": 1,
                "text": "Báo hiệu khu vực nguy hiểm thường xuyên có sét đánh.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Báo hiệu khu vực có đường dây điện cắt ngang phía trên tuyến đường.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 225,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q430.png",
        "no": 426,
        "index": 426,
        "text": "Biển nào báo hiệu các phương tiện phải đi đúng làn đường quy định và tuân thủ tốc độ tối đa cho phép?",
        "tip": "Biển 1: P.127b 'Biển ghép tốc độ tối đa cho phép trên từng làn đường';<br/>Biển 2: P.127c 'Biển ghép tốc độ tối đa cho phép theo phương tiện, trên từng làn đường'.<br/>Biển 2 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 226,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q430.png",
        "no": 427,
        "index": 427,
        "text": "Biển nào báo hiệu các phương tiện phải tuân thủ tốc độ tối đa cho phép trên từng làn đường?",
        "tip": "Biển 1: P.127b 'Biển ghép tốc độ tối đa cho phép trên từng làn đường';<br/>Biển 2: P.127c 'Biển ghép tốc độ tối đa cho phép theo phương tiện, trên từng làn đường'.<br/>Nên cả 2 biển đều là đáp án đúng (Quy định tốc độ tối đa theo làn đường).",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 188,
        "a2": 188,
        "b1": 227,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q432.png",
        "no": 428,
        "index": 428,
        "text": "Biển nào báo hiệu 'Đường dành cho xe ô tô'?",
        "tip": "Biển 1: R.403a 'Đường dành cho xe ôtô';<br/>Biển 2: R.404a 'Hết đoạn đường dành cho xe ôtô'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q432.png",
        "no": 429,
        "index": 429,
        "text": "Biển nào báo hiệu 'Hết đoạn đường dành cho xe ô tô'?",
        "tip": "Biển 1: R.403a 'Đường dành cho xe ôtô';<br/>Biển 2: R.404a 'Hết đoạn đường dành cho xe ôtô'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q434.png",
        "no": 430,
        "index": 430,
        "text": "Khi gặp biển nào thì các phương tiện không được đi vào, trừ xe ô tô và xe mô tô?",
        "tip": "Biển 1: R.403b 'Đường dành cho xe ôtô, xe máy';<br/>Biển 2: R.404b 'Hết đoạn đường dành cho xe ôtô, xe máy'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 189,
        "a2": 189,
        "b1": 228,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q435.png",
        "no": 431,
        "index": 431,
        "text": "Biển này có ý nghĩa như thế nào?",
        "tip": "Biển số R.411 'Hướng đi trên mỗi làn đường phải theo'.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ hướng đi phải theo.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển báo hiệu cho người lái xe biết số lượng làn đường trên mặt đường và hướng đi trên mỗi làn đường phải theo.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Chỉ hướng đường phải theo.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 190,
        "a2": 190,
        "b1": 229,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q436.png",
        "no": 432,
        "index": 432,
        "text": "Biển nào (đặt trước ngã ba, ngã tư) cho phép xe được rẽ sang hướng khác?",
        "tip": "Biển 1: R.301a 'Hướng đi phải theo' chỉ được đi thẳng đặt trước ngã ba, ngã tư;<br/>Biển 2: R.301h 'Hướng đi phải theo' chỉ được rẽ trái hoặc rẽ phải đặt sau ngã ba, ngã tư;<br/>Nên đáp án đúng là không có biển nào.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không biển nào.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 191,
        "a2": 191,
        "b1": 230,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q437.png",
        "no": 433,
        "index": 433,
        "text": "Biển nào báo hiệu 'Hướng đi thẳng phải theo'?",
        "tip": "Biển 1: R.301a 'Hướng đi phải theo' chỉ được đi thẳng đặt trước ngã ba, ngã tư;<br/>Biển 2: I.407a 'Đường một chiều' không liên quan hướng đi phải theo.<br/>Nên Biển 1 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 192,
        "a2": 192,
        "b1": 231,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q437.png",
        "no": 434,
        "index": 434,
        "text": "Biển nào báo hiệu 'Đường một chiều'?",
        "tip": "Biển 1: R.301a 'Hướng đi phải theo' chỉ được đi thẳng đặt trước ngã ba, ngã tư;<br/>Biển 2: I.407a 'Đường một chiều';<br/>Nên Biển 2 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 193,
        "a2": 193,
        "b1": 232,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q439.png",
        "no": 435,
        "index": 435,
        "text": "Trong các biển dưới đây biển nào là biển 'Hết tốc độ tối đa cho phép'?",
        "tip": "Biển 1: DP134 'Hết hạn chế tốc độ tối đa'; Biển 2: DP135 'Hết mọi lệnh cấm'; Biển 3: R307 'Hết hạn chế tốc độ tối thiểu'. Nên Biển 1 là biển 'Hết hạn chế tốc độ tối đa'.<br/>Chú ý câu này hỏi ý nghĩa của biển.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 194,
        "a2": 194,
        "b1": 233,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q439.png",
        "no": 436,
        "index": 436,
        "text": "Hiệu lực của biển 'Tốc độ tối đa cho phép' hết tác dụng khi gặp biển nào dưới đây?",
        "tip": "Biển 1: DP134 'Hết hạn chế tốc độ tối đa'; Biển 2: DP135 'Hết mọi lệnh cấm'; Biển 3: R307 'Hết hạn chế tốc độ tối thiểu'. Nên Biển 1 và Biển 2 là đều hết hạn chế tốc độ tối đa.<br/>Chú ý câu hỏi các biển hết hạn chế, không phải ý nghĩa của biển.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 1 và biển 2.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 234,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q439.png",
        "no": 437,
        "index": 437,
        "text": "Trong các biển dưới đây biển nào là biển 'Hết tốc độ tối thiểu'?",
        "tip": "Biển 1: DP134 'Hết hạn chế tốc độ tối đa'; Biển 2: DP135 'Hết mọi lệnh cấm'; Biển 3: R307 'Hết hạn chế tốc độ tối thiểu'. Nên Biển 3 là biển 'Hết hạn chế tốc độ tối thiểu'.<br/>Chú ý câu này hỏi ý nghĩa của biển.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 195,
        "a2": 195,
        "b1": 235,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q442.png",
        "no": 438,
        "index": 438,
        "text": "Biển nào dưới đây báo hiệu hết cấm vượt?",
        "tip": "Biển 1: DP.134 'Hết hạn chế tốc độ tối đa'; Biển 2: DP.135 'Hết tất cả các lệnh cấm'; Biển 3: DP.133 'Hết cấm vượt';<br/>Nên đáp án đúng phải là Biển 2 và Biển 3.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 2 và biển 3.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 196,
        "a2": 196,
        "b1": 236,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q439.png",
        "no": 439,
        "index": 439,
        "text": "Trong các biển dưới đây biển nào là biển 'Hết mọi lệnh cấm'?",
        "tip": "Biển 1: DP.134 'Hết hạn chế tốc độ tối đa'; Biển 2: DP.135 'Hết tất cả các lệnh cấm'; Biển 3: R.307 'Hết hạn chế tốc độ tối thiểu'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 197,
        "a2": 197,
        "b1": 237,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q444.png",
        "no": 440,
        "index": 440,
        "text": "Biển nào cho phép được quay đầu xe đi theo hướng ngược lại khi đặt biển trước ngã ba, ngã tư?",
        "tip": "R.301 (a,b,c,d,e,f,g,h) 'Hướng đi phải theo';<br/>Biển 1: R.301e được đặt ở trước nơi đường giao nhau, chỉ được rẽ trái ở phạm vi nơi đường giao nhau đằng sau mặt biển.<br/>Biển 2: R.301h đặt sau ngã ba, ngã tư, chỉ được phép rẽ trái, quay đầu hoặc rẽ phải ở khu vực ngã ba, ngã tư trước mặt biển.<br/>Biển 3: R.301g được đặt ở trước nơi đường giao nhau, chỉ được phép đi thẳng, rẽ trái hoặc quay đầu xe để đi theo hướng ngược lại.<br/>Biển 3 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Không biển nào.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 198,
        "a2": 198,
        "b1": 238,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q445.png",
        "no": 441,
        "index": 441,
        "text": "Biển nào không cho phép rẽ phải?",
        "tip": "R.301 (a,b,c,d,e,f,g,h) 'Hướng đi phải theo';<br/>Biển 1: R.301e được đặt ở trước nơi đường giao nhau, chỉ được rẽ trái ở phạm vi nơi đường giao nhau đằng sau mặt biển.<br/>Biển 2: R.301h đặt sau ngã ba, ngã tư, chỉ được phép rẽ trái, quay đầu hoặc rẽ phải ở khu vực ngã ba, ngã tư trước mặt biển.<br/>Biển 3: R.301f được đặt ở trước nơi đường giao nhau, chỉ được phép đi thẳng hay rẽ phải ở phạm vi nơi đường giao nhau đằng sau mặt biển.<br/>Biển 1 không cho phép rẽ phải là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 1 và biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 199,
        "a2": 199,
        "b1": 239,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q445.png",
        "no": 442,
        "index": 442,
        "text": "Khi đến chỗ giao nhau, gặp biển nào thì người lái xe không được cho xe đi thẳng, phải rẽ sang hướng khác?",
        "tip": "R.301 (a,b,c,d,e,f,g,h) 'Hướng đi phải theo';<br/>Biển 1: R.301e được đặt ở trước nơi đường giao nhau, chỉ được rẽ trái ở phạm vi nơi đường giao nhau đằng sau mặt biển.<br/>Biển 2: R.301h đặt sau ngã ba, ngã tư, chỉ được phép rẽ trái, quay đầu hoặc rẽ phải ở khu vực ngã ba, ngã tư trước mặt biển.<br/>Biển 3: R.301f được đặt ở trước nơi đường giao nhau, chỉ được phép đi thẳng hay rẽ phải ở phạm vi nơi đường giao nhau đằng sau mặt biển.<br/>Biển 1 và Biển 2 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và biển 2.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 200,
        "a2": 200,
        "b1": 240,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q447.png",
        "no": 443,
        "index": 443,
        "text": "Biển nào cho phép quay đầu xe?",
        "tip": "Biển 1: I.409 'Chỗ quay xe' và Biển 2: I.410 'Khu vực quay xe' nên cả 2 biển đều cho phép quay đầu xe.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 241,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q448.png",
        "no": 444,
        "index": 444,
        "text": "Biển nào chỉ dẫn tên đường trên các tuyến đường đối ngoại?",
        "tip": "Biển 1: R.E,9a 'Cấm đỗ xe trong khu vực';<br/>Biển 2: R.E,9b 'Cấm đỗ xe theo giờ trong khu vực'.<br/>Biển 3: I.449  'Biển tên đường'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Biển 1 và biển 2.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q449.png",
        "no": 445,
        "index": 445,
        "text": "Biển số 1 có ý nghĩa như thế nào?",
        "tip": "Biển 1: R.E,10b 'Hết cấm đỗ xe theo giờ trong khu vực';<br/>Biển 2: R.E,10a 'Hết cấm đỗ xe trong khu vực';<br/>Biển 3: R.E,10c: 'Hết khu vực đỗ xe'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển chỉ dẫn hết cấm đỗ xe theo giờ trong khu vực.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển chỉ dẫn hết hiệu lực khu vực đỗ xe trên các tuyến đường đối ngoại.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển chỉ dẫn khu vực đỗ xe trên các tuyến đường đối ngoại.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 201,
        "a2": 201,
        "b1": 242,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q450.png",
        "no": 446,
        "index": 446,
        "text": "Biển số 3 có ý nghĩa như thế nào?",
        "tip": "Biển 1: R.E,9a 'Cấm đỗ xe trong khu vực'; Biển 2: Biển R.E,10c 'Hết khu vực đỗ xe'; Biển 3: Biển R.E,9d 'Hạn chế tốc độ tối đa trong khu vực'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển chỉ dẫn khu vực cấm đỗ xe trên các tuyến đường đối ngoại.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển chỉ dẫn khu vực đỗ xe trên các tuyến đường đối ngoại.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển hạn chế tốc độ tối đa trong khu vực.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Biển chỉ dẫn hết hiệu lực khu vực cấm đỗ xe theo giờ trên các tuyến đường đối ngoại.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 243,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q451.png",
        "no": 447,
        "index": 447,
        "text": "Biển nào báo hiệu 'Đường phía trước có làn đường dành cho ô tô khách'?",
        "tip": "Biển 1: R.412f 'Làn đường dành cho xe ôtô';<br/>Biển 2: I.413a 'Đường phía trước có làn đường dành cho ô tô khách';<br/>Biển 3 I.413c 'Rẽ ra đường có làn đường dành cho ô tô khách'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q451.png",
        "no": 448,
        "index": 448,
        "text": "Biển nào báo hiệu 'Rẽ ra đường có làn đường dành cho ô tô khách'?",
        "tip": "Biển 1: R.412f 'Làn đường dành cho xe ôtô';<br/>Biển 2: I.413a 'Đường phía trước có làn đường dành cho ô tô khách';<br/>Biển 3 I.413c 'Rẽ ra đường có làn đường dành cho ô tô khách'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q453.png",
        "no": 449,
        "index": 449,
        "text": "Biển nào đặt trên đường chính trước khi đến nơi đường giao nhau để rẽ vào đường cụt?",
        "tip": "Biển số I.405(a,b,c) 'Đường cụt'. Biển 1 và 2: Biển số I.405 (a,b) để chỉ lối rẽ vào đường cụt; Biển 3: Biển số I.405c để chỉ dẫn phía trước là đường cụt.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và 2.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Cả ba biển.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không biển nào.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q454.png",
        "no": 450,
        "index": 450,
        "text": "Biển nào chỉ dẫn cho người đi bộ sử dụng cầu vượt qua đường?",
        "tip": "Biển 1: I424a 'Cầu vượt qua đường cho người đi bộ'; Biển 2: I424c 'Hầm chui qua đường cho người đi bộ' nên đáp án đúng là biển 1.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Không biển nào.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 202,
        "a2": 202,
        "b1": 244,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q455.png",
        "no": 451,
        "index": 451,
        "text": "Biển nào chỉ dẫn cho người đi bộ sử dụng hầm chui qua đường?",
        "tip": "Biển 1: I424b 'Cầu vượt qua đường cho người đi bộ'; Biển 2: I424d 'Hầm chui qua đường cho người đi bộ' nên đáp án đúng là biển 2.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Không biển nào.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 203,
        "a2": 203,
        "b1": 245,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q456.png",
        "no": 452,
        "index": 452,
        "text": "Biển nào báo hiệu 'Nơi đỗ xe dành cho người khuyết tật'?",
        "tip": "Biển 1: R.304 'Đường dành cho xe thô sơ';<br/>Biển 2: I.446 'Nơi đỗ xe dành cho người khuyết tật';<br/>Biển 3: R.305 'Đường dành cho người đi bộ'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 204,
        "a2": 204,
        "b1": 246,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q457.png",
        "no": 453,
        "index": 453,
        "text": "Gặp biển báo này, người lái xe phải đỗ xe như thế nào?",
        "tip": "Biển số 408a 'Nơi đỗ xe một phần trên hè phố'.",
        "answers": [
            {
                "id": 1,
                "text": "Đỗ xe hoàn toàn trên hè phố.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đỗ xe hoàn toàn dưới lòng đường.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Đỗ từ 1/2 thân xe trở lên trên hè phố.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q458.png",
        "no": 454,
        "index": 454,
        "text": "Gặp biển báo này, người tham gia giao thông phải xử lý như thế nào?",
        "tip": "Biển I.436 'Trạm cảnh sát giao thông'. Các phương tiện phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này.",
        "answers": [
            {
                "id": 1,
                "text": "Dừng xe tại khu vực có trạm Cảnh sát giao thông.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Tiếp tục lưu thông với tốc độ bình thường.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 205,
        "a2": 205,
        "b1": 247,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q459.png",
        "no": 455,
        "index": 455,
        "text": "Gặp biển báo dưới đây, người lái xe có bắt buộc phải chạy vòng theo đảo an toàn theo hướng mũi tên khi muốn chuyển hướng hay không?",
        "tip": "Biển số R.303 'Nơi giao nhau chạy theo vòng xuyến'.",
        "answers": [
            {
                "id": 1,
                "text": "Bắt buộc.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Không bắt buộc.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 206,
        "a2": 206,
        "b1": 248,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q460.png",
        "no": 456,
        "index": 456,
        "text": "Biển nào dưới đây chỉ dẫn địa giới hành chính giữa các thành phố, tỉnh, huyện?",
        "tip": "Biển 1: I.414a 'Chỉ hướng đường'; Biển 2: I.419a 'Chỉ dẫn địa giới'; Biển 3: I.422 'Di tích lịch sử'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 249,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q461.png",
        "no": 457,
        "index": 457,
        "text": "Biển nào báo hiệu 'Cầu vượt liên thông'?",
        "tip": "Biển 1: I.447d 'Cầu vượt liên thông'; Biển 2: R.308b 'Tuyến đường cầu vượt cắt qua'; Biển 3: I.447a 'Cầu vượt liên thông';",
        "answers": [
            {
                "id": 1,
                "text": "Biển 2 và biển 3.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 1 và biển 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 207,
        "a2": 207,
        "b1": 250,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q462.png",
        "no": 458,
        "index": 458,
        "text": "Biển số 1 có ý nghĩa như thế nào?",
        "tip": "Biển 1: I.447d 'Cầu vượt liên thông'; Biển 2, Biển 3: R.308 (a,b) 'Tuyến đường cầu vượt cắt qua'.",
        "answers": [
            {
                "id": 1,
                "text": "Đi thẳng hoặc rẽ trái trên cầu vượt.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đi thẳng hoặc rẽ phải trên cầu vượt.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Báo hiệu cầu vượt liên thông.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 208,
        "a2": 208,
        "b1": 251,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q463.png",
        "no": 459,
        "index": 459,
        "text": "Biển nào báo hiệu 'Tuyến đường cầu vượt cắt qua'?",
        "tip": "Biển 1, Biển 2: R.308 (a,b) 'Tuyến đường cầu vượt cắt qua'; Biển 3: W.237 'Cầu vồng'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và biển 2.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 209,
        "a2": 209,
        "b1": 252,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q464.png",
        "no": 460,
        "index": 460,
        "text": "Biển báo dưới đây có ý nghĩa như thế nào?",
        "tip": "Biển số I.448 'Làn đường cứu nạn hay làn thoát xe khẩn cấp'.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ dẫn khoảng cách đến làn đường cứu nạn (làn thoát xe khẩn cấp).",
                "correct": true
            },
            {
                "id": 2,
                "text": "Báo hiệu đường cụt phía trước.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Báo hiệu nút giao gần nhất phía trước.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Báo hiệu trạm dừng nghỉ phía trước.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 210,
        "a2": 210,
        "b1": 253,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q465.png",
        "no": 461,
        "index": 461,
        "text": "Tại đoạn đường có biển 'Làn đường dành riêng cho từng loại xe' dưới đây, các phương tiện có được phép chuyển sang làn khác để đi theo hành trình mong muốn khi đến gần nơi đường bộ giao nhau hay không?",
        "tip": "Biển số R.412 (a,b,c,d,e,f,g,h) 'Làn đường dành riêng cho từng loại xe hoặc nhóm xe': Khi đến gần nơi đường bộ giao nhau, xe được phép chuyển làn để đi theo hành trình mong muốn. Việc chuyển làn phải thực hiện theo đúng các quy định.",
        "answers": [
            {
                "id": 1,
                "text": "Được phép chuyển sang làn khác.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Không được phép chuyển sang làn khác, chỉ được đi trong làn quy định theo biển.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 211,
        "a2": 211,
        "b1": 254,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q466.png",
        "no": 462,
        "index": 462,
        "text": "Tại đoạn đường có cắm biển dưới đây, xe tải và xe khách có được phép đi vào không?",
        "tip": "Biển số R.403a 'Đường dành cho ôtô' nên xe tải và xe khách đi vào được.",
        "answers": [
            {
                "id": 1,
                "text": "Có.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Không.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q467.png",
        "no": 463,
        "index": 463,
        "text": "Tại đoạn đường có cắm biển dưới đây, xe tải và xe khách có được phép đi vào không?",
        "tip": "Biển số R.403d 'Đường dành cho ôtô con' nên xe tải và xe khách KHÔNG được phép đi vào.",
        "answers": [
            {
                "id": 1,
                "text": "Có.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q468.png",
        "no": 464,
        "index": 464,
        "text": "Biển nào báo hiệu kết thúc đường cao tốc?",
        "tip": "Biển 1: I.402 'Hết đoạn đường ưu tiên'; Biển 2: IE.453b chỉ dẫn điểm kết thúc đường cao tốc; Biển 3: R.404a 'Hết đoạn đường dành cho xe ôtô'.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q469.png",
        "no": 465,
        "index": 465,
        "text": "Biển này có ý nghĩa như thế nào?",
        "tip": "Biển IE.467b chỉ dẫn cho người điều khiển phương tiện giao thông biết trước sắp đến vị trí nhập làn xe.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ dẫn sắp đến vị trí nhập làn xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chỉ dẫn vị trí nhập làn xe cách 250 m.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Chỉ dẫn vị trí nhập làn cách trạm thu phí 250 m.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q466n.png",
        "no": 466,
        "index": 466,
        "text": "Biển nào chỉ dẫn nhập làn xe?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q470.png",
        "no": 467,
        "index": 467,
        "text": "Biển này có ý nghĩa như thế nào?",
        "tip": "Biển số IE.452 chỉ dẫn bắt đầu đường cao tốc, bao gồm các thông tin về tên và ký hiệu đường cao tốc, giá trị hạn chế tốc độ tối đa và tốc độ tối thiểu.",
        "answers": [
            {
                "id": 1,
                "text": "Bắt đầu đường cao tốc.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chỉ dẫn địa giới đường cao tốc, chiều dài đường cao tốc.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tên và ký hiệu đường cao tốc, giá trị hạn chế tốc độ tối đa và tối thiểu.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Ý 1 và ý 3.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q471.png",
        "no": 468,
        "index": 468,
        "text": "Ý nghĩa các biểu tượng ghi trên biển chỉ dẫn là như thế nào?",
        "tip": "Biển số IE.456a thông báo khoảng cách đến trạm dừng nghỉ với 4 dịch vụ: xăng dầu, ăn uống, thông tin và sửa chữa xe.",
        "answers": [
            {
                "id": 1,
                "text": "Xăng dầu, ăn uống, thông tin, sửa chữa xe.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xăng dầu, ăn uống, nhà nghỉ, sửa chữa xe.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xăng dầu, ăn uống, cấp cứu, sửa chữa xe.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q472.png",
        "no": 469,
        "index": 469,
        "text": "Biển này có ý nghĩa như thế nào?",
        "tip": "Biển số IE.463a chỉ dẫn khoảng cách đến trạm kiểm tra tải trọng xe",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ dẫn đến trạm kiểm tra tải trọng xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chỉ dẫn hướng rẽ vào nơi đặt trạm kiểm tra tải trọng xe.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Chỉ dẫn khoảng cách đến trạm kiểm tra tải trọng xe cách 750 m.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q473.png",
        "no": 470,
        "index": 470,
        "text": "Trên đường cao tốc, gặp biển nào thì người lái xe đi theo hướng bên trái để tránh chướng ngại vật?",
        "tip": "Biển 1: IE.468a chỉ dẫn đi theo hướng bên trái;<br/>Biển 2: IE.468b chỉ dẫn đi được cả hai hướng;<br/>Biển 3: IE.468c chỉ dẫn đi theo hướng bên phải.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q473.png",
        "no": 471,
        "index": 471,
        "text": "Trên đường cao tốc, gặp biển nào thì người lái xe đi theo hướng bên phải để tránh chướng ngại vật?",
        "tip": "Biển 1: IE.468a chỉ dẫn đi theo hướng bên trái;<br/>Biển 2: IE.468b chỉ dẫn đi được cả hai hướng;<br/>Biển 3: IE.468c chỉ dẫn đi theo hướng bên phải.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q473.png",
        "no": 472,
        "index": 472,
        "text": "Trên đường cao tốc, gặp biển nào thì người lái xe đi được cả hai hướng (bên trái hoặc bên phải) để tránh chướng ngại vật?",
        "tip": "Biển 1: IE.468a chỉ dẫn đi theo hướng bên trái;<br/>Biển 2: IE.468b chỉ dẫn đi được cả hai hướng;<br/>Biển 3: IE.468c chỉ dẫn đi theo hướng bên phải.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q476.png",
        "no": 473,
        "index": 473,
        "text": "Trên đường cao tốc, gặp biển nào người lái xe phải chú ý đổi hướng đi khi sắp vào đường cong nguy hiểm?",
        "tip": "Biển 1 và Biển 3: Biển số IE.469 (tiêu phản quang) chỉ dẫn hướng rẽ để nhắc người điều khiển phương tiện chuẩn bị đổi hướng đi khi sắp vào đường cong nguy hiểm;<br/>Biển 2: IE.468b chỉ dẫn đi được cả hai hướng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và biển 2.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và biển 3.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q474n.png",
        "no": 474,
        "index": 474,
        "text": "Biển nào chỉ dẫn người lái xe đi được cả hai hướng?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 212,
        "a2": 212,
        "b1": 255,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q475n.png",
        "no": 475,
        "index": 475,
        "text": "Biển này có ý nghĩa như thế nào?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ dẫn chướng ngại vật phía trước để cảnh báo phía trước có sự cản trở lưu thông bình thường (nằm bên trong phần xe chạy hay ngay sát phần đường xe chạy) và chỉ dẫn hướng đi qua đó cần đặt biển.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chỉ dẫn hướng rẽ để nhắc người điều khiển phương tiện chuẩn bị đổi hướng đi khi sắp vào đường cong nguy hiểm, có bán kính cong nhỏ.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 213,
        "a2": 213,
        "b1": 256,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q477.png",
        "no": 476,
        "index": 476,
        "text": "Vạch mũi tên chỉ hướng trên mặt đường nào dưới đây cho phép xe chỉ được đi thẳng và rẽ phải?",
        "tip": "Vạch 9.3: Vạch mũi tên chỉ hướng trên mặt đường chỉ hướng xe phải đi: Vạch 1 chỉ được rẽ phải; Vạch 2 đi thẳng và rẽ trái; Vạch 3 đi thẳng và rẽ phải;",
        "answers": [
            {
                "id": 1,
                "text": "Vạch 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Vạch 2 và vạch 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Vạch 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Vạch 1 và vạch 2.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 214,
        "a2": 214,
        "b1": 257,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q478.png",
        "no": 477,
        "index": 477,
        "text": "Vạch kẻ đường nào dưới đây là vạch phân chia các làn xe cùng chiều?",
        "tip": "Vạch 1: Phân chia các làn xe cùng chiều, cho phép lấn làn đè vạch;<br/>Vạch 2: Phân chia các làn xe cùng chiều, không cho phép lấn làn, không cho phép đè vạch;<br/> Vạch 3: Phân chia hai chiều xe chạy ngược chiều, xe không được lấn làn, không được đè lên vạch.",
        "answers": [
            {
                "id": 1,
                "text": "Vạch 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Vạch 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Vạch 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Vạch 1 và vạch 2.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 258,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q479.png",
        "no": 478,
        "index": 478,
        "text": "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường), xe không được lấn làn, không được đè lên vạch?",
        "tip": "Vạch 1: Phân chia các làn xe cùng chiều, cho phép lấn làn đè vạch;<br/>Vạch 2: Phân chia hai chiều xe chạy ngược chiều; xe không được lấn làn, không được đè lên vạch.<br/>Vạch 3: Phân chia các làn xe cùng chiều, không cho phép lấn làn, không cho phép đè vạch;",
        "answers": [
            {
                "id": 1,
                "text": "Vạch 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Vạch 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Vạch 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba vạch.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 215,
        "a2": 215,
        "b1": 259,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q480.png",
        "no": 479,
        "index": 479,
        "text": "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường)?",
        "tip": "Vạch 1: Phân chia hai chiều xe chạy ngược chiều. Xe được phép cắt qua để sử dụng làn ngược chiều từ cả hai phía;<br/>Vạch 2: Phân chia các làn xe cùng chiều, cho phép lấn làn đè vạch;<br/>Vạch 3: Phân chia hai chiều xe chạy ngược chiều; xe không được lấn làn, không được đè lên vạch.",
        "answers": [
            {
                "id": 1,
                "text": "Vạch 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Vạch 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Vạch 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Vạch 1 và vạch 3.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 260,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q481.png",
        "no": 480,
        "index": 480,
        "text": "Các vạch dưới đây có tác dụng như thế nào?",
        "tip": "Vạch 1: Phân chia hai chiều xe chạy ngược chiều, cho phép lấn làn, đè vạch ở cả 2 chiều;<br/>Vạch 2: Phân chia hai chiều xe chạy ngược chiều; xe không được lấn làn, không được đè lên vạch;<br/>Vạch 3: Phân chia hai chiều xe chạy ngược chiều có 4 làn xe cơ giới trở lên; xe không được lấn làn, không được đè lên vạch.",
        "answers": [
            {
                "id": 1,
                "text": "Phân chia hai chiều xe chạy ngược chiều nhau.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Phân chia các làn xe chạy cùng chiều nhau.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 261,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q482.png",
        "no": 481,
        "index": 481,
        "text": "Các vạch dưới đây có tác dụng như thế nào?",
        "tip": "Vạch 1: Phân chia các làn xe cùng chiều, cho phép lấn làn đè vạch;<br/>Vạch 2: Phân chia các làn xe cùng chiều, không cho phép lấn làn, không cho phép đè vạch;",
        "answers": [
            {
                "id": 1,
                "text": "Phân chia hai chiều xe chạy ngược chiều nhau.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Phân chia các làn xe chạy cùng chiều nhau.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 262,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q483.png",
        "no": 482,
        "index": 482,
        "text": "Khi gặp vạch kẻ đường nào các xe được phép đè vạch?",
        "tip": "Vạch 1: Phân chia hai chiều xe chạy ngược chiều, cho phép lấn làn, đè vạch ở cả 2 chiều;<br/>Vạch 2: Phân chia các làn xe cùng chiều, không cho phép lấn làn, không cho phép đè vạch;<br/>Vạch 3: Phân chia các làn xe cùng chiều, cho phép lấn làn đè vạch;",
        "answers": [
            {
                "id": 1,
                "text": "Vạch 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Vạch 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Vạch 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Vạch 1 và vạch 3.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 263,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q484.png",
        "no": 483,
        "index": 483,
        "text": "Vạch dưới đây có tác dụng như thế nào?",
        "tip": "Vạch 7.8: Vạch xác định khoảng cách xe trên đường.",
        "answers": [
            {
                "id": 1,
                "text": "Để xác định làn đường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Báo hiệu người lái xe chỉ được phép đi thẳng.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dùng để xác định khoảng cách giữa các phương tiện trên đường.",
                "correct": true
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 264,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q485.png",
        "no": 484,
        "index": 484,
        "text": "Vạch dưới đây có ý nghĩa như thế nào?",
        "tip": "Vạch 7.6: Vạch chỉ dẫn sắp đến chỗ có bố trí vạch đi bộ qua đường.",
        "answers": [
            {
                "id": 1,
                "text": "Báo cho người điều khiển không được dừng phương tiện trong phạm vi phần mặt đường có bố trí vạch để tránh ùn tắc giao thông.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Báo hiệu sắp đến chỗ có bố trí vạch đi bộ qua đường.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Dùng để xác định khoảng cách giữa các phương tiện trên đường.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q486.png",
        "no": 485,
        "index": 485,
        "text": "Vạch dưới đây có ý nghĩa như thế nào?",
        "tip": "Vạch 9.2: Vạch quy định vị trí dừng đỗ của phương tiện giao thông công cộng trên đường.",
        "answers": [
            {
                "id": 1,
                "text": "Vị trí dừng xe của các phương tiện vận tải hành khách công cộng.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Báo cho người điều khiển được dừng phương tiện trong phạm vi phần mặt đường có bố trí vạch để tránh ùn tắc giao thông.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dùng để xác định vị trí giữa các phương tiện trên đường.",
                "correct": false
            }
        ],
        "topic": 5,
        "a1": 0,
        "a2": 0,
        "b1": 265,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q503.png",
        "no": 486,
        "index": 486,
        "text": "Theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?",
        "tip": "1. Xe khách: Sai làn, Đi thẳng đèn đang đỏ;<br/>2. Xe tải: Sai làn: Đi trên làn đi thẳng trong khi thực hiện rẽ trái.<br/>3. Xe mô tô: Sai làn: Đi trên làn rẽ trái trong khi thực hiện rẽ phải,<br/>4. Xe con: Đèn xanh rẽ phải: Đúng đèn đúng làn.",
        "answers": [
            {
                "id": 1,
                "text": "Xe khách, xe tải, xe mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe tải, xe mô tô.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Chỉ xe con.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 216,
        "a2": 216,
        "b1": 266,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q487.png",
        "no": 487,
        "index": 487,
        "text": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.<br/>1. Xe tải: Đường ưu tiên và đi thẳng;<br/>2. Mô tô: Đường ưu tiên và rẽ trái;<br/>3. Xe khách: Đường không ưu tiên, đi thẳng.<br/>4. Xe con: Đường không ưu tiên, rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Xe tải, xe khách, xe con, xe mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe tải, xe mô tô, xe khách, xe con.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe khách, xe tải, xe con, xe mô tô.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Xe mô tô, xe khách, xe tải, xe con.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 217,
        "a2": 217,
        "b1": 267,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q488.png",
        "no": 488,
        "index": 488,
        "text": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.<br/>1. Xe công an: Xe ưu tiên.<br/>2. Xe con: Đường ưu tiên.<br/>3. Xe tải: Đường không ưu tiên, đi thẳng.<br/>4. Xe khách: Đường không ưu tiên, rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Xe công an đi làm nhiệm vụ khẩn cấp, xe con, xe tải, xe khách.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe công an đi làm nhiệm vụ khẩn cấp, xe khách, xe con, xe tải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe công an đi làm nhiệm vụ khẩn cấp, xe tải, xe khách, xe con.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Xe con, xe công an đi làm nhiệm vụ khẩn cấp, xe tải, xe khách.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q489.png",
        "no": 489,
        "index": 489,
        "text": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.<br/>1. Xe công an: Xe ưu tiên; <br/>2. Xe tải: Đường ưu tiên;<br/>3. Xe khách: Đường không ưu tiên, bên phải trống;<br/>4. Xe con: Đường không ưu tiên, bên phải vướng xe khách nên phải nhường.",
        "answers": [
            {
                "id": 1,
                "text": "Xe tải, xe công an đi làm nhiệm vụ khẩn cấp, xe khách, xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe công an đi làm nhiệm vụ khẩn cấp, xe khách, xe con, xe tải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe công an đi làm nhiệm vụ khẩn cấp, xe con, xe tải, xe khách.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Xe công an đi làm nhiệm vụ khẩn cấp, xe tải, xe khách, xe con.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q490.png",
        "no": 490,
        "index": 490,
        "text": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.<br/>1. Xe mô tô: Bên phải trống;<br/>2. Xe con: Đi thẳng;<br/>3. Xe tải: Rẽ trái;",
        "answers": [
            {
                "id": 1,
                "text": "Xe tải, xe con, xe mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con, xe tải, xe mô tô.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe mô tô, xe con, xe tải.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Xe con, xe mô tô, xe tải.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 218,
        "a2": 218,
        "b1": 268,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q491.png",
        "no": 491,
        "index": 491,
        "text": "Xe nào phải nhường đường trong trường hợp này?",
        "tip": "Giao nhau cùng cấp có vòng xuyến: Chưa vào vòng xuyến thì ưu tiên xe bên phải; đã vào vòng xuyến ưu tiên xe từ bên trái tới.<br/>Xe con nhường vì thấy xe tải từ bên trái tới đã nằm trong vòng xuyến.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe tải.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q492.png",
        "no": 492,
        "index": 492,
        "text": "Trường hợp này xe nào được quyền đi trước?",
        "tip": "Xe con được đi trước vì mô tô có biển STOP trước mặt.",
        "answers": [
            {
                "id": 1,
                "text": "Xe mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 219,
        "a2": 219,
        "b1": 269,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q493.png",
        "no": 493,
        "index": 493,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe vào ngã ba, ngã tư trước - Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái..<br/>1. Xe con (A): Đã vào ngã tư trước;<br/>2. Xe cứu thương: Xe ưu tiên;<br/>3. Xe con (B);",
        "answers": [
            {
                "id": 1,
                "text": "Xe con (A), xe cứu thương đi làm nhiệm vụ cấp cứu, xe con (B).",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe cứu thương đi làm nhiệm vụ cấp cứu, xe con (B), xe con (A).",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe con (B), xe con (A), xe cứu thương đi làm nhiệm vụ cấp cứu.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q494.png",
        "no": 494,
        "index": 494,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự xe ưu tiên: Xe cứu hoả (mức độ thương vong lớn hơn); Xe công an; Xe cứu thương.",
        "answers": [
            {
                "id": 1,
                "text": "Xe cứu thương đi làm nhiệm vụ cấp cứu, xe chữa cháy đi làm nhiệm vụ chữa cháy, xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe chữa cháy đi làm nhiệm vụ chữa cháy, xe cứu thương đi làm nhiệm vụ cấp cứu, xe con.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe cứu thương đi làm nhiệm vụ cấp cứu, xe con, xe chữa cháy đi làm nhiệm vụ chữa cháy.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q495.png",
        "no": 495,
        "index": 495,
        "text": "Xe nào được quyền đi trước trong trường hợp này?",
        "tip": "Xe ưu tiên đi trước.",
        "answers": [
            {
                "id": 1,
                "text": "Xe mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe cứu thương đi làm nhiệm vụ cấp cứu.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 220,
        "a2": 220,
        "b1": 270,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q496.png",
        "no": 496,
        "index": 496,
        "text": "Theo hướng mũi tên, xe nào phải nhường đường đi cuối cùng qua nơi giao nhau này?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.<br/>1. Xe con: Đường ưu tiên;<br/>2. Xe tải: Đường không ưu tiên, rẽ phải;<br/>3. Xe khách: Đường không ưu tiên, rẽ trái (Đáp án đúng).",
        "answers": [
            {
                "id": 1,
                "text": "Xe khách.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe tải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe con.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q497.png",
        "no": 497,
        "index": 497,
        "text": "Theo hướng mũi tên, xe nào phải nhường đường là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.<br/>Xe tải bên phải trống nên đi trước;<br/>Đáp án đúng là Xe con phải nhường đường: Bên phải vướng xe tải.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe tải.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q498.png",
        "no": 498,
        "index": 498,
        "text": "Xe nào được quyền đi trước trong trường hợp này?",
        "tip": "Xe ưu tiên theo mức độ thiệt hại: Xe chữa cháy ưu tiên hơn.",
        "answers": [
            {
                "id": 1,
                "text": "Xe công an đi làm nhiệm vụ khẩn cấp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe chữa cháy đi làm nhiệm vụ chữa cháy.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q499.png",
        "no": 499,
        "index": 499,
        "text": "Theo tín hiệu đèn, xe nào được phép đi?",
        "tip": "Xe con và xe khách đang ở làn đường có tín hiệu đèn xanh nên được phép đi.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con và xe khách.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe mô tô.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 221,
        "a2": 221,
        "b1": 271,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q500.png",
        "no": 500,
        "index": 500,
        "text": "Theo tín hiệu đèn, xe nào đi là đúng quy tắc giao thông?",
        "tip": "Xe con và xe tải đang ở trên làn đường có tín hiệu đèn xanh nên được phép đi.",
        "answers": [
            {
                "id": 1,
                "text": "Xe khách, xe mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con, xe tải.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe tải, xe mô tô.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 222,
        "a2": 222,
        "b1": 272,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q501.png",
        "no": 501,
        "index": 501,
        "text": "Trong trường hợp này xe nào được quyền đi trước?",
        "tip": "Xe ưu tiên cùng cấp nên áp dụng thứ tự đường cùng cấp: Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>Xe quân sự được ưu tiên trước do bên phải trống.",
        "answers": [
            {
                "id": 1,
                "text": "Xe công an đi làm nhiệm vụ khẩn cấp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe quân sự đi làm nhiệm vụ khẩn cấp.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q502.png",
        "no": 502,
        "index": 502,
        "text": "Theo tín hiệu đèn, xe tải đi theo hướng nào là đúng quy tắc giao thông?",
        "tip": "Hướng 1 rẽ phải có tín hiệu đèn xanh nên được phép đi. Hướng đi thẳng đang có tín hiệu đèn đỏ do đó các hướng 2,3,4 không thể đi được. Câu trả lời đúng là chỉ có hướng 1.",
        "answers": [
            {
                "id": 1,
                "text": "Hướng 2, 3, 4.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chỉ hướng 1.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Hướng 1 và 2.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Hướng 3 và 4.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q503.png",
        "no": 503,
        "index": 503,
        "text": "Các xe đi theo hướng mũi tên, những xe nào vi phạm quy tắc giao thông?",
        "tip": "1. Xe khách: Sai làn, Đi thẳng đèn đang đỏ;<br/>2. Xe tải: Sai làn: Đi trên làn đi thẳng trong khi thực hiện rẽ trái.<br/>3. Xe mô tô: Sai làn: Đi trên làn rẽ trái trong khi thực hiện rẽ phải,<br/>Nên đáp án đúng là xe khách, xe tải và xe mô tô đều vi phạm quy tắc giao thông.",
        "answers": [
            {
                "id": 1,
                "text": "Xe khách, xe tải, xe mô tô.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe tải, xe con, xe mô tô.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe khách, xe con, xe mô tô.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 223,
        "a2": 223,
        "b1": 273,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q504.png",
        "no": 504,
        "index": 504,
        "text": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Giao nhau cùng cấp có vòng xuyến: Chưa vào vòng xuyến thì ưu tiên xe bên phải; đã vào vòng xuyến ưu tiên xe từ bên trái tới.<br/>Toàn bộ các xe chưa vào phòng xuyến nên ưu tiên xe bên phải.<br/>Thứ tự sẽ là Mô tô, xe tải, xe khách, xe con.",
        "answers": [
            {
                "id": 1,
                "text": "Xe khách, xe tải, xe mô tô, xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con, xe khách, xe tải, xe mô tô.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe mô tô, xe tải, xe khách, xe con.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Xe mô tô, xe tải, xe con, xe khách.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 224,
        "a2": 224,
        "b1": 274,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q505.png",
        "no": 505,
        "index": 505,
        "text": "Trong trường hợp này xe nào đỗ vi phạm quy tắc giao thông?",
        "tip": "Biển cấm đỗ xe tải (ở biển phụ) nên chỉ có xe tải vi phạm.",
        "answers": [
            {
                "id": 1,
                "text": "Xe tải.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe con và mô tô.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ba xe.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Xe con và xe tải.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 225,
        "a2": 225,
        "b1": 275,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q506.png",
        "no": 506,
        "index": 506,
        "text": "Theo hướng mũi tên, xe nào được quyền đi trước?",
        "tip": "Thứ tự ưu tiên không vòng xuyến: Xe vào ngã ba, ngã tư trước - Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.<br/>Đáp án đúng là Xe con (B): Đường ưu tiên;",
        "answers": [
            {
                "id": 1,
                "text": "Xe tải.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con (B).",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe con (A).",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q507.png",
        "no": 507,
        "index": 507,
        "text": "Theo hướng mũi tên, những hướng nào xe gắn máy được phép đi?",
        "tip": "Bạn lưu ý câu hỏi này hỏi về hướng đi của xe <b>GẮN MÁY</b>. Hướng 1 và 3 chắc chắn là đi được rồi.<br/>Với hướng 2, biển báo cấm mô tô đi vào chỉ có tác dụng với xe MÔ TÔ nên xe gắn máy không có hiệu lực. Do đó vẫn đi vào bình thường.",
        "answers": [
            {
                "id": 1,
                "text": "Cả ba hướng.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Chỉ hướng 1 và 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Chỉ hướng 1.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 226,
        "a2": 226,
        "b1": 276,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q508.png",
        "no": 508,
        "index": 508,
        "text": "Xe nào đỗ vi phạm quy tắc giao thông?",
        "tip": "Biển cấm đỗ xe ở cả phía trước và phía sau biển (ở biển báo phụ) nên cả 2 xe vi phạm.",
        "answers": [
            {
                "id": 1,
                "text": "Cả hai xe.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Không xe nào vi phạm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Chỉ xe mô tô vi phạm.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Chỉ xe tải vi phạm.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 227,
        "a2": 227,
        "b1": 277,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q509.png",
        "no": 509,
        "index": 509,
        "text": "Xe nào đỗ vi phạm quy tắc giao thông?",
        "tip": "Xe tải đậu trái đường; Xe con và mô tô đậu xe đè vạch nên cả 3 xe vi phạm.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ xe mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chỉ xe tải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ba xe.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Chỉ xe mô tô và xe tải.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 228,
        "a2": 228,
        "b1": 278,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q510.png",
        "no": 510,
        "index": 510,
        "text": "Xe tải kéo xe mô tô ba bánh như hình này có đúng quy tắc giao thông không?",
        "tip": "Xe tải kéo xe mô tô 3 bánh như trên hình là không đúng vì đi vào đường có biển P.108 'Cấm ô tô kéo moóc' kể cả xe máy kéo, xe ô tô khách kéo theo rơ moóc đi qua.",
        "answers": [
            {
                "id": 1,
                "text": "Đúng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không đúng.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q511.png",
        "no": 511,
        "index": 511,
        "text": "Theo hướng mũi tên, hướng nào xe không được phép đi?",
        "tip": "Hướng 1 có biển cấm ô tô nên xe ô tô đương nhiên không được phép đi vào rồi.",
        "answers": [
            {
                "id": 1,
                "text": "Hướng 2 và 5.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chỉ hướng 1.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q512.png",
        "no": 512,
        "index": 512,
        "text": "Theo hướng mũi tên, những hướng nào xe ô tô không được phép đi?",
        "tip": "Biển P.123a 'Cấm rẽ trái' không cấm quay đầu xe nên chỉ có hướng 3 là hướng ô tô không được phép đi.",
        "answers": [
            {
                "id": 1,
                "text": "Hướng 1 và 2.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Hướng 3.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Hướng 1 và 4.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Hướng 2 và 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q513.png",
        "no": 513,
        "index": 513,
        "text": "Xe nào vượt đúng quy tắc giao thông?",
        "tip": "Biển số P.126 'Cấm ô tô tải vượt' nên không áp dụng với xe con và xe khách.",
        "answers": [
            {
                "id": 1,
                "text": "Cả hai xe đều đúng.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe con.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe khách.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q514.png",
        "no": 514,
        "index": 514,
        "text": "Theo hướng mũi tên, gặp biển hướng đi phải theo đặt trước ngã tư, những hướng nào xe được phép đi?",
        "tip": "Biển R.301g được đặt ở trước nơi đường giao nhau, chỉ được phép đi thẳng, rẽ trái hoặc quay đầu xe để đi theo hướng ngược lại.<br/>Đáp án đúng là hướng 2 và hướng 3.",
        "answers": [
            {
                "id": 1,
                "text": "Hướng 2 và 3.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Hướng 1, 2 và 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Hướng 1 và 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q515.png",
        "no": 515,
        "index": 515,
        "text": "Xe kéo nhau như hình này có vi phạm quy tắc giao thông không?",
        "tip": "Xe kéo rơ moóc, xe kéo sơ mi rơ moóc đã kéo rơ moóc thì không được kéo thêm xe khác nên trường hợp này là vi phạm.",
        "answers": [
            {
                "id": 1,
                "text": "Không.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Vi phạm.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q516.png",
        "no": 516,
        "index": 516,
        "text": "Xe nào phải nhường đường trong trường hợp này?",
        "tip": "Phía trước xe tải có biển báo được ưu tiên qua đường hẹp nên được đi trước.<br/>Hoặc phía trước xe khách có biển báo nhường cho xe ngược chiều qua đường hẹp.",
        "answers": [
            {
                "id": 1,
                "text": "Xe khách.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe tải.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q517.png",
        "no": 517,
        "index": 517,
        "text": "Xe nào được quyền đi trước trong trường hợp này?",
        "tip": "Cả 2 xe đều gặp đèn xanh nên áp dụng quy tắc đường cùng cấp: Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>Nên đáp án đúng là xe mô tô rẽ phải được quyền đi trước. Xe con rẽ trái phải nhường đường.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe mô tô.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 229,
        "a2": 229,
        "b1": 279,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q518.png",
        "no": 518,
        "index": 518,
        "text": "Xe kéo nhau trong trường hợp này đúng quy định không?",
        "tip": "Xe đầu kéo (xe container) đã kéo rơmoóc, sơmi rơmoóc không được phép kéo thêm rơmoóc hoặc xe khác, vật khác.",
        "answers": [
            {
                "id": 1,
                "text": "Không đúng.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Đúng.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q519.png",
        "no": 519,
        "index": 519,
        "text": "Theo hướng mũi tên, những hướng nào xe ô tô con được phép đi?",
        "tip": "Biển số R.301d 'Chỉ được rẽ phải' chỉ áp dụng với xe tải (biển phụ) nên không áp dụng với xe con.<br/>Hướng 2 cấm xe con không được đi vào, còn hướng 1, 3 và 4 xe con đều được phép đi.",
        "answers": [
            {
                "id": 1,
                "text": "Hướng 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Hướng 1, 3 và 4.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Hướng 2, 3 và 4.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả bốn hướng.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q520.png",
        "no": 520,
        "index": 520,
        "text": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên đường cùng cấp: Xe ưu tiên - Đường ưu tiên - Bên phải trống - rẽ phải - đi thẳng - rẽ trái.<br/>1. Mô tô và xe đạp: Bên phải trống;<br/>2. Xe con (A): Đi thẳng;<br/>3. Xe con (B): Rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con (A), xe mô tô, xe con (B), xe đạp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con (B), xe đạp, xe mô tô, xe con (A).",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe con (A), xe con (B), xe mô tô + xe đạp.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Xe mô tô + xe đạp, xe con (A), xe con (B).",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 230,
        "a2": 230,
        "b1": 280,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q521.png",
        "no": 521,
        "index": 521,
        "text": "Theo hướng mũi tên, những hướng nào xe tải được phép đi?",
        "tip": "Biển số R.301d 'Chỉ được rẽ phải' áp dụng với xe tải (biển phụ) nên hướng 3, 4 rẽ trái bị cấm.<br/>Hướng 2 có biển cấm xe tải đi vào.<br/>Nên xe tải chỉ có thể chạy theo hướng 1 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ hướng 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Hướng 1, 3 và 4.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Hướng 1, 2 và 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả bốn hướng.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q522.png",
        "no": 522,
        "index": 522,
        "text": "Những hướng nào xe tải được phép đi?",
        "tip": "Xe tải cấm rẽ phải (biển phụ) nên chỉ đi được hướng 2 và hướng 3.",
        "answers": [
            {
                "id": 1,
                "text": "Cả ba hướng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Hướng 2 và 3.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q523.png",
        "no": 523,
        "index": 523,
        "text": "Những hướng nào xe ô tô tải được phép đi?",
        "tip": "Hướng 2,3,4 bị cấm do có biển cấm xe ô tô đi vào.<br/>Hướng 1 và 5 xe tải đi được bình thường.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ hướng 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Hướng 1 và 4.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Hướng 1 và 5.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Hướng 1, 4 và 5.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q524.png",
        "no": 524,
        "index": 524,
        "text": "Những hướng nào xe ô tô tải được phép đi?",
        "tip": "Hướng 2 có biển cấm xe tải nên xe tải không được phép đi vào.",
        "answers": [
            {
                "id": 1,
                "text": "Cả bốn hướng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Trừ hướng 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Hướng 2, 3 và 4.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Trừ hướng 4.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q525.png",
        "no": 525,
        "index": 525,
        "text": "Xe nào được quyền đi trước trong trường hợp này?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>Xe mô tô rẽ trái từ đường ưu tiên vào đường ưu tiên (theo biển báo và biển phụ) nên được quyền đi trước.",
        "answers": [
            {
                "id": 1,
                "text": "Xe mô tô.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe con.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 231,
        "a2": 231,
        "b1": 281,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q526.png",
        "no": 526,
        "index": 526,
        "text": "Xe ô tô con đi theo chiều mũi tên có vi phạm quy tắc giao thông không?",
        "tip": "Biển số R.301a được đặt trước ngã ba, ngã tư. Các xe chỉ được đi thẳng ở khu vực ngã ba, ngã tư.",
        "answers": [
            {
                "id": 1,
                "text": "Không vi phạm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Vi phạm.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q527.png",
        "no": 527,
        "index": 527,
        "text": "Xe nào vi phạm quy tắc giao thông?",
        "tip": "Xe con quay đầu đè vạch liền trên đường nên vi phạm.",
        "answers": [
            {
                "id": 1,
                "text": "Xe khách.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe mô tô.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe con.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Xe con và xe mô tô.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 232,
        "a2": 232,
        "b1": 282,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q528.png",
        "no": 528,
        "index": 528,
        "text": "Các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Giơ tay thẳng đứng: Tất cả dừng, trừ xe đã ở trong ngã tư được phép đi;<br/>Giang ngang tay: Trái phải đi; Trước sau dừng;<br/>Tay phải giơ trước: Sau, phải dừng, trước rẽ phải, trái đi các hướng, người đi bộ qua đường đi sau người điều khiển.",
        "answers": [
            {
                "id": 1,
                "text": "Các xe ở phía tay phải và tay trái của người điều khiển được phép đi thẳng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Cho phép các xe ở mọi hướng được phép rẽ phải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tất cả các xe phải dừng lại trước ngã tư, trừ những xe đã ở trong ngã tư được phép tiếp tục đi.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 233,
        "a2": 233,
        "b1": 283,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q529.png",
        "no": 529,
        "index": 529,
        "text": "Theo hướng mũi tên, xe nào được phép đi?",
        "tip": "Giang ngang tay: Trái phải đi; Trước sau dừng.<br/>Xe mô tô và xe tải được phép đi là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Xe mô tô, xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con, xe tải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe mô tô, xe tải.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cả ba xe.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 234,
        "a2": 234,
        "b1": 284,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q530.png",
        "no": 530,
        "index": 530,
        "text": "Xe con vượt xe tải như trường hợp này có đúng không?",
        "tip": "Xe con đi thẳng và xe tải rẽ trái không giao nhau nên được phép vượt trong trường hợp này.",
        "answers": [
            {
                "id": 1,
                "text": "Đúng.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Không đúng.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q531.png",
        "no": 531,
        "index": 531,
        "text": "Xe nào vượt đúng quy tắc giao thông?",
        "tip": "Theo hướng xe tải, vượt xe khách đè vạch liền nên vi phạm.<br/> Theo hướng xe con, xe con vượt xe tải đè vạch đứt nên không vi phạm quy tắc giao thông là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Xe tải.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Cả hai xe.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe con.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q532.png",
        "no": 532,
        "index": 532,
        "text": "Đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        "tip": "Biển cấm xe ngược chiều không có tác dụng với xe chữa cháy (xe ưu tiên) nên không vi phạm.<br/>Trước mặt xe tải có biển cấm rẽ trái và quay đầu nên vi phạm là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Xe chữa cháy đi làm nhiệm vụ chữa cháy.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe tải.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả hai xe.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q533.png",
        "no": 533,
        "index": 533,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe tải: Rẽ phải; 2. Xe khách: Đi thẳng; 3. Xe con: Rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Xe khách, xe tải, xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con, xe tải, xe khách.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe tải, xe khách, xe con.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q534.png",
        "no": 534,
        "index": 534,
        "text": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe khách và xe tải cùng rẽ phải nên cùng nhau đi trước. Hãy nhìn đáp án có chữ <b>'VÀ'</b>.",
        "answers": [
            {
                "id": 1,
                "text": "Xe khách và xe tải, xe con.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe tải, xe khách, xe con.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe con, xe khách, xe tải.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q535.png",
        "no": 535,
        "index": 535,
        "text": "Những hướng nào xe ô tô tải được phép đi?",
        "tip": "Biển số P.102 'Cấm đi ngược chiều' ở hướng 4 nên hướng này không được phép đi.",
        "answers": [
            {
                "id": 1,
                "text": "Cả bốn hướng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chỉ hướng 1 và 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Trừ hướng 4.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q536.png",
        "no": 536,
        "index": 536,
        "text": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe công an: Xe ưu tiên;<br/>2. Xe con: Đường ưu tiên, bên phải trống;<br/>3. Xe tải: Đường ưu tiên, bên phải vướng xe con nếu đi trước;<br/>4. Xe khách: Đường không ưu tiên.",
        "answers": [
            {
                "id": 1,
                "text": "Xe công an đi làm nhiệm vụ khẩn cấp, xe con, xe tải, xe khách.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe con, xe khách và xe công an đi làm nhiệm vụ khẩn cấp, xe tải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe công an đi làm nhiệm vụ khẩn cấp, xe con, xe khách, xe tải.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Xe con, xe tải, xe khách, xe công an đi làm nhiệm vụ khẩn cấp.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q537.png",
        "no": 537,
        "index": 537,
        "text": "Những hướng nào ô tô tải được phép đi?",
        "tip": "Trước mặt xe tải là Biển số P.123a 'Cấm rẽ trái' không cấm quay đầu (hướng 3).<br/>Hướng 4 là Biển số P.109 'Cấm máy kéo' không cấm xe tải.<br/>Nên các hướng 1, 3 và 4 là câu trả lời đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Cả bốn hướng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Hướng 1, 2 và 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Hướng 1 và 4.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Hướng 1, 3 và 4.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q538.png",
        "no": 538,
        "index": 538,
        "text": "Trong hình dưới đây, xe nào chấp hành đúng quy tắc giao thông?",
        "tip": "Xe khách chờ đèn đỏ rẽ trái. Xe tải đi thẳng và rẽ phải theo tín hiệu đèn xanh. Xe con đi thẳng và rẽ phải theo tín hiệu đèn xanh. Xe mô tô chờ đèn đỏ rẽ trái. Nên tất cả xe đều chấp hành.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ xe khách, xe mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Tất cả các loại xe trên.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Không xe nào chấp hành đúng quy tắc giao thông.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 235,
        "a2": 235,
        "b1": 285,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q539.png",
        "no": 539,
        "index": 539,
        "text": "Theo hướng mũi tên, những hướng nào xe mô tô được phép đi?",
        "tip": "Hướng 2 có Biển số P.104 'Cấm mô tô'. Hướng 3 Biển số P.103a 'Cấm ô tô' nhưng không cấm mô tô. Nên đáp án đúng là hướng 1 và hướng 3.",
        "answers": [
            {
                "id": 1,
                "text": "Cả ba hướng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Hướng 1 và 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Hướng 1 và 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Hướng 2 và 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 236,
        "a2": 236,
        "b1": 286,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q540.png",
        "no": 540,
        "index": 540,
        "text": "Trong trường hợp này, thứ tự xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe quân sự: Xe ưu tiên cùng cấp xe công an nhưng đi thẳng;<br/>2. Xe công an: Xe ưu tiên; rẽ trái;<br/>3. Xe con và xe mô tô: Cùng đi thẳng.",
        "answers": [
            {
                "id": 1,
                "text": "Xe công an đi làm nhiệm vụ khẩn cấp, xe quân sự đi làm nhiệm vụ khẩn cấp, xe con + xe mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe quân sự đi làm nhiệm vụ khẩn cấp, xe công an đi làm nhiệm vụ khẩn cấp, xe con + xe mô tô.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe mô tô + xe con, xe quân sự đi làm nhiệm vụ khẩn cấp, xe công an đi làm nhiệm vụ khẩn cấp.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 237,
        "a2": 237,
        "b1": 287,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q541.png",
        "no": 541,
        "index": 541,
        "text": "Xe nào phải nhường đường là đúng quy tắc giao thông?",
        "tip": "Xe xuống dốc A phải nhường đường cho xe đang lên dốc B.",
        "answers": [
            {
                "id": 1,
                "text": "Xe A.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe B.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q542.png",
        "no": 542,
        "index": 542,
        "text": "Xe con quay đầu đi ngược lại như hình vẽ dưới có vi phạm quy tắc giao thông không?",
        "tip": "Xe con quay đầu đè vạch nên vi phạm.",
        "answers": [
            {
                "id": 1,
                "text": "Không vi phạm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Vi phạm.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q543.png",
        "no": 543,
        "index": 543,
        "text": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
        "tip": "Xe mô tô C chạy vào làn dành riêng xe ô tô: Vi phạm; Xe con E chạy vào làn dành riêng xe máy: Vi phạm.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con (E), xe mô tô (C).",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe tải (A), xe mô tô (D).",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe khách (B), xe mô tô (C).",
                "correct": false
            },
            {
                "id": 4,
                "text": "Xe khách (B), xe mô tô (D).",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 238,
        "a2": 238,
        "b1": 288,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q544.png",
        "no": 544,
        "index": 544,
        "text": "Để điều khiển cho xe đi thẳng, người lái xe phải làm gì là đúng quy tắc giao thông?",
        "tip": "Người lái xe phải nhường đường xe con rẽ trái trước vì xe con rẽ trái đã vào nơi giao nhau trước (đã qua vạch).",
        "answers": [
            {
                "id": 1,
                "text": "Nhường xe con rẽ trái trước.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Đi thẳng không nhường.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q545.png",
        "no": 545,
        "index": 545,
        "text": "Người lái xe điều khiển xe đi theo hướng nào là đúng quy tắc giao thông?",
        "tip": "Hướng 4: Biển số P.123b 'Cấm rẽ phải'; Hướng 3: Biển số P.102 'Cấm đi ngược chiều';<br/>Nên chỉ có thể đi theo hướng 1 và hướng 2 là câu trả lời đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ hướng 2.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Hướng 1 và 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Tất cả các hướng trừ hướng 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Tất cả các hướng trừ hướng 4.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q546.png",
        "no": 546,
        "index": 546,
        "text": "Xe nào phải nhường đường là đúng quy tắc giao thông?",
        "tip": "Xe con (A) đang đi trước và xi nhan trái nên được đi trước, xe con (B) xi nhan phải và đi sau nên phải nhường.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con (A).",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con (B).",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q547.png",
        "no": 547,
        "index": 547,
        "text": "Người lái xe điều khiển xe rẽ trái như thế nào là đúng quy tắc giao thông?",
        "tip": "Xe tải đã vào nơi giao nhau trước nên được đi đầu tiên; Tiếp theo xe buýt: Đi thẳng; Cuối cùng là xe của bạn: Rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Rẽ trái ngay trước xe buýt.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Rẽ trái trước xe tải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Nhường đường cho xe buýt và xe tải.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q548.png",
        "no": 548,
        "index": 548,
        "text": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
        "tip": "Nhìn vào bảng chỉ dẫn loại phương tiện theo làn đường: Xe con (E) đi trên làn dành riêng cho mô tô nên vi phạm: Xe mô tô (D) chạy trên làn dành riêng xe ô tô nên cũng vi phạm.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con (B), xe mô tô (C).",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con (A), xe mô tô (C).",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe con (E), xe mô tô (D).",
                "correct": true
            },
            {
                "id": 4,
                "text": "Tất cả các loại xe trên.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 239,
        "a2": 239,
        "b1": 289,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q549.png",
        "no": 549,
        "index": 549,
        "text": "Xe nào đi trước là đúng quy tắc giao thông?",
        "tip": "Trước mặt xe của bạn có Biển số W.208 'Giao nhau với đường ưu tiên' nên phải ưu tiên các xe đang đi trên đường ưu tiên. Xe tải được ưu tiên trong trường hợp này.",
        "answers": [
            {
                "id": 1,
                "text": "Xe của bạn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe tải.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q550.png",
        "no": 550,
        "index": 550,
        "text": "Người lái xe có thể quay đầu xe như thế nào là đúng quy tắc giao thông?",
        "tip": "Trước mặt người lái xe có Biển số P.123a 'Cấm rẽ trái' không cấm quay đầu. Tuy nhiên, hướng B quay đầu đè vạch liền nên vi phạm. Do đó, chỉ có hướng A quay đầu xe là câu trả lời đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Quay đầu theo hướng A.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Quay đầu theo hướng B.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cấm quay đầu.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q551.png",
        "no": 551,
        "index": 551,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>Xe bạn đang trên đường ưu tiên nên được đi trước.<br/>Xe con rẽ phải không giao nhau với xe bạn nên được đi đồng thời với xe bạn.<br/>Xe tải rẽ trái từ đường không ưu tiên phải nhường đi sau cùng.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con và xe tải, xe của bạn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe của bạn, xe tải, xe con.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe của bạn và xe con, xe tải.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Xe của bạn, xe tải + xe con.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q552.png",
        "no": 552,
        "index": 552,
        "text": "Khi muốn vượt xe tải, người lái xe phải làm gì là đúng quy tắc giao thông?",
        "tip": "Chú ý vạch kẻ đường ngăn cách với làn bên trái là vạch liền. Bạn phải bật tín hiệu báo hiệu cho đến khi xe tải phía trước giảm tốc độ và chuyển qua làn bên phải thì bạn mới có thể tăng tốc cho xe vượt qua.",
        "answers": [
            {
                "id": 1,
                "text": "Tăng tốc cho xe chạy vượt qua.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Bật tín hiệu báo hiệu bằng đèn hoặc còi, khi đủ điều kiện an toàn, tăng tốc cho xe chạy vượt qua.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Đánh lái sang làn bên trái và tăng tốc cho xe chạy vượt qua.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q553.png",
        "no": 553,
        "index": 553,
        "text": "Theo tín hiệu đèn, xe nào phải dừng lại là đúng quy tắc giao thông?",
        "tip": "Xe con và xe tải đang ở trên làn đường có tín hiệu đèn đỏ nên phải dừng lại.",
        "answers": [
            {
                "id": 1,
                "text": "Xe khách, xe mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe tải, xe mô tô.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe con, xe tải.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 240,
        "a2": 240,
        "b1": 290,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q566.png",
        "no": 554,
        "index": 554,
        "text": "Trong hình dưới, những xe nào chấp hành quy tắc giao thông?",
        "tip": "Xe con (B) và xe tải (D) đang đè lên vạch liền phân tách làn đường nên vi phạm quy tắc giao thông. Các xe còn lại (A, C, E, G) là đúng quy tắc giao thông.",
        "answers": [
            {
                "id": 1,
                "text": "Xe tải ( D), xe con (B).",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con (A), xe con (C), xe con (E), xe buýt (G).",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe con (A), xe con (B), xe tải (D).",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q555.png",
        "no": 555,
        "index": 555,
        "text": "Người lái xe có được phép vượt xe tải để đi thẳng trong trường hợp này không?",
        "tip": "Tại nơi giao nhau, trên đoạn đường có làn đường dành cho người đi bộ cắt ngang thì không được phép vượt.",
        "answers": [
            {
                "id": 1,
                "text": "Được vượt.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Cấm vượt.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q556.png",
        "no": 556,
        "index": 556,
        "text": "Bạn có được phép vượt xe mô tô phía trước không?",
        "tip": "Tại nơi giao nhau, trên đoạn đường có làn đường dành cho người đi bộ cắt ngang thì không được phép vượt.",
        "answers": [
            {
                "id": 1,
                "text": "Cho phép.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không được vượt.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 241,
        "a2": 241,
        "b1": 291,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q557.png",
        "no": 557,
        "index": 557,
        "text": "Người lái xe dừng tại vị trí nào là đúng quy tắc giao thông?",
        "tip": "Vị trí A vi phạm do dừng bên trái đường.<br/>Biển số P.131a 'Cấm đỗ xe' không cấm dừng xe. Do đó vị trí dừng tại B và C là câu trả lời đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Vị trí A và B.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Vị trí A và C.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Vị trí B và C.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cả ba vị trí A, B, C.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q558.png",
        "no": 558,
        "index": 558,
        "text": "Bạn được dừng xe ở vị trí nào trong tình huống này?",
        "tip": "Biển số P.130 'Cấm dừng xe và đỗ xe' và biển phụ báo phạm vi trước và sau biển báo nên không được phép dừng xe tại cả 2 vị trí A và B.",
        "answers": [
            {
                "id": 1,
                "text": "Được phép dừng ở vị trí A.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Được phép dừng ở vị trí B.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Được phép dừng ở vị trí A và B.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Không được dừng.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q559.png",
        "no": 559,
        "index": 559,
        "text": "Theo tín hiệu đèn của xe cơ giới, xe nào vi phạm quy tắc giao thông?",
        "tip": "Biển số R.301a chỉ cho phép các phương tiện đi thẳng trong khi cả hai xe đều có tín hiệu xi nhan rẽ sang hướng khác nên cả 2 xe đều vi phạm quy tắc giao thông.",
        "answers": [
            {
                "id": 1,
                "text": "Xe mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô con.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không xe nào vi phạm.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả hai xe.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 242,
        "a2": 242,
        "b1": 292,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q560.png",
        "no": 560,
        "index": 560,
        "text": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        "tip": "Xe con trong cả hai phía đều đang ở đúng làn đường và đi theo hướng mà đèn xanh đang bật nên đúng quy tắc.<br/>Xe tải trong cả hai phía đều ở sai làn đường so với hướng rẽ nên vi phạm quy tắc giao thông.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe tải.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe con, xe tải.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 243,
        "a2": 243,
        "b1": 293,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q561.png",
        "no": 561,
        "index": 561,
        "text": "Các xe đi theo hướng mũi tên, những xe nào vi phạm quy tắc giao thông?",
        "tip": "Xe con và xe mô tô đang ở đúng làn đường, đúng hướng rẽ với tín hiệu đèn xanh nên đúng quy tắc giao thông.<br/>Xe khách và xe tải đang ở sai làn đường so với hướng rẽ nên đều vi phạm.",
        "answers": [
            {
                "id": 1,
                "text": "Xe tải, xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe khách, xe con.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe khách, xe tải.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q562.png",
        "no": 562,
        "index": 562,
        "text": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        "tip": "Xe con đi đúng làn đường theo hướng rẽ và tín hiệu đèn.<br/>Xe khách: Sai làn đường và tín hiệu đèn.<br/>Xe tải: Đi thẳng vi phạm đèn đỏ.<br/>Xe mô tô: Đi thẳng vi phạm đèn đỏ.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con, xe tải, xe khách.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe tải, xe khách, xe mô tô.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe khách, xe mô tô, xe con.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả bốn xe.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 244,
        "a2": 244,
        "b1": 294,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q563.png",
        "no": 563,
        "index": 563,
        "text": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        "tip": "Xe con đúng làn đường và tín hiệu đèn.<br/>Xe khách: Sai làn đường; Xe tải: Sai làn đường và tín hiệu đèn.",
        "answers": [
            {
                "id": 1,
                "text": "Xe khách, xe tải.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe khách, xe con.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe con, xe tải.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Xe khách, xe tải, xe con.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q564.png",
        "no": 564,
        "index": 564,
        "text": "Trong tình huống dưới đây, để tránh xe phía trước bị hỏng đột xuất trên đường, người lái xe phải làm gì?",
        "tip": "Chú ý quan sát, bật tín hiệu đèn, còi rồi mới được vượt nên Đáp án 2 trong trường hợp này mô tả chính xác.",
        "answers": [
            {
                "id": 1,
                "text": "Đánh lái sang trái cho xe vượt qua.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Quan sát phía trước, phía sau, khi đủ điều kiện an toàn, bật tín hiệu bằng đèn hoặc còi rồi cho xe chạy vượt qua.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cấm vượt.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q565.png",
        "no": 565,
        "index": 565,
        "text": "Các xe đi theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?",
        "tip": "Xe con và xe tải: Vi phạm tín hiệu đèn;<br/>Xe khách và xe mô tô: Đúng làn đường và đúng tín hiệu đèn.",
        "answers": [
            {
                "id": 1,
                "text": "Xe tải, xe mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe khách, xe mô tô.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe tải, xe con.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Xe mô tô, xe con.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 245,
        "a2": 245,
        "b1": 295,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q566.png",
        "no": 566,
        "index": 566,
        "text": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
        "tip": "Xe con (B) và xe tải (D) đang đè lên vạch liền phân tách làn đường nên vi phạm quy tắc giao thông.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con (A), xe con (B), xe tải (D).",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe tải (D), xe con (E), xe buýt (G).",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe tải ( D), xe con (B).",
                "correct": true
            },
            {
                "id": 4,
                "text": "Xe con (B), xe con (C).",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q567.png",
        "no": 567,
        "index": 567,
        "text": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>Biển báo phía trước là đường ưu tiên và biển phụ báo hướng di chuyển của xe mô tô là hướng ưu tiên.<br/>1. Xe mô tô: Đường ưu tiên;<br/>2. Xe con: Đường không ưu tiên, bên phải trống;<br/>3. Xe của bạn: Đường không ưu tiên, bên phải vướng xe con.",
        "answers": [
            {
                "id": 1,
                "text": "Xe của bạn, xe mô tô, xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con, xe của bạn, xe mô tô.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe mô tô, xe con, xe của bạn.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 246,
        "a2": 246,
        "b1": 296,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q568.png",
        "no": 568,
        "index": 568,
        "text": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp: Bên phải trống, rẽ phải, đi thẳng, rẽ trái.<br/>1. Xe con: Rẽ phải; 2. Xe của bạn: Đi thẳng; 3. Mô tô: Rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Xe của bạn, xe mô tô, xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con, xe của bạn, xe mô tô.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe mô tô, xe con, xe của bạn.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 247,
        "a2": 247,
        "b1": 297,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q569.png",
        "no": 569,
        "index": 569,
        "text": "Xe nào phải dừng lại trong trường hợp này?",
        "tip": "Xe con dừng lại vì phía trước là tín hiệu đèn đỏ. Xe của bạn được đi vì rẽ phải trước đèn đỏ nên không vi phạm.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe của bạn.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai xe.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q570.png",
        "no": 570,
        "index": 570,
        "text": "Xe của bạn được đi theo hướng nào trong trường hợp này?",
        "tip": "Làn đường mà xe của bạn đang đi chỉ được đi thẳng hoặc rẽ trái thôi. Nếu bạn chọn rẽ phải là bị đèn tín hiệu nó lừa rồi đó.",
        "answers": [
            {
                "id": 1,
                "text": "Đi thẳng, rẽ trái.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Đi thẳng, rẽ phải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Rẽ trái.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Đi thẳng, rẽ phải, rẽ trái.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q571.png",
        "no": 571,
        "index": 571,
        "text": "Xe của bạn được đi theo hướng nào trong trường hợp này?",
        "tip": "Bạn phải dừng lại chờ đèn đỏ và làn đường bạn đang dừng xe chỉ được rẽ trái hoặc đi thẳng khi đèn xanh.",
        "answers": [
            {
                "id": 1,
                "text": "Chuyển sang làn đường bên phải và rẽ phải.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Dừng lại trước vạch dừng và rẽ phải khi đèn xanh.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dừng lại trước vạch dừng và đi thẳng hoặc rẽ trái khi đèn xanh.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q572.png",
        "no": 572,
        "index": 572,
        "text": "Bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Xe tải đã vào nơi giao nhau trước nên sẽ được ưu tiên trước. Biển báo phía trước là đường ưu tiên dành cho xe thô sơ nên phải nhường đường cho xe đạp. Do đó, xe bạn rẽ phải sau xe tải và xe đạp.",
        "answers": [
            {
                "id": 1,
                "text": "Tăng tốc độ, rẽ phải trước xe tải và xe đạp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giảm tốc độ, rẽ phải sau xe tải và xe đạp.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Tăng tốc độ, rẽ phải trước xe đạp.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q573.png",
        "no": 573,
        "index": 573,
        "text": "Bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Ở vạch kẻ đường dành cho người đi bộ có người chuẩn bị sang đường nên phải nhường đường và không được phép vượt.<br/>Nên bạn phải nhường đường cho người đi bộ và rẽ phải sau xe con màu xanh.",
        "answers": [
            {
                "id": 1,
                "text": "Tăng tốc độ, rẽ phải trước xe con màu xanh phía trước và người đi bộ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giảm tốc độ, để người đi bộ qua đường và rẽ phải trước xe con màu xanh.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Giảm tốc độ, để người đi bộ qua đường và rẽ phải sau xe con màu xanh.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q574.png",
        "no": 574,
        "index": 574,
        "text": "Bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Trước mặt bạn có biển Biển số R.122 'Dừng lại' nên phải dừng xe và nhường đường. Nên xe của bạn phải nhường đường cho xe đạp và xe khách.",
        "answers": [
            {
                "id": 1,
                "text": "Nhường đường cho xe khách và đi trước xe đạp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nhường đường cho xe đạp và đi trước xe khách.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Nhường đường cho xe đạp và xe khách.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q575.png",
        "no": 575,
        "index": 575,
        "text": "Xe nào phải nhường đường trong trường hợp này?",
        "tip": "Biển W.207c 'Giao nhau với đường không ưu tiên' cho biết xe tải đi từ đường không ưu tiên nên phải nhường đường.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe tải.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe của bạn.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q576.png",
        "no": 576,
        "index": 576,
        "text": "Xe nào phải nhường đường trong trường hợp này?",
        "tip": "Xe bạn không thể vượt khi phía trước có chướng ngại vật hoặc xe đi ngược chiều. Nên xe bạn phải nhường đường trong tình huống này.",
        "answers": [
            {
                "id": 1,
                "text": "Xe đi ngược chiều.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe của bạn.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q577.png",
        "no": 577,
        "index": 577,
        "text": "Bạn xử lý như thế nào khi lái xe ô tô vượt qua đoàn người đi xe đạp có tổ chức?",
        "tip": "Xe của bạn không được vượt khi bên trái có chướng ngại vật hay xe ngược chiều.",
        "answers": [
            {
                "id": 1,
                "text": "Tăng tốc độ, chuyển sang làn đường bên trái để vượt.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không được vượt những người đi xe đạp.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q578.png",
        "no": 578,
        "index": 578,
        "text": "Phía trước có một xe đang lùi vào nơi đỗ, xe con phía trước đang chuyển sang làn đường bên trái, bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Cần quan sát kỹ xe phía sau trong tình huống này để có hành động hợp lý. Nếu không có xe xin vượt chuyển làn trái đi tiếp. Nếu có xe xin vượt thì giảm tốc độ, ở lại làn đường hoặc dừng lại nếu cần thiết.",
        "answers": [
            {
                "id": 1,
                "text": "Nếu phía sau không có xe xin vượt, chuyển sang làn đường bên trái.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nếu phía sau có xe xin vượt, thì giảm tốc độ, ở lại làn đường, dừng lại khi cần thiết.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tăng tốc độ trên làn đường của mình và vượt xe con.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q579.png",
        "no": 579,
        "index": 579,
        "text": "Bạn xử lý như thế nào khi xe phía trước đang lùi ra khỏi nơi đỗ?",
        "tip": "Không được vượt khi phía trước có chướng ngại vật hay xe chạy ngược chiều. Do đó, cần giảm tốc độ, dừng lại nhường đường.",
        "answers": [
            {
                "id": 1,
                "text": "Chuyển sang nửa đường bên trái để đi tiếp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Bấm còi, nháy đèn báo hiệu và đi tiếp.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Giảm tốc độ, dừng lại nhường đường.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q580.png",
        "no": 580,
        "index": 580,
        "text": "Phía trước có một xe màu xanh đang vượt xe màu vàng trên làn đường của bạn, bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Vì xe màu xanh đang trên làn đường của bạn, để đảm bảo an toàn, bạn cần phanh xe giảm tốc độ và đi sát lề đường bên phải.",
        "answers": [
            {
                "id": 1,
                "text": "Phanh xe giảm tốc độ và đi sát lề đường bên phải.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Bấm còi, nháy đèn báo hiệu, giữ nguyên tốc độ và đi tiếp.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phanh xe giảm tốc độ và đi sát vào lề đường bên trái.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q581.png",
        "no": 581,
        "index": 581,
        "text": "Xe tải phía trước có tín hiệu xin chuyển làn đường, bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Không được vượt khi phía trước có xe đang chuyển làn đường. Do đó, để đảm bảo an toàn bạn cần phanh xe giảm tốc độ chờ xe tải phía trước chuyển làn đường.",
        "answers": [
            {
                "id": 1,
                "text": "Bật tín hiệu xin chuyển làn đường sang trái để vượt xe tải.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Phanh xe giảm tốc độ chờ xe tải phía trước chuyển làn đường.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Bấm còi báo hiệu và vượt qua xe tải trên làn đường của mình.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q582.png",
        "no": 582,
        "index": 582,
        "text": "Bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Trước mặt là Biển số W.208 'Giao nhau với đường ưu tiên' nên bạn phải giảm tốc độ, quan sát nhường đường ưu tiên nếu có và đi qua ngã tư.",
        "answers": [
            {
                "id": 1,
                "text": "Tăng tốc độ và đi thẳng qua ngã tư.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Dừng xe trước vạch dừng.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Giảm tốc độ và đi thẳng qua ngã tư.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q583.png",
        "no": 583,
        "index": 583,
        "text": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe đạp: Bên phải trống; 2. Xe mô tô: Đi thẳng; 3. Xe của bạn: Rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Xe của bạn, xe mô tô, xe đạp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe mô tô, xe đạp, xe của bạn.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe đạp, xe mô tô, xe của bạn.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 248,
        "a2": 248,
        "b1": 298,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q584.png",
        "no": 584,
        "index": 584,
        "text": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe của bạn: Đường ưu tiên; 2. Xe con: Đi không ưu tiên, đi thẳng; 3. Xe tải: Đường không ưu tiên, rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Xe của bạn, xe tải, xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con, xe tải, xe của bạn.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe tải, xe của bạn, xe con.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Xe của bạn, xe con, xe tải.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q585.png",
        "no": 585,
        "index": 585,
        "text": "Xe nào phải nhường đường trong trường hợp này?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe con: Đường ưu tiên; 2. Xe của bạn: Đường không ưu tiên nên phải nhường đường.",
        "answers": [
            {
                "id": 1,
                "text": "Xe của bạn.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe con.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q586.png",
        "no": 586,
        "index": 586,
        "text": "Xe nào phải nhường đường trong trường hợp này?",
        "tip": "Trước mặt xe của bạn có Biển số P.132 'Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp' nên phải nhường đường.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe của bạn.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q587.png",
        "no": 587,
        "index": 587,
        "text": "Bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Trước mặt bạn có biển I.423a 'Đường người đi bộ sang ngang' nên bạn phải giảm tốc độ và nhường đường cho người đi bộ sang đường.",
        "answers": [
            {
                "id": 1,
                "text": "Tăng tốc độ, đi qua vạch người đi bộ sang đường, để người đi bộ sang đường sau.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giảm tốc độ, đi qua vạch người đi bộ sang đường, để người đi bộ sang đường sau.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Giảm tốc độ, để người đi bộ sang đường trước, sau đó cho xe đi qua vạch người đi bộ sang đường.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q588.png",
        "no": 588,
        "index": 588,
        "text": "Xe nào được đi trước trong trường hợp này?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>Xe của bạn trên đường ưu tiên (theo biển báo) nên được đi trước.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe của bạn.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q589.png",
        "no": 589,
        "index": 589,
        "text": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe tải: Bên phải trống; 2. Xe con: Đi thẳng; 3. Xe của bạn: Rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con, xe tải, xe của bạn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe tải, xe con, xe của bạn.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe tải, xe của bạn, xe con.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q590.png",
        "no": 590,
        "index": 590,
        "text": "Bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Phía trước khuất tầm nhìn, bên trái làn đường là vạch liền nên bạn cần phải giảm tốc độ, đi sát làn đường bên phải để đảm bảo đi đúng làn đường.",
        "answers": [
            {
                "id": 1,
                "text": "Tăng tốc độ cho xe lấn sang phần đường bên trái.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giảm tốc độ cho xe lấn sang phần đường bên trái.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Giảm tốc độ cho xe đi sát phần đường bên phải.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q591.png",
        "no": 591,
        "index": 591,
        "text": "Xe nào được đi trước trong trường hợp này?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe tải: Đi thẳng; 2. Xe của bạn: Rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Xe tải.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe của bạn.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q592.png",
        "no": 592,
        "index": 592,
        "text": "Xe nào dừng đúng theo quy tắc giao thông?",
        "tip": "Biển số W.211a 'Giao nhau với đường sắt không có rào chắn' thì các phương tiện đứng cách xa đường sắt tối thiểu 5m nên xe con đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe mô tô.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả 2 xe đều đúng.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 249,
        "a2": 249,
        "b1": 299,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q593.png",
        "no": 593,
        "index": 593,
        "text": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe của bạn: Bên phải trống, đi thẳng; 2. Xe tải: Rẽ trái, bên phải trống (khi xe bạn đã đi rồi); 3. Xe đạp: Rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Xe tải, xe đạp, xe của bạn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe của bạn, xe đạp, xe tải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe của bạn, xe tải, xe đạp.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q594.png",
        "no": 594,
        "index": 594,
        "text": "Để điều khiển xe rẽ trái, bạn chọn hướng đi nào dưới đây?",
        "tip": "Vạch kẻ đường nét đứt màu vàng, phân chia 2 chiều xe chạy. Do đó, hướng 2 sẽ đi bên trái đường 1 đoạn nên không được phép. Do đó, bạn chỉ được chọn theo hướng 1 để rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Hướng 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Hướng 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai hướng đều được.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q595.png",
        "no": 595,
        "index": 595,
        "text": "Khi gặp xe ngược chiều bật đèn pha trong tình huống dưới đây, bạn xử lý như thế nào?",
        "tip": "Giữ nguyên đèn chiếu gần và giảm tốc độ do không thể quan sát rõ phía trước.",
        "answers": [
            {
                "id": 1,
                "text": "Bật đèn chiếu xa, tăng tốc độ vượt xe cùng chiều.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giữ nguyên đèn chiếu gần, giảm tốc độ, đi sau xe phía trước.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Giữ nguyên đèn chiếu gần, tăng tốc độ vượt xe cùng chiều.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q596.png",
        "no": 596,
        "index": 596,
        "text": "Xe của bạn đang di chuyển gần đến khu vực giao cắt với đường sắt, khi rào chắn đang dịch chuyển, bạn điều khiển xe như thế nào là đúng quy tắc giao thông?",
        "tip": "Bắt buộc phải dừng xe.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát nếu thấy không có tàu thì tăng tốc cho xe vượt qua đường sắt.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Dừng lại trước rào chắn một khoảng cách an toàn.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Ra tín hiệu, yêu cầu người gác chắn tàu kéo chậm barie để xe bạn qua.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q597.png",
        "no": 597,
        "index": 597,
        "text": "Trong tình huống dưới đây, xe con màu đỏ nhập làn đường cao tốc theo hướng mũi tên là đúng hay sai?",
        "tip": "Khi nhập làn cao tốc phải chạy dọc theo làn tạm để đủ thời gian quan sát, khoảng cách an toàn và đủ tốc độ trước khi di chuyển vào làn cao tốc nên trong tình huống này xe màu đỏ sai khi nhập làn cao tốc.",
        "answers": [
            {
                "id": 1,
                "text": "Đúng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Sai.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q598.png",
        "no": 598,
        "index": 598,
        "text": "Trong tình huống dưới đây, xe con màu đỏ có được phép vượt khi xe con màu xanh đang vượt xe tải hay không?",
        "tip": "Xe xin vượt chỉ được vượt khi không có chướng ngại vật phía trước, không có xe chạy ngược chiều trong đoạn đường định vượt, xe chạy trước không có tín hiệu vượt xe khác và đã tránh về bên phải. Do đó, xe màu đỏ không được vượt.",
        "answers": [
            {
                "id": 1,
                "text": "Được vượt.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không được vượt.",
                "correct": true
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q599.png",
        "no": 599,
        "index": 599,
        "text": "Trong tình huống dưới đây, xe con màu vàng vượt xe con màu đỏ là đúng quy tắc giao thông hay không?",
        "tip": "Xe màu đỏ đang tránh về phía bên phải, xe màu vàng đã có tín hiệu xin vượt, vạch kẻ đường theo hướng xe chạy là nét đứt , không có xe ngược chiều. Nên xe vàng vượt đúng quy tắc giao thông.",
        "answers": [
            {
                "id": 1,
                "text": "Đúng.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Không đúng.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 0,
        "a2": 0,
        "b1": 0,
        "required1": 0,
        "required2": 0,
        "required3": 0
    },
    {
        "image": "q600.png",
        "no": 600,
        "index": 600,
        "text": "Trong tình huống dưới đây, xe đầu kéo kéo rơ moóc (xe container) đang rẽ phải, xe con màu xanh và xe máy phía sau xe container đi như thế nào để bảo đảm an toàn?",
        "tip": "Giảm tốc độ chờ xe đầu kéo rẽ phải rồi mới tiếp tục đi.",
        "answers": [
            {
                "id": 1,
                "text": "Vượt về phía bên phải để đi tiếp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giảm tốc độ chờ xe container rẽ xong rồi tiếp tục đi.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Vượt về phía bên trái để đi tiếp.",
                "correct": false
            }
        ],
        "topic": 6,
        "a1": 250,
        "a2": 250,
        "b1": 300,
        "required1": 0,
        "required2": 0,
        "required3": 0
    }
]

const licenseType = localStorage.getItem("is_license");
const filterConditions = {
	"A1_2025": (question) => question.a1 > 0,
	"A_2025": (question) => question.a2 > 0,
	"B1_2025": (question) => question.b1 > 0,
    "B_2025": () => true,
    "C1_2025": () => true,
	"C_2025": () => true,
	"D1_2025": () => true,
	"D2_2025": () => true,
	"D_2025": () => true,
	"D2_2025": () => true,
	"D_2025": () => true,
	"BE_2025": () => true,
	"C1E_2025": () => true,
	"CE_2025": () => true,
	"D1E_2025": () => true,
	"D2E_2025": () => true,
	"DE_2025": () => true
    };

const filterRequiredConditions = {
	"A1_2025": (question) => question.required1 > 0,
	"A_2025": (question) => question.required1 > 0,
	"B1_2025": (question) => question.required2 > 0,
    "B_2025": (question) => question.required3 > 0,
    "C1_2025": (question) => question.required3 > 0,
	"C_2025": (question) => question.required3 > 0,
	"D1_2025": (question) => question.required3 > 0,
	"D2_2025": (question) => question.required3 > 0,
	"D_2025": (question) => question.required3 > 0,
	"D2_2025": (question) => question.required3 > 0,
	"D_2025": (question) => question.required3 > 0,
	"BE_2025": (question) => question.required3 > 0,
	"C1E_2025": (question) => question.required3 > 0,
	"CE_2025": (question) => question.required3 > 0,
	"D1E_2025": (question) => question.required3 > 0,
	"D2E_2025": (question) => question.required3 > 0,
	"DE_2025": (question) => question.required3 > 0
    };

const filterFunction = filterConditions[licenseType];
const filterRequiredFunction = filterRequiredConditions[licenseType];

var fullQuestions = filterFunction 
    ? originalQuestions.filter(filterFunction)
    : (filterConditions[licenseType] === (() => true) ? originalQuestions : []);


var dangerQuestions = fullQuestions.filter(filterRequiredFunction)

var topics = []
