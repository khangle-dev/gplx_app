const originalQuestions = 
    [
    {
        "image": "",
        "no": 1,
        "index": 1,
        "text": "Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại là gì?",
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
        "required": 0,
        "a1": 1,
        "a2": 1,
        "a34": 1,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 2,
        "index": 2,
        "text": "\"Làn đường\" là gì?",
        "tip": "Làn đường có bề rộng đủ cho xe chạy an toàn.",
        "answers": [
            {
                "id": 1,
                "text": "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Là đường cho xe ô tô chạy, dừng, đỗ an toàn.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 2,
        "a2": 2,
        "a34": 2,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 3,
        "index": 3,
        "text": "Khái niệm \"Khổ giới hạn đường bộ\" được hiểu như thế nào là đúng?",
        "tip": "Khổ giới hạn đường bộ có giới hạn về chiều cao, chiều rộng.",
        "answers": [
            {
                "id": 1,
                "text": "Là khoảng trống có kích thước giới hạn về chiều cao, chiều rộng của đường, cầu, bến phà, hầm đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",
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
        "required": 0,
        "a1": 0,
        "a2": 3,
        "a34": 3,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 4,
        "index": 4,
        "text": "Trong các khái niệm dưới đây, \"dải phân cách\" được hiểu như thế nào là đúng?",
        "tip": "Dải phân cách phân chia mặt đường thành hai chiều xe chạy riêng biệt.",
        "answers": [
            {
                "id": 1,
                "text": "Là bộ phận của đường để ngăn cách không cho các loại xe vào những nơi không được phép.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Là bộ phận của đường để phân tách phần đường xe chạy và hành lang an toàn giao thông.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 3,
        "a2": 4,
        "a34": 4,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 5,
        "index": 5,
        "text": "\"Dải phân cách\" trên đường bộ gồm những loại nào?",
        "tip": "Dải phân cách gồm cố định và di động.",
        "answers": [
            {
                "id": 1,
                "text": "Dải phân cách gồm loại cố định và loại di động.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Dải phân cách gồm tường chống ồn, hộ lan cứng và hộ lan mềm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dải phân cách gồm giá long môn và biển báo hiệu đường bộ.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 4,
        "a2": 5,
        "a34": 5,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 6,
        "index": 6,
        "text": "Người lái xe được hiểu như thế nào trong các khái niệm dưới đây?",
        "tip": "Người lái xe là người điều khiển xe cơ giới.",
        "answers": [
            {
                "id": 1,
                "text": "Là người điều khiển xe cơ giới",
                "correct": true
            },
            {
                "id": 2,
                "text": "Là người điều khiển xe thô sơ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Là người điều khiển xe có súc vật kéo.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 5,
        "a2": 6,
        "a34": 6,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 7,
        "index": 7,
        "text": "Đường mà trên đó phương tiện tham gia giao thông được các phương tiện giao thông đến từ hướng khác nhường đường khi qua nơi đường giao nhau, được cắm biển báo hiệu đường ưu tiên là loại đường gì?",
        "tip": "Đường ưu tiên được nhường đường khi qua nơi giao nhau.",
        "answers": [
            {
                "id": 1,
                "text": "Đường không ưu tiên.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đường tỉnh lộ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Đường quốc lộ.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Đường ưu tiên.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 6,
        "a2": 7,
        "a34": 7,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 8,
        "index": 8,
        "text": "Khái niệm \"phương tiện giao thông cơ giới đường bộ\" được hiểu thế nào là đúng?",
        "tip": "Phương tiện giao thông cơ giới không có xe máy chuyên dùng.",
        "answers": [
            {
                "id": 1,
                "text": "Gồm xe ô tô; máy kéo; xe mô tô hai bánh; xe mô tô ba bánh; xe gắn máy; xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Gồm xe ô tô; máy kéo; rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo; xe mô tô hai bánh; xe mô tô ba bánh, xe gắn máy (kể cả xe máy điện) và các loại xe tương tự.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 7,
        "a2": 8,
        "a34": 8,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 9,
        "index": 9,
        "text": "Khái niệm \"phương tiện giao thông thô sơ đường bộ\" được hiểu thế nào là đúng?",
        "tip": "Phương tiện giao thông thô sơ không có xe máy chuyên dùng; xe ô tô.",
        "answers": [
            {
                "id": 1,
                "text": "Gồm xe đạp (kể cả xe đạp máy, xe đạp điện), xe xích lô, xe lăn dùng cho người khuyết tật, xe súc vật kéo và các loại xe tương tự.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Gồm xe đạp (kể cả xe đạp máy, xe đạp điện), xe gắn máy, xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Gồm xe ô tô, máy kéo, rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 8,
        "a2": 9,
        "a34": 9,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 10,
        "index": 10,
        "text": "\"Phương tiện tham gia giao thông đường bộ\" gồm những loại nào?",
        "tip": "Phương tiện giao thông gồm tất cả các loại phương tiện.",
        "answers": [
            {
                "id": 1,
                "text": "Phương tiện giao thông cơ giới đường bộ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Phương tiện giao thông thô sơ đường bộ và xe máy chuyên dùng.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 9,
        "a2": 10,
        "a34": 10,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 11,
        "index": 11,
        "text": "\"Người tham gia giao thông đường bộ\" gồm những đối tượng nào?",
        "tip": "Người tham gia giao thông gồm người sử dụng phương tiện và người đi bộ.",
        "answers": [
            {
                "id": 1,
                "text": "Người điều khiển, người sử dụng phương tiện tham gia giao thông đường bộ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Người điều khiển, dẫn dắt súc vật; người đi bộ trên đường bộ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 10,
        "a2": 11,
        "a34": 11,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 12,
        "index": 12,
        "text": "\"Người điều khiển phương tiện tham gia giao thông đường bộ\" gồm những đối tượng nào dưới đây?",
        "tip": "Người điều khiển phương tiện gồm cả xe cơ giới và xe máy chuyên dùng.",
        "answers": [
            {
                "id": 1,
                "text": "Người điều khiển xe cơ giới, người điều khiển xe thô sơ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Người điều khiển xe máy chuyên dùng tham gia giao thông đường bộ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 11,
        "a2": 12,
        "a34": 12,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 13,
        "index": 13,
        "text": "Khái niệm \"người điều khiển giao thông\" được hiểu như thế nào là đúng?",
        "tip": "Người điều khiển giao thông là cảnh sát giao thông.",
        "answers": [
            {
                "id": 1,
                "text": "Là người điều khiển phương tiện tham gia giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Là cảnh sát giao thông, người được giao nhiệm vụ hướng dẫn giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Là người tham gia giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 12,
        "a2": 13,
        "a34": 13,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 14,
        "index": 14,
        "text": "Trong các khái niệm dưới đây khái niệm \"dừng xe\" được hiểu như thế nào là đúng?",
        "tip": "Dừng xe là đứng yên tạm thời.",
        "answers": [
            {
                "id": 1,
                "text": "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian để cho người lên, xuống phương tiện, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Là trạng thái đứng yên tạm thời của phương tiện giao thông trong một khoảng thời gian cần thiết đủ để cho người lên, xuống phương tiện, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian giữa 02 lần vận chuyển hàng hóa hoặc hành khách.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 13,
        "a2": 14,
        "a34": 14,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 15,
        "index": 15,
        "text": "Khái niệm \"đỗ xe\" được hiểu như thế nào là đúng quy tắc giao thông?",
        "tip": "Đỗ xe là đứng yên không giới hạn thời gian.",
        "answers": [
            {
                "id": 1,
                "text": "Là trạng thái đứng yên của phương tiện giao thông có giới hạn trong một khoảng thời gian cần thiết đủ để cho người lên, xuống phương tiện đó, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 14,
        "a2": 15,
        "a34": 15,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 16,
        "index": 16,
        "text": "Khái niệm \"đường cao tốc\" được hiểu như thế nào là đúng?",
        "tip": "Đường cao tốc gồm tất cả các ý.",
        "answers": [
            {
                "id": 1,
                "text": "Đường dành riêng cho xe ôtô và một số loại xe chuyên dùng được phép đi vào theo quy định của Luật Giao thông đường bộ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Có dải phân cách phân chia đường cho xe chạy hai chiều riêng biệt mà dải phân cách này xe không đi được lên trên; không giao nhau cùng mức với một hoặc một số đường khác.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Được bố trí đầy đủ trang thiết bị phục vụ, bảo đảm giao thông liên tục, an toàn, rút ngắn thời gian hành trình và chỉ cho xe ra, vào ở những điểm nhất định.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Tất cả các ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 16,
        "a34": 16,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 17,
        "index": 17,
        "text": "Hành vi nào dưới đây bị nghiêm cấm?",
        "tip": "Hành vi làm hỏng cọc tiêu bị nghiêm cấm.",
        "answers": [
            {
                "id": 1,
                "text": "Đỗ xe trên đường phố",
                "correct": false
            },
            {
                "id": 2,
                "text": "Sử dụng xe đạp đi trên các tuyến quốc lộ có tốc độ cao.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Làm hỏng (cố ý) cọc tiêu, gương cầu, dải phân cách.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Sử dụng còi và quay đầu xe trong khu dân cư.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 17,
        "a34": 17,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 18,
        "index": 18,
        "text": "Hành vi đưa xe cơ giới, xe máy chuyên dùng không bảo đảm tiêu chuẩn an toàn kỹ thuật và bảo vệ môi trường vào tham gia giao thông đường bộ có bị nghiêm cấm hay không?",
        "tip": "Hành vi đưa xe không đảm bảo an toàn kỹ thuật bị nghiêm cấm.",
        "answers": [
            {
                "id": 1,
                "text": "Không nghiêm cấm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Bị nghiêm cấm.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Bị nghiêm cấm tùy theo các tuyến đường.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Bị nghiêm cấm tuỳ theo loại xe.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 18,
        "a34": 18,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 19,
        "index": 19,
        "text": "Cuộc đua xe chỉ được thực hiện khi nào?",
        "tip": "Cuộc đua xe cần cấp phép.",
        "answers": [
            {
                "id": 1,
                "text": "Diễn ra trên đường phố không có người qua lại.",
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
        "required": 1,
        "a1": 15,
        "a2": 19,
        "a34": 19,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 20,
        "index": 20,
        "text": "Người điều khiển phương tiện giao thông đường bộ mà trong cơ thể có chất ma túy có bị nghiêm cấm hay không?",
        "tip": "Có ma túy bị nghiêm cấm.",
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
                "text": "Không bị nghiêm cấm, nếu có chất ma túy ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 16,
        "a2": 20,
        "a34": 20,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 21,
        "index": 21,
        "text": "Việc lái xe mô tô, ô tô, máy kéo ngay sau khi uống rượu, bia có được phép hay không?",
        "tip": "Uống rượu bia không được lái xe,",
        "answers": [
            {
                "id": 1,
                "text": "Không được phép.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Chỉ được lái ở tốc độ chậm và quãng đường ngắn.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Chỉ được lái nếu trong cơ thể có nồng độ cồn thấp.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 21,
        "a34": 21,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 22,
        "index": 22,
        "text": "Người điều khiển xe ô tô, mô tô, máy kéo trên đường mà trong máu hoặc hơi thở có nồng độ cồn có bị nghiêm cấm không?",
        "tip": "Trong máu hoặc hơi thở có nồng độ cồn bị nghiêm cấm.",
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
        "required": 1,
        "a1": 0,
        "a2": 22,
        "a34": 22,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 23,
        "index": 23,
        "text": "Sử dụng rượu, bia khi lái xe, nếu bị phát hiện thì bị xử lý như thế nào?",
        "tip": "Sử dụng rượu, bia khi lái xe bị phạt hành chính hoặc xử lý hình sự.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ bị nhắc nhở.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Bị xử phạt hành chính hoặc có thể bị xử lý hình sự tùy theo mức độ vi phạm.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Không bị xử lý hình sự.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 17,
        "a2": 23,
        "a34": 23,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 24,
        "index": 24,
        "text": "Theo Luật phòng chống tác hại của rượu, bia, đối tượng nào dưới đây bị cấm sử dụng rượu, bia khi tham gia giao thông?",
        "tip": "Người điều khiển bị cấm sử dụng rượu, bia khi tham gia giao thông.",
        "answers": [
            {
                "id": 1,
                "text": "Người điều khiển: Xe ô tô, xe mô tô, xe đạp, xe gắn máy.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Người ngồi phía sau người điều khiển xe cơ giới.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Người đi bộ.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 18,
        "a2": 24,
        "a34": 24,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 25,
        "index": 25,
        "text": "Hành vi giao xe cơ giới, xe máy chuyên dùng cho người không đủ điều kiện để điều khiển xe tham gia giao thông có được phép hay không?",
        "tip": "Không được phép giao xe cho người không đủ điều kiện tham gia giao thông.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ được thực hiện nếu đã hướng dẫn đầy đủ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không được phép.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Được phép tùy từng trường hợp.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Chỉ được phép thực hiện với thành viên trong gia đình.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 25,
        "a34": 25,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 26,
        "index": 26,
        "text": "Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có bị nghiêm cấm hay không?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Bị nghiêm cấm tùy từng trường hợp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không bị nghiêm cấm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Bị nghiêm cấm.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 19,
        "a2": 26,
        "a34": 26,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 27,
        "index": 27,
        "text": "Khi lái xe trên đường, người lái xe cần quan sát và bảo đảm tốc độ phương tiện như thế nào?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ lớn hơn tốc độ tối đa cho phép khi đường vắng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chỉ lớn hơn tốc độ tối đa cho phép vào ban đêm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không vượt quá tốc độ cho phép.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 27,
        "a34": 27,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 28,
        "index": 28,
        "text": "Phương tiện giao thông đường bộ di chuyển với tốc độ thấp hơn phải đi như thế nào?",
        "tip": "Di chuyển tốc độ thấp hơn đi về phía bên phải.",
        "answers": [
            {
                "id": 1,
                "text": "Đi về phía bên trái.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đi về phía bên phải.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Đi ở giữa.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 28,
        "a34": 28,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 29,
        "index": 29,
        "text": "Trên đường có nhiều làn đường, khi điều khiển phương tiện ở tốc độ chậm bạn phải đi ở làn đường nào?",
        "tip": "Tốc độ chậm đi ở làn bên phải trong cùng.",
        "answers": [
            {
                "id": 1,
                "text": "Đi ở làn bên phải trong cùng.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Đi ở làn phía bên trái.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Đi ở làn giữa.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Đi ở bất cứ làn nào nhưng phải bấm đèn cảnh báo nguy hiểm để báo hiệu cho các phương tiện khác.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 29,
        "a34": 29,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 30,
        "index": 30,
        "text": "Hành vi vượt xe tại các vị trí có tầm nhìn hạn chế, đường vòng, đầu dốc có bị nghiêm cấm hay không?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Không bị nghiêm cấm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không bị nghiêm cấm khi rất vội.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Bị nghiêm cấm.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Không bị nghiêm cấm khi khẩn cấp.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 30,
        "a34": 30,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 31,
        "index": 31,
        "text": "Khi lái xe trong khu đô thị và đông dân cư trừ các khu vực có biển cấm sử dụng còi, người lái xe được sử dụng còi như thế nào trong các trường hợp dưới đây?",
        "tip": "Chỉ sử dụng còi từ 5 giờ sáng đến 22 giờ tối.",
        "answers": [
            {
                "id": 1,
                "text": "Từ 22 giờ đêm đến 5 giờ sáng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Từ 5 giờ sáng đến 22 giờ tối.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Từ 23 giờ đêm đến 5 giờ sáng hôm sau.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 20,
        "a2": 31,
        "a34": 31,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 32,
        "index": 32,
        "text": "Người lái xe sử dụng đèn như thế nào khi lái xe trong khu đô thị và đông dân cư vào ban đêm?",
        "tip": "Trong đô thị sử dụng đèn chiếu gần.",
        "answers": [
            {
                "id": 1,
                "text": "Bất cứ đèn nào miễn là mắt nhìn rõ phía trước.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chỉ bật đèn chiếu xa (đèn pha) khi không nhìn rõ đường.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Đèn chiếu xa (đèn pha) khi đường vắng, đèn pha chiếu gần (đèn cốt) khi có xe đi ngược chiều.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Đèn chiếu gần (đèn cốt).",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 21,
        "a2": 32,
        "a34": 32,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 33,
        "index": 33,
        "text": "Hành vi lắp đặt, sử dụng còi, đèn không đúng thiết kế của nhà sản xuất đối với từng loại xe cơ giới có được phép hay không?",
        "tip": "Không được phép lắp đặt còi đèn không đúng thiết kế.",
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
            },
            {
                "id": 3,
                "text": "Được phép tùy từng trường hợp.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 33,
        "a34": 33,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 34,
        "index": 34,
        "text": "Trong trường hợp đặc biệt, để được lắp đặt, sử dụng còi, đèn khác thiết kế của nhà sản xuất đối với từng loại xe cơ giới bạn phải đảm bảo yêu cầu nào dưới đây?",
        "tip": "Lắp đặt còi đèn không đúng thiết kế phải được chấp thuận của cơ quan có thẩm quyền.",
        "answers": [
            {
                "id": 1,
                "text": "Phải đảm bảo phụ tùng do đúng nhà sản xuất đó cung cấp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Phải được chấp thuận của cơ quan có thẩm quyền.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Phải là xe đăng ký và hoạt động tại các khu vực có địa hình phức tạp.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 22,
        "a2": 34,
        "a34": 34,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 35,
        "index": 35,
        "text": "Việc sản xuất, mua bán, sử dụng biển số xe cơ giới, xe máy chuyên dùng được quy định như thế nào trong Luật Giao thông đường bộ?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Được phép sản xuất, sử dụng khi bị mất biển số.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Được phép mua bán, sử dụng khi bị mất biển số.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Nghiêm cấm sản xuất, mua bán, sử dụng trái phép.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 35,
        "a34": 35,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 36,
        "index": 36,
        "text": "Người lái xe không được vượt xe khác khi gặp trường hợp nào ghi ở dưới đây?",
        "tip": "Không được vượt trên cầu hẹp có một làn xe.",
        "answers": [
            {
                "id": 1,
                "text": "Trên cầu hẹp có một làn xe. Nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt; xe được quyền ưu tiên đang phát tín hiệu ưu tiên đi làm nhiệm vụ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Trên cầu có từ 02 làn xe trở lên; nơi đường bộ giao nhau không cùng mức với đường sắt; xe được quyền ưu tiên đang đi phía trước nhưng không phát tín hiệu ưu tiên.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Trên đường có 2 làn đường được phân chia làn bằng vạch kẻ nét đứt.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 36,
        "a34": 36,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 37,
        "index": 37,
        "text": "Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, đường cao tốc, đường hẹp, đường dốc, tại nơi đường bộ giao nhau cùng mức với đường sắt có được quay đầu xe hay không?",
        "tip": "Không được phép quay đầu xe ở phần đường dành cho người đi bộ qua đường.",
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
            },
            {
                "id": 3,
                "text": "Tùy từng trường hợp.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 23,
        "a2": 37,
        "a34": 37,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 38,
        "index": 38,
        "text": "Bạn đang lái xe phía trước có một xe cảnh sát giao thông không phát tín hiệu ưu tiên bạn có được phép vượt hay không?",
        "tip": "Được vượt khi xe không phát tín hiệu ưu tiên.",
        "answers": [
            {
                "id": 1,
                "text": "Không được vượt.",
                "correct": false
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
                "text": "Được vượt khi đảm bảo an toàn.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 24,
        "a2": 38,
        "a34": 38,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 39,
        "index": 39,
        "text": "Bạn đang lái xe phía trước có một xe cứu thương đang phát tín hiệu ưu tiên bạn có được phép vượt hay không?",
        "tip": "Không được vượt khi đang phát tín hiệu ưu tiên.",
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
                "text": "Được vượt khi đảm bảo an toàn.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 25,
        "a2": 39,
        "a34": 39,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 40,
        "index": 40,
        "text": "Người lái xe không được quay đầu xe trong các trường hợp nào dưới đây?",
        "tip": "Không được phép quay đầu xe ở phần đường dành cho người đi bộ qua đường.",
        "answers": [
            {
                "id": 1,
                "text": "Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, đường cao tốc, đường hẹp, đường dốc, tại nơi đường bộ giao nhau cùng mức với đường sắt.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Ở phía trước hoặc phía sau của phần đường dành cho người đi bộ qua đường, trên đường quốc lộ, tại nơi đường bộ giao nhau không cùng mức với đường sắt.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 40,
        "a34": 40,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 41,
        "index": 41,
        "text": "Bạn đang lái xe trong khu dân cư, có đông xe qua lại, nếu muốn quay đầu xe bạn cần làm gì để tránh ùn tắc và đảm bảo an toàn giao thông?",
        "tip": "Chỉ quay đầu xe ở điểm giao cắt hoặc nơi có biển báo cho phép quay đầu.",
        "answers": [
            {
                "id": 1,
                "text": "Đi tiếp đến điểm giao cắt gần nhất hoặc nơi có biển báo cho phép quay đầu xe.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Bấm đèn khẩn cấp và quay đầu xe từ từ bảo đảm an toàn.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Bấm còi liên tục khi quay đầu xe để cảnh báo các xe khác.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Nhờ một người ra hiệu giao thông trên đường chậm lại trước khi quay đầu.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 41,
        "a34": 41,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 42,
        "index": 42,
        "text": "Người lái xe không được lùi xe ở những khu vực nào dưới đây?",
        "tip": "Cấm lùi xe ở khu vực cấm dừng và nơi đường bộ giao nhau.",
        "answers": [
            {
                "id": 1,
                "text": "Ở khu vực cho phép đỗ xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Ở khu vực cấm dừng và trên phần đường dành cho người đi bộ qua đường.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Nơi đường bộ giao nhau, đường bộ giao nhau cùng mức với đường sắt, nơi tầm nhìn bị che khuất, trong hầm đường bộ, đường cao tốc.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ý 2 và ý 3.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 42,
        "a34": 42,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 43,
        "index": 43,
        "text": "Người điều khiển phương tiện giao thông trên đường phố có được dừng xe, đỗ xe trên miệng cống thoát nước, miệng hầm của đường điện thoại, điện cao thế, chỗ dành riêng cho xe chữa cháy lấy nước hay không?",
        "tip": "Không được dừng, đỗ xe trên miệng cống thoát nước.",
        "answers": [
            {
                "id": 1,
                "text": "Được dừng xe, đỗ xe trong trường hợp cần thiết.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không được dừng xe, đỗ xe.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Được dừng xe, không được đỗ xe.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 43,
        "a34": 43,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 44,
        "index": 44,
        "text": "Khi xe đã kéo 1 xe hoặc xe đã kéo 1 rơ moóc, bạn có được phép kéo thêm xe (kể cả xe thô sơ) hoặc rơ moóc thứ hai hay không?",
        "tip": "Xe kéo đã kéo rơ moóc không được kéo thêm xe.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ được thực hiện trên đường quốc lộ có hai làn xe một chiều.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chỉ được thực hiện trên đường cao tốc.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không được thực hiện vào ban ngày.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Không được phép.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 44,
        "a34": 44,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 45,
        "index": 45,
        "text": "Người điều khiển xe mô tô hai bánh, ba bánh, xe gắn máy có được phép sử dụng xe để kéo hoặc đẩy các phương tiện khác khi tham gia giao thông không?",
        "tip": "Xe mô tô không được kéo xe khác.",
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
        "required": 1,
        "a1": 26,
        "a2": 45,
        "a34": 45,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 46,
        "index": 46,
        "text": "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe quệt xuống đường khi xe đang chạy có được phép hay không?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Được phép.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Tùy trường hợp.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không được phép.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 27,
        "a2": 46,
        "a34": 46,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 47,
        "index": 47,
        "text": "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào không được phép?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe quệt xuống đường khi xe đang chạy.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Buông một tay; sử dụng xe để chở người hoặc hàng hoá; để chân chạm xuống đất khi khởi hành.",
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
        "required": 1,
        "a1": 28,
        "a2": 47,
        "a34": 47,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 48,
        "index": 48,
        "text": "Người ngồi trên xe mô tô hai bánh, ba bánh, xe gắn máy khi tham gia giao thông có được mang, vác vật cồng kềnh hay không?",
        "tip": "Xe mô tô không được mang vác vật cồng kềnh.",
        "answers": [
            {
                "id": 1,
                "text": "Được mang, vác tùy trường hợp cụ thể.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không được mang, vác.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Được mang, vác nhưng phải đảm bảo an toàn.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Được mang vác tùy theo sức khỏe của bản thân.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 29,
        "a2": 48,
        "a34": 48,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 49,
        "index": 49,
        "text": "Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được bám, kéo hoặc đẩy các phương tiện khác không?",
        "tip": "Xe mô tô không được kéo xe khác.",
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
        "required": 1,
        "a1": 30,
        "a2": 49,
        "a34": 49,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 50,
        "index": 50,
        "text": "Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được sử dụng ô khi trời mưa hay không?",
        "tip": "Không được sử dụng ô.",
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
        "required": 1,
        "a1": 31,
        "a2": 50,
        "a34": 50,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 51,
        "index": 51,
        "text": "Khi đang lên dốc người ngồi trên xe mô tô có được phép kéo theo người đang điều khiển xe đạp hay không?",
        "tip": "Xe mô tô không được kéo xe khác.",
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
                "text": "Chỉ được phép thực hiện trên đường thật vắng.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Chỉ được phép khi người đi xe đạp đã quá mệt.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 32,
        "a2": 51,
        "a34": 51,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 52,
        "index": 52,
        "text": "Hành vi sử dụng xe mô tô để kéo, đẩy xe mô tô khác bị hết xăng đến trạm mua xăng có được phép hay không?",
        "tip": "Xe mô tô không được kéo xe khác.",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ được kéo nếu đã nhìn thấy trạm xăng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chỉ được thực hiện trên đường vắng phương tiện cùng tham gia giao thông.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không được phép.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 33,
        "a2": 52,
        "a34": 52,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 53,
        "index": 53,
        "text": "Hành vi vận chuyển đồ vật cồng kềnh bằng xe mô tô, xe gắn máy khi tham gia giao thông có được phép hay không?",
        "tip": "Xe mô tô không được mang vác vật cồng kềnh.",
        "answers": [
            {
                "id": 1,
                "text": "Không được vận chuyển.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Chỉ được vận chuyển khi đã chằng buộc cẩn thận.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Chỉ được vận chuyển vật cồng kềnh trên xe máy nếu khoảng cách về nhà ngắn hơn 2 km.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 34,
        "a2": 53,
        "a34": 53,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 54,
        "index": 54,
        "text": "Người đủ bao nhiêu tuổi trở lên thì được điều khiển xe ô tô tải, máy kéo có trọng tải từ 3.500 kg trở lên; xe hạng B2 kéo rơ moóc (FB2)?",
        "tip": "Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD.",
        "answers": [
            {
                "id": 1,
                "text": "19 tuổi.",
                "correct": false
            },
            {
                "id": 2,
                "text": "21 tuổi.",
                "correct": true
            },
            {
                "id": 3,
                "text": "20 tuổi.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 54,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 55,
        "index": 55,
        "text": "Người đủ bao nhiêu tuổi trở lên thì được điều khiển xe mô tô hai bánh, xe mô tô ba bánh có dung tích xi lanh từ 50 cm3 trở lên và các loại xe có kết cấu tương tự; xe ô tô tải, máy kéo có trọng tải dưới 3.500 kg; xe ô tô chở người đến 9 chỗ ngồi?",
        "tip": "Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD.",
        "answers": [
            {
                "id": 1,
                "text": "16 tuổi.",
                "correct": false
            },
            {
                "id": 2,
                "text": "18 tuổi.",
                "correct": true
            },
            {
                "id": 3,
                "text": "17 tuổi.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 35,
        "a2": 0,
        "a34": 55,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 56,
        "index": 56,
        "text": "Người lái xe ô tô chở người trên 30 chỗ ngồi (hạng E), lái xe hạng D kéo rơ moóc (FD) phải đủ bao nhiêu tuổi trở lên?",
        "tip": "Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD.",
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
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 56,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 57,
        "index": 57,
        "text": "Tuổi tối đa của người lái xe ô tô chở người trên 30 chỗ ngồi (hạng E) là bao nhiêu tuổi?",
        "tip": "Độ tuổi tối đa người lái xe ô tô hạng E: Nam 55 tuổi và nữ 50 tuổi.",
        "answers": [
            {
                "id": 1,
                "text": "55 tuổi đối với nam và 50 tuổi đối với nữ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "55 tuổi đối với nam và nữ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "60 tuổi đối với nam và 55 tuổi đối với nữ.",
                "correct": false
            },
            {
                "id": 4,
                "text": "45 tuổi đối với nam và 40 tuổi đối với nữ.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 57,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 58,
        "index": 58,
        "text": "Người lái xe chở người từ 10 đến 30 chỗ ngồi (hạng D), lái xe hạng C kéo rơ moóc (FC) phải đủ bao nhiêu tuổi trở lên?",
        "tip": "Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD.",
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
            },
            {
                "id": 4,
                "text": "18 tuổi.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 58,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 59,
        "index": 59,
        "text": "Người đủ 16 tuổi được điều khiển các loại xe nào dưới đây?",
        "tip": "Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD.",
        "answers": [
            {
                "id": 1,
                "text": "Xe mô tô 2 bánh có dung tích xi-lanh từ 50 cm3 trở lên.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe gắn máy có dung tích xi-lanh dưới 50 cm3.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe ô tô tải dưới 3.500 kg; xe chở người đến 9 chỗ ngồi.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Tất cả các ý nêu trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 36,
        "a2": 54,
        "a34": 59,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 60,
        "index": 60,
        "text": "Người có giấy phép lái xe mô tô hạng A1 không được phép điều khiển loại xe nào dưới đây?",
        "tip": "A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật; A2 mô tô 175 cm3 trở lên; A3 xe 3 bánh;",
        "answers": [
            {
                "id": 1,
                "text": "Xe mô tô có dung tích xi-lanh 125 cm3.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe mô tô có dung tích xi-lanh từ 175 cm3 trở lên.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe mô tô có dung tích xi-lanh 100 cm3.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 37,
        "a2": 55,
        "a34": 60,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 61,
        "index": 61,
        "text": "Người có giấy phép lái xe mô tô hạng A1 được phép điều khiển loại xe nào dưới đây?",
        "tip": "A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật; A2 mô tô 175 cm3 trở lên; A3 xe 3 bánh;",
        "answers": [
            {
                "id": 1,
                "text": "Xe mô tô có dung tích xi-lanh từ 50 cm3 đến dưới 175 cm3.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe mô tô ba bánh dành cho người khuyết tật.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 38,
        "a2": 56,
        "a34": 61,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 62,
        "index": 62,
        "text": "Người có giấy phép lái xe mô tô hạng A2 được phép điều khiển loại xe nào dưới đây?",
        "tip": "A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật; A2 mô tô 175 cm3 trở lên; A3 xe 3 bánh;",
        "answers": [
            {
                "id": 1,
                "text": "Xe mô tô ba bánh.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe mô tô hai bánh có dung tích xi lanh từ 175 cm3 trở lên và các loại xe quy định cho giấy phép lái xe hạng A1.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Các loại máy kéo nhỏ có trọng tải đến 1.000 kg.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 57,
        "a34": 62,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 63,
        "index": 63,
        "text": "Người có giấy phép lái xe mô tô hạng A3 được phép điều khiển loại xe nào dưới đây?",
        "tip": "A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật; A2 mô tô 175 cm3 trở lên; A3 xe 3 bánh;",
        "answers": [
            {
                "id": 1,
                "text": "Xe mô tô ba bánh.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe mô tô hai bánh có dung tích xi lanh từ 175 cm3 trở lên.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Các loại máy kéo nhỏ có trọng tải đến 1.000 kg.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 58,
        "a34": 63,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 64,
        "index": 64,
        "text": "Người có giấy phép lái xe hạng B1 số tự động được điều khiển loại xe nào?",
        "tip": "B1, B2 đến 9 chỗ ngồi, xe tải dưới 3.500 kg; B1 không hành nghề lái xe.",
        "answers": [
            {
                "id": 1,
                "text": "Ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật. Không được hành nghề lái xe.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật. Được hành nghề lái xe kinh doanh vận tải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Ô tô chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 64,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 65,
        "index": 65,
        "text": "Người có giấy phép lái xe hạng B1 được điều khiển loại xe nào?",
        "tip": "B1, B2 đến 9 chỗ ngồi, xe tải dưới 3.500 kg; B1 không hành nghề lái xe.",
        "answers": [
            {
                "id": 1,
                "text": "Ô tô chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500 kg; máy kéo kéo một rơ moóc có trọng tải thiết kế dưới 3.500 kg. Được hành nghề lái xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Ô tô chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500 kg; máy kéo kéo một rơ moóc có trọng tải thiết kế dưới 3.500 kg. Không hành nghề lái xe.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế trên 3.500 kg; ô tô dùng cho người khuyết tật.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 65,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 66,
        "index": 66,
        "text": "Người có giấy phép lái xe hạng B2 được điều khiển loại xe nào?",
        "tip": "B2 đến 9 chỗ ngồi, xe tải dưới 3.500 kg.",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô chở người trên 9 chỗ ngồi; xe ô tô tải; máy kéo có trọng tải trên 3.500 kg.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô chở người đến 9 chỗ ngồi; xe ô tô tải; máy kéo có trọng tải dưới 3.500 kg.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe ô tô chở người từ 10 đến 30 chỗ ngồi; xe ô tô tải; máy kéo có trọng tải trên 3.500 kg.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 66,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 67,
        "index": 67,
        "text": "Người có giấy phép lái xe hạng C được điều khiển loại xe nào?",
        "tip": "C đến 9 chỗ ngồi, xe trên 3.500 kg.",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô chở người trên 9 chỗ ngồi; xe ô tô tải; máy kéo có trọng tải trên 3.500 kg.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô chở người từ 10 đến 30 chỗ ngồi; xe ô tô tải; máy kéo có trọng tải trên 3.500 kg.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe ô tô chở người đến 9 chỗ ngồi; xe ô tô tải; máy kéo có trọng tải trên 3.500 kg.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 67,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 68,
        "index": 68,
        "text": "Người có giấy phép lái xe hạng D được điều khiển loại xe nào dưới đây?",
        "tip": "D chở đến 30 người.",
        "answers": [
            {
                "id": 1,
                "text": "Xe ô tô chở người đến 30 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe ô tô chở người trên 30 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe theo quy định cho giấy phép lái xe hạng B1, B2, C và FB2.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 68,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 69,
        "index": 69,
        "text": "Người có giấy phép lái xe hạng E được điều khiển loại xe nào dưới đây?",
        "tip": "E chở trên 30 người.",
        "answers": [
            {
                "id": 1,
                "text": "Xe kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe theo quy định cho giấy phép lái xe hạng B1, B2, C và FB2.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô chở người trên 30 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe kéo rơ moóc và được điều khiển các loại xe; ô tô chở khách nối toa và các loại xe quy định cho giấy phép lái xe hạng B1, B2, C, D, FB2, FD.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 69,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 70,
        "index": 70,
        "text": "Người có giấy phép lái xe hạng FC được điều khiển loại xe nào dưới đây?",
        "tip": "FC: C + kéo (ô tô đầu kéo, kéo sơ mi rơ moóc); FE: E + kéo (ô tô chở khách nối toa)",
        "answers": [
            {
                "id": 1,
                "text": "Các loại xe được quy định tại giấy phép lái xe hạng C có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc, ô tô chở khách nối toa và được điều khiển các loại xe quy định cho giấy phép lái xe hạng B1, B2 và FB2.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Các loại xe được quy định tại giấy phép lái xe hạng C có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe quy định cho giấy phép lái xe hạng B1, B2 và FB2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Mô tô hai bánh, các loại xe được quy định tại giấy phép lái xe hạng C có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe quy định cho giấy phép lái xe hạng B1, B2 và FB2.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Tất cả các loại xe nêu trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 70,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 71,
        "index": 71,
        "text": "Người có giấy phép lái xe hạng FE được điều khiển loại xe nào dưới đây?",
        "tip": "FC: C + kéo (ô tô đầu kéo, kéo sơ mi rơ moóc); FE: E + kéo (ô tô chở khách nối toa)",
        "answers": [
            {
                "id": 1,
                "text": "Các loại xe được quy định tại giấy phép lái xe hạng E có kéo rơ moóc và được điều khiển các loại xe: ô tô chở khách nối toa và các loại xe quy định cho giấy phép lái xe hạng B1, B2, C, D, FB2, FD.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Các loại xe được quy định tại giấy phép lái xe hạng E có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe: ô tô chở khách nối toa và các loại xe quy định cho giấy phép lái xe hạng B1, B2, C, D, FB2, FD.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tất cả các loại xe nêu trên.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 71,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q72.png",
        "no": 72,
        "index": 72,
        "text": "Biển báo hiệu có dạng hình tròn, viền đỏ, nền trắng, trên nền có hình vẽ hoặc chữ số, chữ viết màu đen là loại biển gì dưới đây?",
        "tip": "Biển cấm: Vòng tròn đỏ.",
        "answers": [
            {
                "id": 1,
                "text": "Biển báo nguy hiểm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển báo cấm.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển báo hiệu lệnh.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển báo chỉ dẫn.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 39,
        "a2": 59,
        "a34": 72,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q73.png",
        "no": 73,
        "index": 73,
        "text": "Biển báo hiệu có dạng tam giác đều, viền đỏ, nền màu vàng, trên có hình vẽ màu đen là loại biển gì dưới đây?",
        "tip": "Biển nguy hiểm: Hình tam giác vàng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển báo nguy hiểm.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển báo cấm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển báo hiệu lệnh.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển báo chỉ dẫn.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 40,
        "a2": 60,
        "a34": 73,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q74.png",
        "no": 74,
        "index": 74,
        "text": "Biển báo hiệu hình tròn có nền xanh lam có hình vẽ màu trắng là loại biển gì dưới đây?",
        "tip": "Biển hiệu lệnh: Vòng tròn xanh.",
        "answers": [
            {
                "id": 1,
                "text": "Biển báo nguy hiểm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển báo cấm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển báo hiệu lệnh phải thi hành.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Biển báo chỉ dẫn.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 41,
        "a2": 61,
        "a34": 74,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q75.png",
        "no": 75,
        "index": 75,
        "text": "Biển báo hiệu hình chữ nhật hoặc hình vuông hoặc hình mũi tên nền xanh lam là loại biển gì dưới đây?",
        "tip": "Biển chỉ dẫn: Hình vuông hoặc hình chữ nhật xanh.",
        "answers": [
            {
                "id": 1,
                "text": "Biển báo nguy hiểm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển báo cấm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển báo hiệu lệnh phải thi hành.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển báo chỉ dẫn.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 42,
        "a2": 62,
        "a34": 75,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 76,
        "index": 76,
        "text": "Khi tập lái xe ô tô, người tập lái xe phải thực hiện các điều kiện gì dưới đây?",
        "tip": "Khi tập lái cần có giáo viên và phù hiệu.",
        "answers": [
            {
                "id": 1,
                "text": "Phải thực hành lái xe trên xe tập lái và có giáo viên bảo trợ tay lái.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Phải mang theo phù hiệu \"học viên tập lái xe\".",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phải mang theo giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường còn hiệu lực, giấy phép vận chuyển (nếu các loại xe đó cần phải có).",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 76,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 77,
        "index": 77,
        "text": "Khi dạy thực hành lái xe, giáo viên phải mang theo các loại giấy tờ gì dưới đây?",
        "tip": "Giáo viên phải mang giấy phép xe tập lái.",
        "answers": [
            {
                "id": 1,
                "text": "Phải mang theo phù hiệu \"Giáo viên dạy lái xe\", giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường còn hiệu lực, giấy phép xe tập lái do cơ quan có thẩm quyền cấp còn hiệu lực.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Phải mang theo phù hiệu \"học viên tập lái xe\" và kế hoạch học tập của khóa học.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phải mang theo giấy chứng nhận Giáo viên dạy thực hành lái xe, biên lai thu phí bảo trì đường bộ.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 77,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 78,
        "index": 78,
        "text": "Xe ô tô tập lái phải đảm bảo các điều kiện gì dưới đây?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Gắn 02 biển \"TẬP LÁI\" trước và sau xe, có hệ thống phanh phụ được lắp đặt bảo đảm hiệu quả phanh, được bố trí bên ghế ngồi của giáo viên dạy thực hành lái xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe tập lái loại tải thùng có mui che mưa, che nắng, ghế ngồi cho học viên, có giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường phương tiện giao thông cơ giới đường bộ còn hiệu lực.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 78,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 79,
        "index": 79,
        "text": "Việc sát hạch cấp giấy phép lái xe ô tô phải thực hiện ở đâu và như thế nào?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Tại các cơ sở đào tạo lái xe có đủ điều kiện và phải bảo đảm công khai, minh bạch.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Tại sân tập lái của cơ sở đào tạo lái xe và phải đảm bảo công khai, minh bạch.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tại các trung tâm sát hạch lái xe có đủ điều kiện hoạt động và phải bảo đảm công khai, minh bạch.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 63,
        "a34": 79,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 80,
        "index": 80,
        "text": "Khi điều khiển xe chạy trên đường, người lái xe phải mang theo các loại giấy tờ gì?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Giấy chứng nhận tốt nghiệp khóa đào tạo của hạng xe đang điều khiển, đăng ký xe, giấy phép lưu hành xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giấy phép lái xe phù hợp với loại xe đó; lệnh vận chuyển, đăng ký xe, giấy chứng nhận kiểm tra chất lượng an toàn kỹ thuật và bảo vệ môi trường của xe cơ giới sau khi cải tạo; giấy phép vận chuyển (nếu loại xe đó cần phải có).",
                "correct": false
            },
            {
                "id": 3,
                "text": "Giấy phép lái xe phù hợp với loại xe đó, đăng ký xe, giấy chứng nhận kiểm định kỹ thuật và bảo vệ môi trường, giấy chứng nhận bảo hiểm trách nhiệm dân sự của chủ xe cơ giới và giấy phép vận chuyển (nếu loại xe đó cần phải có), các giấy tờ phải còn giá trị sử dụng.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 64,
        "a34": 80,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 81,
        "index": 81,
        "text": "Khi sử dụng giấy phép lái xe đã khai báo mất để điều khiển phương tiện cơ giới đường bộ, ngoài việc bị thu hồi giấy phép lái xe, chịu trách nhiệm trước pháp luật, người lái xe không được cấp giấy phép lái xe trong thời gian bao nhiêu năm?",
        "tip": "05 năm không cấp lại nếu sử dụng bằng lái đã khai báo mất.",
        "answers": [
            {
                "id": 1,
                "text": "02 năm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "03 năm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "05 năm.",
                "correct": true
            },
            {
                "id": 4,
                "text": "04 năm.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 43,
        "a2": 65,
        "a34": 81,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q82.png",
        "no": 82,
        "index": 82,
        "text": "Khi gặp hiệu lệnh như dưới đây của cảnh sát giao thông thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Người điều khiển giao thông tay giang ngang thì trước mặt và sau lưng dừng lại.",
        "answers": [
            {
                "id": 1,
                "text": "Người tham gia giao thông ở các hướng phải dừng lại.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Người tham gia giao thông ở các hướng được đi theo chiều gậy chỉ của cảnh sát giao thông.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Người tham gia giao thông ở phía trước và phía sau người điều khiển được đi tất cả các hướng; giao thông ở phía bên phải và phía bên trái người điều khiển phải dừng lại.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Người tham gia giao thông ở phía trước và phía sau người điều khiển phải dừng lại; giao thông ở phía bên phải và bên trái người điều khiển được đi tất cả các hướng.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 44,
        "a2": 66,
        "a34": 82,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q83.png",
        "no": 83,
        "index": 83,
        "text": "Khi gặp hiệu lệnh như dưới đây của cảnh sát giao thông thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Người điều khiển giao thông giơ tay thẳng đứng thì ở các hướng phải dừng lại.",
        "answers": [
            {
                "id": 1,
                "text": "Người tham gia giao thông ở hướng đối diện cảnh sát giao thông được đi, các hướng khác cần phải dừng lại.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Người tham gia giao thông được rẽ phải theo chiều mũi tên màu xanh ở bục cảnh sát giao thông.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Người tham gia giao thông ở các hướng đều phải dừng lại trừ các xe đã ở trong khu vực giao nhau.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Người ở hướng đối diện cảnh sát giao thông phải dừng lại, các hướng khác được đi trong đó có bạn.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 45,
        "a2": 67,
        "a34": 83,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 84,
        "index": 84,
        "text": "Trên đường giao thông, khi hiệu lệnh của người điều khiển giao thông trái với hiệu lệnh của đèn hoặc biển báo hiệu thì người tham gia giao thông phải chấp hành theo hiệu lệnh nào?",
        "tip": "Ưu tiên hiệu lệnh của người điều khiển giao thông.",
        "answers": [
            {
                "id": 1,
                "text": "Hiệu lệnh của người điều khiển giao thông.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Hiệu lệnh của đèn điều khiển giao thông.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Hiệu lệnh của biển báo hiệu đường bộ.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Theo quyết định của người tham gia giao thông nhưng phải bảo đảm an toàn.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 68,
        "a34": 84,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 85,
        "index": 85,
        "text": "Tại nơi có biển báo hiệu cố định lại có báo hiệu tạm thời thì người tham gia giao thông phải chấp hành hiệu lệnh của báo hiệu nào?",
        "tip": "Ưu tiên biển báo tạm thời.",
        "answers": [
            {
                "id": 1,
                "text": "Biển báo hiệu cố định.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Báo hiệu tạm thời.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 46,
        "a2": 69,
        "a34": 85,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 86,
        "index": 86,
        "text": "Trên đường có nhiều làn đường cho xe đi cùng chiều được phân biệt bằng vạch kẻ phân làn đường, người điều khiển phương tiện phải cho xe đi như thế nào?",
        "tip": "Chuyển làn đường phải có tín hiệu báo trước.",
        "answers": [
            {
                "id": 1,
                "text": "Cho xe đi trên bất kỳ làn đường nào hoặc giữa 02 làn đường nếu không có xe phía trước; khi cần thiết phải chuyển làn đường, người lái xe phải quan sát xe phía trước để bảo đảm an toàn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép; khi chuyển làn phải có tín hiệu báo trước và phải bảo đảm an toàn.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Phải cho xe đi trong một làn đường, khi cần thiết phải chuyển làn đường, người lái xe phải quan sát xe phía trước để bảo đảm an toàn.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 47,
        "a2": 70,
        "a34": 86,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 87,
        "index": 87,
        "text": "Trên đường một chiều có vạch kẻ phân làn đường, xe thô sơ và xe cơ giới phải đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Xe thô sơ phải đi làn đường nên phải trong cùng.",
        "answers": [
            {
                "id": 1,
                "text": "Xe thô sơ phải đi trên làn đường bên trái ngoài cùng, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe thô sơ phải đi trên làn đường bên phải trong cùng; xe cơ giới, xe máy chuyên dùng đi trên làn đường bên trái.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe thô sơ đi trên làn đường phù hợp không gây cản trở giao thông, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 48,
        "a2": 71,
        "a34": 87,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 88,
        "index": 88,
        "text": "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
        "tip": "Chỉ sử dụng còi từ 5 giờ sáng đến 22 giờ tối. Nên phải sử dụng đèn để báo hiệu.",
        "answers": [
            {
                "id": 1,
                "text": "Phải báo hiệu bằng đèn hoặc còi.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chỉ được báo hiệu bằng còi.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phải báo hiệu bằng cả còi và đèn.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Chỉ được báo hiệu bằng đèn.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 49,
        "a2": 72,
        "a34": 88,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 89,
        "index": 89,
        "text": "Khi điều khiển xe chạy trên đường biết có xe sau xin vượt nếu đủ điều kiện an toàn người lái xe phải làm gì?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Tăng tốc độ và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe sau vượt.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Người điều khiển phương tiện phía trước phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại cho xe sau vượt.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cho xe tránh về bên trái mình và ra hiệu cho xe sau vượt; nếu có chướng ngại vật phía trước hoặc thiếu điều kiện an toàn chưa cho vượt được phải ra hiệu cho xe sau biết; cấm gây trở ngại cho xe xin vượt.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 50,
        "a2": 73,
        "a34": 89,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 90,
        "index": 90,
        "text": "Trong khu dân cư, ở nơi nào cho phép người lái xe, người điều khiển xe máy chuyên dùng được quay đầu xe?",
        "tip": "Quay đầu xe ở nơi giao nhau và có biển báo cho phép quay đầu xe.",
        "answers": [
            {
                "id": 1,
                "text": "Ở nơi đường giao nhau và nơi có biển báo cho phép quay đầu xe.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Ở nơi có đường rộng để cho các loại xe chạy một chiều.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Ở bất kỳ nơi nào.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 74,
        "a34": 90,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 91,
        "index": 91,
        "text": "Người lái xe phải làm gì khi quay đầu xe trên cầu, đường ngầm hay khu vực đường bộ giao nhau cùng mức với đường sắt?",
        "tip": "Không được quay xe trên cầu.",
        "answers": [
            {
                "id": 1,
                "text": "Không được quay đầu xe.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Lợi dụng chỗ rộng và phải có người làm tín hiệu sau xe để bảo đảm an toàn.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Lợi dụng chỗ rộng có thể quay đầu được để quay đầu xe cho an toàn.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 75,
        "a34": 91,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 92,
        "index": 92,
        "text": "Khi muốn chuyển hướng, người lái xe phải thực hiện như thế nào để đảm bảo an toàn giao thông?",
        "tip": "Chuyển hướng phải giảm tốc độ.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát gương, ra tín hiệu chuyển hướng, quan sát an toàn và chuyển hướng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Quan sát gương, giảm tốc độ, ra tín hiệu chuyển hướng, quan sát an toàn và chuyển hướng.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Quan sát gương, tăng tốc độ, ra tín hiệu và chuyển hướng.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 51,
        "a2": 76,
        "a34": 92,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 93,
        "index": 93,
        "text": "Khi lùi xe người lái xe phải làm gì để bảo đảm an toàn?",
        "tip": "Lùi xe phải quan sát phía sau.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát phía trước và cho lùi xe ở tốc độ chậm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Lợi dụng nơi đường giao nhau đủ chiều rộng để lùi.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phải quan sát phía sau, có tín hiệu cần thiết và chỉ nào thấy không nguy hiểm mới được lùi.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 77,
        "a34": 93,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 94,
        "index": 94,
        "text": "Khi bạn nhìn thấy đèn phía sau xe ô tô có màu sáng trắng, ô tô đó đang trong tình trạng như thế nào?",
        "tip": "Đèn sau màu sáng trắng là đang lùi xe.",
        "answers": [
            {
                "id": 1,
                "text": "Đang phanh.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đang bật đèn sương mù.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Đang chuẩn bị lùi hoặc đang lùi.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Đang bị hỏng động cơ.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 94,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 95,
        "index": 95,
        "text": "Khi tránh xe đi ngược chiều, các xe phải nhường đường như thế nào là đúng quy tắc giao thông?",
        "tip": "Tránh xe ngược chiều thì nhường đường qua đường hẹp và nhường xe lên dốc.",
        "answers": [
            {
                "id": 1,
                "text": "Nơi đường hẹp chỉ đủ cho một xe chạy và có chỗ tránh xe thì xe nào ở gần chỗ tránh hơn phải vào vị trí tránh, nhường đường cho xe kia đi.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe xuống dốc phải nhường đường cho xe đang lên dốc; xe nào có chướng ngại vật phía trước phải nhường đường cho xe không có chướng ngại vật đi trước.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe lên dốc phải nhường đường cho xe xuống dốc; xe nào không có chướng ngại vật phía trước phải nhường đường cho xe có chướng ngại vật đi trước",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 52,
        "a2": 78,
        "a34": 95,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 96,
        "index": 96,
        "text": "Bạn đang lái xe trên đường hẹp, xuống dốc và gặp một xe đang đi lên dốc, bạn cần làm gì?",
        "tip": "Nhường đường cho xe lên dốc.",
        "answers": [
            {
                "id": 1,
                "text": "Tiếp tục đi vì xe lên dốc phải nhường đường cho mình.",
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
        "required": 0,
        "a1": 53,
        "a2": 79,
        "a34": 96,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 97,
        "index": 97,
        "text": "Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên phải nhường đường như thế nào là đúng quy tắc giao thông?",
        "tip": "Đường không ưu tiên nhường đường cho xe trên đường ưu tiên.",
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
        "required": 0,
        "a1": 54,
        "a2": 80,
        "a34": 97,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 98,
        "index": 98,
        "text": "Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào là đúng quy tắc giao thông?",
        "tip": "Giao nhau không có vòng xuyến thì nhường xe đến từ bên phải.",
        "answers": [
            {
                "id": 1,
                "text": "Phải nhường đường cho xe đi đến từ bên phải.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe báo hiệu xin đường trước xe đó được đi trước.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phải nhường đường cho xe đi đến từ bên trái.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 55,
        "a2": 81,
        "a34": 98,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 99,
        "index": 99,
        "text": "Trên đoạn đường bộ giao nhau cùng mức với đường sắt, cầu đường bộ đi chung với đường sắt thì loại phương tiện nào được quyền ưu tiên đi trước?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Phương tiện nào bên phải không vướng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Phương tiện nào ra tín hiệu xin đường trước.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phương tiện giao thông đường sắt.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 82,
        "a34": 99,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 100,
        "index": 100,
        "text": "Tại nơi đường bộ giao nhau cùng mức với đường sắt chỉ có đèn tín hiệu hoặc chuông báo hiệu, khi đèn tín hiệu màu đỏ đã bật sáng hoặc có tiếng chuông báo hiệu, người tham gia giao thông phải dừng lại ngay và giữ khoảng cách tối thiểu bao nhiêu mét tính từ ray gần nhất?",
        "tip": "Đứng cách ray đường sắt 5m.",
        "answers": [
            {
                "id": 1,
                "text": "5 mét.",
                "correct": true
            },
            {
                "id": 2,
                "text": "3 mét.",
                "correct": false
            },
            {
                "id": 3,
                "text": "4 mét.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 56,
        "a2": 83,
        "a34": 100,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 101,
        "index": 101,
        "text": "Người lái xe phải làm gì khi điều khiển xe vào đường cao tốc?",
        "tip": "Vào cao tốc phải nhường đường cho xe đang chạy trên đường.",
        "answers": [
            {
                "id": 1,
                "text": "Phải có tín hiệu xin vào và phải nhường đường cho xe đang chạy trên đường; khi thấy an toàn mới cho xe nhập vào dòng xe ở làn đường sát mép ngoài; nếu có làn đường tăng tốc thì phải cho xe chạy trên làn đường đó trước khi vào làn đường của đường cao tốc.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Phải có tín hiệu xin vào và phải nhanh chóng vượt xe đang chạy trên đường để nhập vào dòng xe ở làn đường sát mép ngoài; nếu có làn đường tăng tốc thì phải cho xe chạy qua làn đường đó để vào làn đường của đường cao tốc.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 0,
        "a34": 101,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 102,
        "index": 102,
        "text": "Trên đường cao tốc, người lái xe phải dừng xe, đỗ xe như thế nào để đảm bảo an toàn giao thông?",
        "tip": "Trên cao tốc chỉ dừng đỗ ở nơi quy định.",
        "answers": [
            {
                "id": 1,
                "text": "Không được dừng xe, đỗ xe hoặc chỉ được dừng xe, đỗ xe ở nơi đường rộng, nếu dừng, đỗ xe ở nơi đường hẹp phải sử dụng còi báo hiệu để người lái xe khác biết.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chỉ được dừng xe, đỗ xe ở nơi quy định, trường hợp buộc phải dừng xe, đỗ xe không đúng nơi quy định thì người lái xe phải đưa xe ra khỏi phần đường xe chạy, nếu không thể được thì phải báo hiệu để người lái xe khác biết.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Chỉ được dừng xe, đỗ xe ở nơi đường rộng; trường hợp dừng xe, đỗ xe tại nơi đường hẹp phải đặt các chướng ngại vật trên đường để yêu cầu người lái xe khác giảm tốc độ để bảo đảm an toàn.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 102,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 103,
        "index": 103,
        "text": "Những trường hợp nào ghi ở dưới đây không được đi vào đường cao tốc trừ người, phương tiện, thiết bị phục vụ cho việc quản lý, bảo trì đường cao tốc?",
        "tip": "Xe thiết kế nhỏ hơn 70km/h không được vào cao tốc.",
        "answers": [
            {
                "id": 1,
                "text": "Người đi bộ, xe thô sơ, xe gắn máy, xe mô tô và máy kéo; xe máy chuyên dùng có tốc độ thiết kế nhỏ hơn 70km/h.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe mô tô và xe máy chuyên dùng có tốc độ thiết kế lớn hơn 70km/h.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Người đi bộ, xe thô sơ, xe gắn máy và xe ô tô.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 84,
        "a34": 103,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 104,
        "index": 104,
        "text": "Người điều khiển phương tiện tham gia giao thông trong hầm đường bộ ngoài việc phải tuân thủ các quy tắc giao thông còn phải thực hiện những quy định nào dưới đây?",
        "tip": "Trong hầm chỉ được dừng xe, đỗ xe ở nơi quy định.",
        "answers": [
            {
                "id": 1,
                "text": "Xe cơ giới, xe máy chuyên dùng phải bật đèn; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; chỉ được dừng xe, đỗ xe ở nơi quy định.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe cơ giới phải bật đèn ngay cả khi đường hầm sáng; phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe máy chuyên dùng phải bật đèn ngay cả khi đường hầm sáng; phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 57,
        "a2": 85,
        "a34": 104,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 105,
        "index": 105,
        "text": "Xe quá tải trọng, quá khổ giới hạn tham gia giao thông cần tuân thủ quy định nào ghi ở dưới đây?",
        "tip": "Xe quá tải trọng phải do cơ quan quản lý đường bộ cấp phép.",
        "answers": [
            {
                "id": 1,
                "text": "Phải được cơ quan quản lý đường bộ có thẩm quyền cấp phép và phải thực hiện các biện pháp bắt buộc để bảo vệ đường bộ, bảo đảm an toàn giao thông.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Chủ phương tiện và lái xe chỉ cần thực hiện biện pháp để hạn chế việc gây hư hại đường bộ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Được tham gia giao thông trên đường rộng.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Chỉ được tham gia giao thông vào ban đêm.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 86,
        "a34": 105,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 106,
        "index": 106,
        "text": "Việc nối giữa xe kéo với xe được kéo trong trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì phải dùng cách nào?",
        "tip": "Kéo xe không hệ thống hãm phải dùng thanh nối cứng.",
        "answers": [
            {
                "id": 1,
                "text": "Dùng dây cáp có độ dài 10 mét.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Dùng dây cáp có độ dài 5 mét.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dùng thanh nối cứng.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 87,
        "a34": 106,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 107,
        "index": 107,
        "text": "Xe kéo rơ moóc khi tham gia giao thông phải tuân thủ điều kiện nào ghi ở dưới đây?",
        "tip": "Trọng lượng xe kéo rơ moóc phải lớn hơn rơ moóc.",
        "answers": [
            {
                "id": 1,
                "text": "Phải có tổng trọng lượng lớn hơn tổng trọng lượng của rơ moóc hoặc phải có hệ thống hãm có hiệu lực cho rơ moóc.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Phải có tổng trọng lượng tương đương tổng trọng lượng của rơ moóc hoặc phải có hệ thống hãm có hiệu lực cho xe kéo rơ moóc.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phải được lắp phanh phụ theo quy định để đảm bảo an toàn.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 107,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 108,
        "index": 108,
        "text": "Xe ô tô kéo xe khác thế nào là đúng quy tắc giao thông?",
        "tip": "Kéo xe không hệ thống hãm phải dùng thanh nối cứng.",
        "answers": [
            {
                "id": 1,
                "text": "Được kéo theo một xe ô tô hoặc xe máy chuyên dùng khác khi xe này không tự chạy được và phải đảm bảo an toàn; xe được kéo phải có người điều khiển và hệ thống lái của xe đó phải còn hiệu lực; trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì xe kéo nhau phải nối bằng thanh nối cứng.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Được kéo theo một xe ô tô và xe máy chuyên dùng khác khi xe này không tự chạy được và phải đảm bảo an toàn; xe được kéo phải có người ngồi trên xe để kịp thời phát hiện các trường hợp mất an toàn.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Được kéo theo một xe ô tô và xe máy chuyên dùng khác khi xe này không tự chạy được và hệ thống phanh bị hỏng, xe kéo nhau phải nối bằng dây cáp có độ dài phù hợp.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 108,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 109,
        "index": 109,
        "text": "Người ngồi trên xe mô tô 2 bánh, xe gắn máy phải đội mũ bảo hiểm có cài quai đúng quy cách khi nào?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Khi tham gia giao thông đường bộ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Chỉ khi đi trên đường chuyên dùng; đường cao tốc.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Khi tham gia giao thông trên đường tỉnh lộ hoặc quốc lộ.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 58,
        "a2": 88,
        "a34": 109,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 110,
        "index": 110,
        "text": "Người điều khiển xe mô tô hai bánh, xe gắn máy được phép chở tối đa 2 người trong những trường hợp nào?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Chở người bệnh đi cấp cứu; trẻ em dưới 14 tuổi.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Áp giải người có hành vi vi phạm pháp luật.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 59,
        "a2": 89,
        "a34": 110,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 111,
        "index": 111,
        "text": "Người điều khiển xe mô tô hai bánh, xe gắn máy không được thực hiện những hành vi nào dưới đây?",
        "tip": "Xe mô tô hai bánh không được đi vào phần đường dành cho người đi bộ.",
        "answers": [
            {
                "id": 1,
                "text": "Đi vào phần đường dành cho người đi bộ và phương tiện khác; sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính), đi xe dàn hàng ngang.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Chở 02 người; trong đó, có người bệnh đi cấp cứu hoặc trẻ em dưới 14 tuổi hoặc áp giải người có hành vi vi phạm pháp luật.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Điều khiển phương tiện tham gia giao thông trên đường tỉnh lộ hoặc quốc lộ.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 60,
        "a2": 90,
        "a34": 111,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 112,
        "index": 112,
        "text": "Người điều khiển xe mô tô hai bánh, xe gắn máy có được đi xe dàn hàng ngang; đi xe vào phần đường dành cho người đi bộ và phương tiện khác; sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính) hay không?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Được phép nhưng phải đảm bảo an toàn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không được phép.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Được phép tùy từng hoàn cảnh, điều kiện cụ thể.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 61,
        "a2": 91,
        "a34": 112,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 113,
        "index": 113,
        "text": "Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép (có thể dừng lại một cách an toàn) trong trường hợp nào dưới đây?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Khi có báo hiệu cảnh báo nguy hiểm hoặc có chướng ngại vật trên đường; khi chuyển hướng xe chạy hoặc tầm nhìn bị hạn chế; khi qua nơi đường giao nhau, nơi đường bộ giao nhau với đường sắt; đường vòng; đường có địa hình quanh co, đèo dốc.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Khi qua cầu, cống hẹp; khi lên gần đỉnh dốc, khi xuống dốc, khi qua trường học, khu đông dân cư, khu vực đang thi công trên đường bộ; hiện trường xảy ra tai nạn giao thông.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Khi điều khiển xe vượt xe khác trên đường quốc lộ, đường cao tốc.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 62,
        "a2": 92,
        "a34": 113,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 114,
        "index": 114,
        "text": "Khi gặp một đoàn xe, một đoàn xe tang hay gặp một đoàn người có tổ chức theo đội ngũ, người lái xe phải xử lý như thế nào?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Từ từ đi cắt qua đoàn người, đoàn xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không được cắt ngang qua đoàn người, đoàn xe.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Báo hiệu từ từ cho xe đi cắt qua để bảo đảm an toàn.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 93,
        "a34": 114,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 115,
        "index": 115,
        "text": "Tại ngã ba hoặc ngã tư không có đảo an toàn, người lái xe phải nhường đường như thế nào là đúng trong các trường hợp dưới đây?",
        "tip": "Người lái xe phải nhường đường cho xe ưu tiên.",
        "answers": [
            {
                "id": 1,
                "text": "Nhường đường cho người đi bộ đang đi trên phần đường dành cho người đi bộ sang đường; nhường đường cho xe đi trên đường ưu tiên, đường chính từ bất kỳ hướng nào tới; nhường đường cho xe ưu tiên, xe đi từ bên phải đến.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Nhường đường cho người đi bộ đang đứng chờ đi qua phần đường dành cho người đi bộ sang đường; nhường đường cho xe đi trên đường ngược chiều, đường nhánh từ bất kỳ hướng nào tới; nhường đường cho xe đi từ bên trái đến.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không phải nhường đường.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 63,
        "a2": 94,
        "a34": 115,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 116,
        "index": 116,
        "text": "Khi điều khiển xe cơ giới người lái xe phải bật đèn tín hiệu rẽ nào trong các trường hợp nào sau đây?",
        "tip": "Phải bật đèn tín hiệu rẽ trước khi thay đổi làn đường.",
        "answers": [
            {
                "id": 1,
                "text": "Khi cho xe chạy thẳng.",
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
        "required": 0,
        "a1": 64,
        "a2": 95,
        "a34": 116,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 117,
        "index": 117,
        "text": "Trên đoạn đường hai chiều không có giải phân cách giữa, người lái xe không được vượt xe khác trong các trường hợp nào dưới đây?",
        "tip": "Không được vượt khi xe bị vượt bất ngờ tăng tốc hoặc phát hiện có xe đi ngược chiều.",
        "answers": [
            {
                "id": 1,
                "text": "Xe bị vượt bất ngờ tăng tốc độ và cố tình không nhường đường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe bị vượt giảm tốc độ và nhường đường.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phát hiện có xe đi ngược chiều.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ý 1 và ý 3.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 65,
        "a2": 96,
        "a34": 117,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 118,
        "index": 118,
        "text": "Khi lái xe trên đường vắng mà cảm thấy buồn ngủ, người lái xe nên chọn cách xử lý như thế nào cho phù hợp?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Tăng tốc độ kết hợp với nghe nhạc và đi tiếp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Quan sát và dừng xe tại nơi quy định; nghỉ cho đến khi hết buồn ngủ và đi tiếp.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Sử dụng một ít rượu hoặc bia để hết buồn ngủ và đi tiếp.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 97,
        "a34": 118,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 119,
        "index": 119,
        "text": "Trên đường cao tốc, người lái xe xử lý như thế nào khi đã vượt quá lối ra của đường định rẽ?",
        "tip": "Trên cao tốc vượt quá lối rẽ thì chạy đến lối ra tiếp theo.",
        "answers": [
            {
                "id": 1,
                "text": "Quay xe, chạy trên lề đường bên phải và rẽ khỏi đường cao tốc.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Lùi xe sát lề đường bên phải và rẽ khỏi đường cao tốc.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tiếp tục chạy đến lối ra tiếp theo.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 0,
        "a34": 119,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 120,
        "index": 120,
        "text": "Người lái xe mô tô xử lý như thế nào khi cho xe mô tô phía sau vượt?",
        "tip": "Xử lý cho xe sau vượt thì giảm tốc độ và đi về bên phải.",
        "answers": [
            {
                "id": 1,
                "text": "Nếu đủ điều kiện an toàn, người lái xe phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại đối với xe xin vượt.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Lái xe vào lề đường bên trái và giảm tốc độ để xe phía sau vượt qua, không được gây trở ngại đối với xe xin vượt.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Nếu đủ điều kiện an toàn, người lái xe phải tăng tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 66,
        "a2": 98,
        "a34": 120,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 121,
        "index": 121,
        "text": "Khi xe ô tô bị hỏng tại vị trí giao nhau giữa đường bộ và đường sắt, người lái xe xử lý như thế nào?",
        "tip": "Xe hỏng tại vị trí giao nhau đường sắt thì đặt báo hiệu trên đường sắt tối thiểu 500m về hai phía.",
        "answers": [
            {
                "id": 1,
                "text": "Nhanh chóng đặt báo hiệu trên đường sắt cách tối thiểu 500 mét về hai phía để báo cho người điều khiển phương tiện đường sắt và tìm cách báo cho người quản lý đường sắt, nhà ga nơi gần nhất, đồng thời phải bằng mọi biện pháp nhanh chóng đưa ô tô hỏng ra khỏi phạm vi an toàn đường sắt.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Nhanh chóng đặt biển cảnh báo nguy hiểm tại vị trí xe ô tô bị hỏng để đoàn tàu dừng lại.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Liên hệ ngay với đơn vị cứu hộ để đưa ô tô hỏng ra khỏi phạm vi an toàn đường sắt.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 121,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 122,
        "index": 122,
        "text": "Trong các trường hợp dưới đây, để đảm bảo an toàn khi tham gia giao thông, người lái xe mô tô cần thực hiện như thế nào?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Phải đội mũ bảo hiểm đạt chuẩn, có cài quai đúng quy cách, mặc quần áo gọn gàng; không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).",
                "correct": true
            },
            {
                "id": 2,
                "text": "Phải đội mũ bảo hiểm khi trời mưa gió hoặc trời quá nắng; có thể sử dụng ô, điện thoại di động, thiết bị âm thanh nhưng phải đảm bảo an toàn.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phải đội mũ bảo hiểm khi cảm thấy mất an toàn giao thông hoặc khi chuẩn bị di chuyển quãng đường xa.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 67,
        "a2": 99,
        "a34": 122,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 123,
        "index": 123,
        "text": "Đường bộ trong khu vực đông dân cư gồm những đoạn đường nào dưới đây?",
        "tip": "Đường bộ trong khu vực đông dân cư được xác định bằng biển báo.",
        "answers": [
            {
                "id": 1,
                "text": "Là đoạn đường nằm trong khu công nghiệp có đông người và phương tiện tham gia giao thông và được xác định cụ thể bằng biển chỉ dẫn địa giới.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Là đoạn đường bộ nằm trong khu vực nội thành phố, nội thị xã, nội thị trấn và những đoạn đường có dân cư sinh sống sát dọc theo đường, có các hoạt động có thể ảnh hưởng đến giao thông đường bộ và được xác định bằng biển báo là đường qua khu đông dân cư.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Là đoạn đường nằm ngoài khu vực nội thành phố, nội thị xã có đông người và phương tiện tham gia giao thông và được xác định cụ thể bằng biển chỉ dẫn địa giới.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 68,
        "a2": 100,
        "a34": 123,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 124,
        "index": 124,
        "text": "Tốc độ tối đa cho phép đối với xe máy chuyên dùng, xe gắn máy (kể cả xe máy điện) và các loại xe tương tự trên đường bộ (trừ đường cao tốc) không được vượt quá bao nhiêu km/h?",
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
        "required": 0,
        "a1": 69,
        "a2": 101,
        "a34": 124,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 125,
        "index": 125,
        "text": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường đôi có dải phân cách giữa, xe mô tô hai bánh, ô tô chở người đến 30 chỗ tham gia giao thông với tốc độ tối đa cho phép là bao nhiêu?",
        "tip": "Có giải phân cách giữa thì được xem là đường đôi.\nTrong khu vực đông dân cư, đường đôi; đường một chiều có từ hai làn xe cơ giới trở lên: 60km/h.",
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
        "required": 0,
        "a1": 70,
        "a2": 102,
        "a34": 125,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 126,
        "index": 126,
        "text": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều không có dải phân cách giữa, xe mô tô hai bánh, ô tô chở người đến 30 chỗ tham gia giao thông với tốc độ tối đa cho phép là bao nhiêu?",
        "tip": "Trong khu vực đông dân cư, đường hai chiều; đường một chiều có một làn xe cơ giới: 50km/h.",
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
        "required": 0,
        "a1": 71,
        "a2": 103,
        "a34": 126,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 127,
        "index": 127,
        "text": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới, loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 50 km/h?",
        "tip": "Xe cơ giới không bao gồm xe gắn máy.\nTrong khu vực đông dân cư, đường hai chiều; đường một chiều có một làn xe cơ giới: 50km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Ô tô con, ô tô tải, ô tô chở người trên 30 chỗ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe gắn máy, xe máy chuyên dùng.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 72,
        "a2": 104,
        "a34": 127,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 128,
        "index": 128,
        "text": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên, loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 60 km/h?",
        "tip": "Xe cơ giới không bao gồm xe gắn máy.\nTrong khu vực đông dân cư, đường đôi; đường một chiều có từ hai làn xe cơ giới trở lên: 60km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Ô tô con, ô tô tải, ô tô chở người trên 30 chỗ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe gắn máy, xe máy chuyên dùng.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 105,
        "a34": 128,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 129,
        "index": 129,
        "text": "Trên đường bộ (trừ đường cao tốc) ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa, loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 90 km/h?",
        "tip": "Đường có giải phân cách được xem là đường đôi.\nNgoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 90km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3.500 kg.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải đến 3.500 kg",
                "correct": true
            },
            {
                "id": 3,
                "text": "Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ moóc, ô tô chuyên dùng, xe mô tô.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 106,
        "a34": 129,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 130,
        "index": 130,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa (trừ đường cao tốc), loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 80 km/h?",
        "tip": "Đường có giải phân cách được xem là đường đôi.\nNgoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 90km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Ô tô buýt; ô tô đầu kéo kéo sơ mi rơ moóc; ô tô chuyên dùng; xe mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3.500 kg (trừ ô tô xi téc).",
                "correct": true
            },
            {
                "id": 3,
                "text": "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải đến 3.500 kg.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 107,
        "a34": 130,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 131,
        "index": 131,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa (trừ đường cao tốc), loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 70 km/h?",
        "tip": "Đường có giải phân cách được xem là đường đôi.\nNgoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 90km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Ô tô buýt; ô tô đầu kéo kéo sơ mi rơ moóc; xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông);",
                "correct": true
            },
            {
                "id": 2,
                "text": "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3.500 kg",
                "correct": false
            },
            {
                "id": 4,
                "text": "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải đến 3.500 kg.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 108,
        "a34": 131,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 132,
        "index": 132,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa (trừ đường cao tốc), loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 60 km/h?",
        "tip": "Đường có giải phân cách được xem là đường đôi.\nNgoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 90km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Ô tô kéo rơ moóc, ô tô kéo xe khác, ô tô trộn vữa, ô tô trộn bê tông, ô tô xi téc.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3.500 kg.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ xe buýt), ô tô tải có trọng tải nhỏ hơn hoặc bằng 3.500 kg.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 109,
        "a34": 132,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 133,
        "index": 133,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 80 km/h?",
        "tip": "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 80km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3.500 kg.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ xe buýt), ô tô tải có trọng tải nhỏ hơn hoặc bằng 3.500 kg.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 110,
        "a34": 133,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 134,
        "index": 134,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 70 km/h?",
        "tip": "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 80km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3.500 kg (trừ ô tô xi téc).",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ xe buýt), ô tô tải có trọng tải nhỏ hơn hoặc bằng 3.500 kg.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 111,
        "a34": 134,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 135,
        "index": 135,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 60 km/h?",
        "tip": "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 80km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3.500 kg.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ moóc, xe mô tô, ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông).",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 112,
        "a34": 135,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 136,
        "index": 136,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 50 km/h?",
        "tip": "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 80km/h.",
        "answers": [
            {
                "id": 1,
                "text": "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3.500 kg.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Ô tô kéo rơ moóc, ô tô kéo xe khác, ô tô trộn vữa, ô tô trộn bê tông, ô tô xi téc.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 113,
        "a34": 136,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 137,
        "index": 137,
        "text": "Khi tham gia giao thông trên đoạn đường không có biển báo \"Cự ly tối thiểu giữa hai xe\", với điều kiện mặt đường khô ráo, xe cơ giới đang chạy với tốc độ từ trên 60 km/h đến 80 km/h, người lái xe phải duy trì khoảng cách an toàn với xe đang chạy phía trước tối thiểu là bao nhiêu?",
        "tip": "Khoảng cách an toàn: 60km/h: 35m; 60 đến 80km/h: 55m; 80 đến 100km/h: 70m; 100 đến 120km/h: 100m.",
        "answers": [
            {
                "id": 1,
                "text": "35 m.",
                "correct": false
            },
            {
                "id": 2,
                "text": "55 m.",
                "correct": true
            },
            {
                "id": 3,
                "text": "70 m.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 114,
        "a34": 137,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 138,
        "index": 138,
        "text": "Khi tham gia giao thông trên đoạn đường không có biển báo \"Cự ly tối thiểu giữa hai xe\", với điều kiện mặt đường khô ráo, xe cơ giới đang chạy với tốc độ từ trên 80 km/h đến 100 km/h, người lái xe phải duy trì khoảng cách an toàn với xe đang chạy phía trước tối thiểu là bao nhiêu?",
        "tip": "Khoảng cách an toàn: 60km/h: 35m; 60 đến 80km/h: 55m; 80 đến 100km/h: 70m; 100 đến 120km/h: 100m.",
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
        "required": 0,
        "a1": 0,
        "a2": 115,
        "a34": 138,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 139,
        "index": 139,
        "text": "Khi tham gia giao thông trên đoạn đường không có biển báo \"Cự ly tối thiểu giữa hai xe\", với điều kiện mặt đường khô ráo, xe cơ giới đang chạy với tốc độ từ trên 100 km/h đến dưới 120 km/h, người lái xe phải duy trì khoảng cách an toàn với xe đang chạy phía trước tối thiểu là bao nhiêu?",
        "tip": "Khoảng cách an toàn: 60km/h: 35m; 60 đến 80km/h: 55m; 80 đến 100km/h: 70m; 100 đến 120km/h: 100m.",
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
        "required": 0,
        "a1": 0,
        "a2": 116,
        "a34": 139,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 140,
        "index": 140,
        "text": "Khi điều khiển xe chạy với tốc độ dưới 60 km/h, người lái xe phải chủ động điều khiển xe như thế nào để đảm bảo an toàn giao thông?",
        "tip": "Khoảng cách an toàn dưới 60km/h: Chủ động và đảm bảo khoảng cách.",
        "answers": [
            {
                "id": 1,
                "text": "Chủ động giữ khoảng cách an toàn phù hợp với xe chạy liền trước xe của mình.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đảm bảo khoảng cách an toàn theo mật độ phương tiện, tình hình giao thông thực tế.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 73,
        "a2": 117,
        "a34": 140,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 141,
        "index": 141,
        "text": "Người lái xe phải giảm tốc độ thấp hơn tốc độ đến mức cần thiết, chú ý quan sát và chuẩn bị sẵn sàng những tình huống có thế xảy ra để phòng ngừa tai nạn trong các trường hợp nào dưới đây?",
        "tip": "Giảm tốc độ, chú ý quan sát khi gặp biển báo nguy hiểm.",
        "answers": [
            {
                "id": 1,
                "text": "Gặp biển báo nguy hiểm trên đường.",
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
        "required": 0,
        "a1": 74,
        "a2": 118,
        "a34": 141,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 142,
        "index": 142,
        "text": "Người lái xe phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy trong các trường hợp nào dưới đây?",
        "tip": "Giảm tốc độ, đi sát về bên phải khi xe sau xin vượt.",
        "answers": [
            {
                "id": 1,
                "text": "Khi vượt xe khác.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Khi vượt xe khác tại đoạn đường được phép vượt.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Khi xe sau xin vượt và đảm bảo an toàn.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Khi xe sau có tín hiệu vượt bên phải.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 119,
        "a34": 142,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 143,
        "index": 143,
        "text": "Tại các điểm giao cắt giữa đường bộ và đường sắt, quyền ưu tiên thuộc về loại phương tiện nào dưới đây?",
        "tip": "Điểm giao cắt đường sắt thì ưu tiên đường sắt.",
        "answers": [
            {
                "id": 1,
                "text": "Xe cứu hỏa.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe cứu thương.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phương tiện giao thông đường sắt.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Ô tô, mô tô và xe máy chuyên dùng.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 120,
        "a34": 143,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 144,
        "index": 144,
        "text": "Các phương tiện tham gia giao thông đường bộ (kể cả những xe có quyền ưu tiên) đều phải dừng lại bên phải đường của mình và trước vạch \"dừng xe\" tại các điểm giao cắt giữa đường bộ và đường sắt khi có báo hiệu dừng nào dưới đây?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Hiệu lệnh của nhân viên gác chắn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đèn đỏ sáng nháy, cờ đỏ, biển đỏ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Còi, chuông kêu, chắn đã đóng.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Tất cả các ý trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 75,
        "a2": 121,
        "a34": 144,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 145,
        "index": 145,
        "text": "Trên đoạn đường bộ giao nhau đồng mức với đường sắt, người không có nhiệm vụ có được tự ý mở chắn đường ngang khi chắn đã đóng hay không?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Không được phép.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Được phép nhưng phải đảm bảo an toàn.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Được phép tùy từng hoàn cảnh và điều kiện cụ thể.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 122,
        "a34": 145,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 146,
        "index": 146,
        "text": "Tác dụng của mũ bảo hiểm đối với người ngồi trên xe mô tô hai bánh trong trường hợp xảy ra tai nạn giao thông là gì?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Để làm đẹp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Để tránh mưa nắng",
                "correct": false
            },
            {
                "id": 3,
                "text": "Để giảm thiểu chấn thương vùng đầu.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Để các loại phương tiện khác dễ quan sát.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 76,
        "a2": 123,
        "a34": 146,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 147,
        "index": 147,
        "text": "Khi điều khiển phương tiện tham gia giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Thay đổi tốc độ của xe trên đường bộ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Thay đổi tay số của xe trên đường bộ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Lạng lách, đánh võng trên đường bộ.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 124,
        "a34": 147,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 148,
        "index": 148,
        "text": "Người lái xe phải nhanh chóng giảm tốc độ, tránh hoặc dừng lại sát lề đường bên phải để nhường đường cho các xe nào nêu dưới đây?",
        "tip": "Nhường đường cho xe ưu tiên có tín hiệu còi, cờ, đèn.",
        "answers": [
            {
                "id": 1,
                "text": "Xe chữa cháy, xe quân sự, xe công an, xe cứu thương, xe hộ đê sau khi thực hiện nhiệm vụ khẩn cấp, không có tín hiệu còi, cờ, đèn theo quy định của pháp luật.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe chữa cháy, xe quân sự, xe công an, xe cứu thương, xe hộ đê đi làm nhiệm vụ khẩn cấp có tín hiệu còi, cờ, đèn theo quy định của pháp luật.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe ô tô, xe máy, đoàn xe đang diễu hành có tổ chức có báo tín hiệu xin vượt bằng còi và đèn.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 125,
        "a34": 148,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 149,
        "index": 149,
        "text": "Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên phải xử lý như thế nào là đúng quy tắc giao thông?",
        "tip": "Xe trên đường không ưu tiên nhường đường cho xe trên đường ưu tiên.",
        "answers": [
            {
                "id": 1,
                "text": "Tăng tốc độ qua đường giao nhau để đi trước xe đi trên đường ưu tiên.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giảm tốc độ qua đường giao nhau để đi trước xe đi trên đường ưu tiên.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Nhường đường cho xe đi trên đường ưu tiên từ bất kỳ hướng nào tới.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 126,
        "a34": 149,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 150,
        "index": 150,
        "text": "Khi xe ô tô, mô tô đến gần vị trí giao nhau giữa đường bộ và đường sắt không có rào chắn, khi đèn tín hiệu màu đỏ đã bật sáng hoặc khi có tiếng chuông báo hiệu, người lái xe xử lý như thế nào?",
        "tip": "Đứng cách ray đường sắt 5m.",
        "answers": [
            {
                "id": 1,
                "text": "Giảm tốc độ cho xe vượt qua đường sắt.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nhanh chóng cho xe vượt qua đường sắt trước khi tàu hỏa tới.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Giảm tốc độ cho xe vượt qua đường sắt trước khi tàu hỏa tới.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cho xe dừng ngay lại và giữ khoảng cách tối thiểu 5 mét tính từ ray gần nhất.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 77,
        "a2": 127,
        "a34": 150,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 151,
        "index": 151,
        "text": "Khi điều khiển xe trên đường vòng, khuất tầm nhìn người lái xe cần phải làm gì để đảm bảo an toàn?",
        "tip": "Không vượt xe khác trên đường vòng, khuất tầm nhìn.",
        "answers": [
            {
                "id": 1,
                "text": "Đi đúng làn đường, đúng tốc độ quy định, không được vượt xe khác.",
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
        "required": 0,
        "a1": 0,
        "a2": 128,
        "a34": 151,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 152,
        "index": 152,
        "text": "Người lái xe phải xử lý như thế nào khi quan sát phía trước thấy người đi bộ đang sang đường tại nơi có vạch đường dành cho người đi bộ để đảm bảo an toàn?",
        "tip": "Nơi có vạch kẻ đường dành cho người đi bộ thì nhường đường.",
        "answers": [
            {
                "id": 1,
                "text": "Giảm tốc độ, đi từ từ để vượt qua trước người đi bộ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giảm tốc độ, có thể dừng lại nếu cần thiết trước vạch dừng xe để nhường đường cho người đi bộ qua đường.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Tăng tốc độ để vượt qua trước người đi bộ.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 78,
        "a2": 129,
        "a34": 152,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 153,
        "index": 153,
        "text": "Khi muốn lùi xe nhưng không quan sát được phía sau, cần phải làm gì để đảm bảo an toàn?",
        "tip": "Không quan sát được phía sau thì không lùi xe.",
        "answers": [
            {
                "id": 1,
                "text": "Phải lùi thật chậm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Có thể được lùi xe nhưng phải mở cửa xe.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không được lùi xe.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Bấm còi 3 lần liên tiếp trước khi lùi.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 0,
        "a34": 153,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 154,
        "index": 154,
        "text": "Người điều khiển phương tiện tham gia giao thông đường bộ phải giảm tốc độ để có thể dừng lại một cách an toàn trong các trường hợp nào dưới đây?",
        "tip": "Giảm tốc độ khi có người đi bộ qua đường và qua trạm cảnh sát giao thông.",
        "answers": [
            {
                "id": 1,
                "text": "Khi có người đi bộ, xe lăn của người khuyết tật qua đường; đến gần bến xe buýt, điểm dừng đỗ xe có khách đang lên, xuống xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Khi điều khiển phương tiện đi qua khu vực trạm kiểm soát tải trọng xe, trạm cảnh sát giao thông, trạm giao dịch thanh toán đối với các phương tiện sử dụng đường bộ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 130,
        "a34": 154,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 155,
        "index": 155,
        "text": "Tại những đoạn đường không bố trí biển báo hạn chế tốc độ, không bố trí biển báo khoảng cách an toàn tối thiểu giữa hai xe, người điều khiển phương tiện tham gia giao thông phải thực hiện quy định nào dưới đây để đảm bảo an toàn giao thông?",
        "tip": "Nghiêm chỉnh chấp hành quy định về tốc độ và khoảng cách an toàn.",
        "answers": [
            {
                "id": 1,
                "text": "Người điều khiển phương tiện tham gia giao thông không hạn chế tốc độ và khoảng cách an toàn tối thiểu giữa hai xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Người điều khiển phương tiện tham gia giao thông không hạn chế tốc độ và khoảng cách an toàn tối thiểu giữa hai xe vào ban đêm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Người điều khiển phương tiện tham gia giao thông phải nghiêm chỉnh chấp hành quy định về tốc độ, khoảng cách an toàn tối thiểu giữa hai xe.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 131,
        "a34": 155,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 156,
        "index": 156,
        "text": "Khi tham gia giao thông trên đường cao tốc, người lái xe, người điều khiển xe máy chuyên dùng phải thực hiện các quy định như thế nào là đúng quy tắc giao thông?",
        "tip": "Trên cao tốc tuân thủ tốc độ tối thiểu, tối đa và sơn kẻ mặt đường.",
        "answers": [
            {
                "id": 1,
                "text": "Tuân thủ tốc độ tối đa, tốc độ tối thiểu ghi trên biển báo hiệu đường bộ, sơn kẻ mặt đường trên các làn xe.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Tuân thủ tốc độ tối đa, tốc độ tối thiểu ghi trên biển báo hiệu đường bộ, sơn kẻ mặt đường trên các làn xe chỉ vào ban ngày.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tuân thủ tốc độ tối đa, tốc độ tối thiểu ghi trên biển báo hiệu đường bộ, sơn kẻ mặt đường trên các làn xe chỉ vào ban đêm.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 156,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 157,
        "index": 157,
        "text": "Theo Luật Giao thông đường bộ, tín hiệu đèn giao thông gồm 3 màu nào dưới đây?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Đỏ - Vàng - Xanh",
                "correct": true
            },
            {
                "id": 2,
                "text": "Cam - Vàng - Xanh.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Vàng - Xanh dương - Xanh lá.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Đỏ - Cam - Xanh.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 79,
        "a2": 132,
        "a34": 157,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 158,
        "index": 158,
        "text": "Tại nơi đường giao nhau, khi đèn điều khiển giao thông có tín hiệu màu vàng, người điều khiển phương tiện giao thông phải chấp hành như thế nào là đúng quy tắc giao thông?",
        "tip": "Đèn vàng dừng lại trước vạch dừng hoặc nhấp nháy thì đi chậm.",
        "answers": [
            {
                "id": 1,
                "text": "Phải cho xe dừng lại trước vạch dừng, trường hợp đã đi quá vạch dừng hoặc đã quá gần vạch dừng nếu dừng lại thấy nguy hiểm thì được đi tiếp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Trong trường hợp tín hiệu vàng nhấp nháy là được đi nhưng phải giảm tốc độ, chú ý quan sát nhường đường cho người đi bộ qua đường.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Nhanh chóng tăng tốc độ, vượt qua nút giao và chú ý đảm bảo an toàn.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 80,
        "a2": 133,
        "a34": 158,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 159,
        "index": 159,
        "text": "Để báo hiệu cho xe phía trước biết xe mô tô của bạn muốn vượt, bạn phải có tín hiệu như thế nào dưới đây?",
        "tip": "Muốn vượt xe thì phải báo hiệu bằng đèn hoặc còi.",
        "answers": [
            {
                "id": 1,
                "text": "Ra hiệu bằng tay rồi cho xe vượt qua.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Tăng ga mạnh để gây sự chú ý rồi cho xe vượt qua.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Bạn phải có báo hiệu bằng đèn hoặc còi.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 81,
        "a2": 134,
        "a34": 159,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 160,
        "index": 160,
        "text": "Khi tham gia giao thông trên đường cao tốc, người điều khiển phương tiện cơ giới có được dừng, đỗ xe trên phần đường xe chạy hay không?",
        "tip": "Không được dừng, đỗ trên làn xe chạy đường cao tốc.",
        "answers": [
            {
                "id": 1,
                "text": "Được dừng, đỗ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không được dừng, đỗ.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Được dừng, đỗ nhưng phải đảm bảo an toàn",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 160,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 161,
        "index": 161,
        "text": "Khi xe gặp sự cố kỹ thuật trên đường cao tốc, bạn phải xử lý theo thứ tự như thế nào dưới đây để đảm bảo an toàn giao thông?",
        "tip": "Khi gặp sự cố khi đủ điều kiện an toàn đưa xe vào làn dừng đỗ khẩn cấp.",
        "answers": [
            {
                "id": 1,
                "text": "Bật đèn tín hiệu khẩn cấp, dừng xe ngay lập tức và đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Bật đèn tín hiệu khẩn cấp, lập tức đưa xe vào làn đường xe chạy bên phải trong cùng,  đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Bật đèn tín hiệu khẩn cấp, khi đủ điều kiện an toàn nhanh chóng đưa xe vào làn dừng đỗ khẩn cấp, đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 1,
        "a1": 0,
        "a2": 0,
        "a34": 161,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 162,
        "index": 162,
        "text": "Khi người lái xe ô tô dừng, đỗ sát theo lề đường, hè phố phía bên phải theo chiều đi của mình, bánh xe gần nhất không được cách xa lề đường, hè phố quá bao nhiêu mét trong các trường hợp dưới đây để không gây cản trở, nguy hiểm cho giao thông?",
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
        "required": 0,
        "a1": 0,
        "a2": 135,
        "a34": 162,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 163,
        "index": 163,
        "text": "Khi dừng, đỗ xe trên đường phố hẹp, người lái xe ô tô phải dừng, đỗ xe ở vị trí cách xe ô tô đang đỗ bên kia đường khoảng cách tối thiểu là bao nhiêu mét trong các trường hợp dưới đây để đảm bảo an toàn giao thông?",
        "tip": "Dừng xe, đỗ xe trên đường hẹp cách xe khác 20 mét.",
        "answers": [
            {
                "id": 1,
                "text": "5 mét.",
                "correct": false
            },
            {
                "id": 2,
                "text": "10 mét.",
                "correct": false
            },
            {
                "id": 3,
                "text": "15 mét.",
                "correct": false
            },
            {
                "id": 4,
                "text": "20 mét.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 136,
        "a34": 163,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 164,
        "index": 164,
        "text": "Trên đường bộ, người lái xe ô tô có được phép dừng xe, đỗ xe song song với một xe khác đang dừng, đỗ hay không?",
        "tip": "Không được dừng, đỗ xe song song với xe khác trên đường.",
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
            },
            {
                "id": 3,
                "text": "Chỉ được phép dừng, đỗ khi đường vắng.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 0,
        "a2": 137,
        "a34": 164,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 165,
        "index": 165,
        "text": "Người điều khiển xe mô tô phải giảm tốc độ và hết sức thận trọng khi qua những đoạn đường nào dưới đây?",
        "tip": "Giảm tốc độ trên đường ướt, đường hẹp và đèo dốc.",
        "answers": [
            {
                "id": 1,
                "text": "Đường ướt, đường có sỏi cát trên nền đường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đường hẹp có nhiều điểm giao cắt từ hai phía.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Đường đèo dốc, vòng liên tục",
                "correct": false
            },
            {
                "id": 4,
                "text": "Tất cả các ý nêu trên.",
                "correct": true
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 82,
        "a2": 138,
        "a34": 165,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 166,
        "index": 166,
        "text": "Khi gặp xe buýt đang dừng đón, trả khách, người điều khiển xe mô tô phải xử lý như thế nào dưới đây để đảm bảo an toàn giao thông?",
        "tip": "Xe buýt đang dừng đón trả khách thì giảm tốc độ và từ từ vượt qua xe buýt.",
        "answers": [
            {
                "id": 1,
                "text": "Tăng tốc độ để nhanh chóng vượt qua bến đỗ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giảm tốc độ đến mức an toàn có thể và quan sát người qua đường và từ từ vượt qua xe buýt.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Yêu cầu phải dừng lại phía sau xe buýt chờ xe rời bến mới đi tiếp.",
                "correct": false
            }
        ],
        "topic": 1,
        "required": 0,
        "a1": 83,
        "a2": 139,
        "a34": 166,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 167,
        "index": 167,
        "text": "Người lái xe khách, xe buýt cần thực hiện những nhiệm vụ gì dưới đây?",
        "tip": "Lái xe khách, xe buýt thực hiện nghiêm biểu đồ chạy xe được phân công.",
        "answers": [
            {
                "id": 1,
                "text": "Luôn có ý thức về tính tổ chức, kỷ luật, thực hiện nghiêm biểu đồ xe chạy được phân công; thực hiện đúng hành trình, lịch trình, đón trả khách đúng nơi quy định; giúp đỡ hành khách khi đi xe, đặc biệt là những người khuyết tật, người già, trẻ em và phụ nữ có thai, có con nhỏ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Luôn có ý thức về tính tổ chức, kỷ luật, thực hiện linh hoạt biểu đồ xe chạy được phân công để tiết kiệm chi phí; thực hiện đúng hành trình, lịch trình khi có khách đi xe, đón trả khách ở những nơi thuận tiện cho hành khách đi xe.",
                "correct": false
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 168,
        "index": 168,
        "text": "Trong hoạt động vận tải đường bộ, các hành vi nào sau đây bị nghiêm cấm?",
        "tip": "Nghiêm cấm vận chuyển hàng cấm lưu thông.",
        "answers": [
            {
                "id": 1,
                "text": "Vận chuyển hàng nguy hiểm nhưng có giấy phép.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Vận chuyển động vật hoang dã nhưng thực hiện đủ các quy định có liên quan.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Vận chuyển hàng cấm lưu thông; vận chuyển trái phép hàng nguy hiểm, động vật hoang dã.",
                "correct": true
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 169,
        "index": 169,
        "text": "Trong hoạt động vận tải khách, những hành vi nào dưới đây bị nghiêm cấm?",
        "tip": "Nghiêm cấm đe dọa, xúc phạm, tranh giành, lôi kéo hành khách.",
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
                "text": "Đe dọa, xúc phạm, tranh giành, lôi kéo hành khách; bắt ép hành khách sử dụng dịch vụ ngoài ý muốn; xuống khách nhằm trốn tránh phát hiện xe chở quá số người quy định.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Tất cả các ý trên.",
                "correct": false
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 170,
        "index": 170,
        "text": "Thời gian làm việc của người lái xe ô tô không được lái xe liên tục quá bao nhiêu giờ trong trường hợp dưới đây?",
        "tip": "Không lái xe liên tục quá 4 giờ.",
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
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 171,
        "index": 171,
        "text": "Thời gian làm việc trong một ngày của người lái xe ô tô không được vượt quá bao nhiêu giờ trong trường hợp dưới đây?",
        "tip": "Không làm việc 1 ngày của lái xe quá 10 giờ.",
        "answers": [
            {
                "id": 1,
                "text": "Không quá 8 giờ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không quá 10 giờ.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Không quá 12 giờ.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Không hạn chế tùy thuộc vào sức khỏe và khả năng của người lái xe.",
                "correct": false
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 172,
        "index": 172,
        "text": "Người lái xe khách phải chấp hành những quy định nào dưới đây?",
        "tip": "Cả ý 1 và ý 2 đều đúng. Bởi vì không thể chở hành khách trên mui được, nên ý 3 sai.",
        "answers": [
            {
                "id": 1,
                "text": "Đón, trả khách đúng nơi quy định, không chở hành khách trên mui, trong khoang hành lý hoặc để hành khách đu bám bên ngoài xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không chở hàng nguy hiểm, hàng có mùi hôi thối hoặc động vật, hàng hóa khác có ảnh hưởng đến sức khỏe của hành khách.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Chở hành khách trên mui; đề hàng hóa trong khoang chở khách, chở quá số người theo quy định.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 173,
        "index": 173,
        "text": "Lái xe kinh doanh vận tải khách phải có trách nhiệm gì sau đây?",
        "tip": "Cả ý 1 và ý 2 đều đúng. Bởi vì không thể tự do trả khách theo yêu cầu được.",
        "answers": [
            {
                "id": 1,
                "text": "Kiểm tra các điều kiện bảo đảm an toàn của xe trước khi khởi hành; kiểm tra việc sắp xếp, chằng buộc hành lý, hàng hóa bảo đảm an toàn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đóng cửa lên xuống của xe trước và trong khi xe chạy.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Đón trả khách tại vị trí do khách hàng yêu cầu.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 174,
        "index": 174,
        "text": "Người kinh doanh vận tải hành khách có những quyền hạn nào dưới đây?",
        "tip": "Người kinh doanh vận tải không thể tự ý thay đổi vị trí đón, nên đáp án 2 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Tự ý thay đổi vị trí đón, trả khách theo hợp đồng vận chuyển hoặc đón thêm người ngoài danh sách hành khách đã ký.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Từ chối vận chuyển trước khi phương tiện rời bến, rời vị trí đón trả khách theo hợp đồng vận chuyển những người đã có vé hoặc người trong danh sách hợp đồng có hành vi gây rối trật tự công cộng, gây cản trở công việc kinh doanh vận tải, ảnh hưởng đến sức khỏe, tài sản của người khác, gian lận vé hoặc hành khách đang bị dịch bệnh nguy hiểm.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 175,
        "index": 175,
        "text": "Hành khách có các quyền gì khi đi trên xe ô tô vận tải khách theo tuyến cố định?",
        "tip": "Hành khách được miễn cước hành lý không quá 20kg.",
        "answers": [
            {
                "id": 1,
                "text": "Được vận chuyển theo đúng hợp đồng vận tải, cam kết của người kinh doanh về chất lượng vận tải; được miễn cước hành lý với trọng lượng không quá 20kg và với kích thước phù hợp với thiết kế của xe; được từ chối chuyến đi trước khi phương tiện khởi hành và được trả lại tiền vé theo quy định của Bộ Giao thông vận tải.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Được vận chuyển theo hợp đồng vận tải, cam kết của người kinh doanh về vận tải; được miễn cước hành lý với trọng lượng không quá 50 kg và với kích thước không quá cồng kềnh; được từ chối chuyến đi trước khi phương tiện khởi hành và được trả lại tiền vé.",
                "correct": false
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 176,
        "index": 176,
        "text": "Hành khách có các nghĩa vụ gì khi đi trên xe ô tô vận tải hành khách?",
        "tip": "Hành khách không thể mang theo hàng hóa cấm lưu thông nên đáp án 1 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Mua vé và trả cước, phí vận tải hành lý mang theo quá mức quy định; có mặt tại nơi xuất phát đúng thời gian thỏa thuận; chấp hành quy định về vận chuyển; thực hiện đúng hướng dẫn của lái xe, nhân viên phục vụ trên xe về các quy định bảo đảm trật tự, an toàn giao thông.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Được mang theo hành lý, hàng hóa mà pháp luật cấm lưu thông khi đã trả cước, phí vận tải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 177,
        "index": 177,
        "text": "Người kinh doanh vận tải hàng hóa có các quyền gì ở dưới đây?",
        "tip": "Người kinh doanh vận tải không thể yêu cầu xếp hàng hóa quá chiều cao quy định hay quá tải trọng nên đáp án 1 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Yêu cầu người thuê vận tải cung cấp thông tin cần thiết về hàng hóa để ghi vào giấy vận chuyển và có quyền kiểm tra tính xác thực của các thông tin đó.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Yêu cầu xếp hàng hóa vận chuyển trên xe vượt quá chiều cao quy định nhưng phải được chằng buộc chắc chắn.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Yêu cầu xếp hàng hóa vượt tải trọng 10%.",
                "correct": false
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 178,
        "index": 178,
        "text": "Người kinh doanh vận tải hàng hóa có các nghĩa vụ gì dưới đây?",
        "tip": "Nghĩa vụ bồi thường thiệt hại do mất mát, hư hỏng.",
        "answers": [
            {
                "id": 1,
                "text": "Cung cấp phương tiện và thực hiện thời gian, địa điểm giao hàng hóa cho người nhận hàng theo điều kiện của người kinh doanh vận tải; chịu trách nhiệm về hậu quả mà người làm công, người đại diện gây ra do thực hiện yêu cầu của người kinh doanh vận tải phù hợp với quy định của pháp luật.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Bồi thường thiệt hại cho người thuê vận tải do mất mát, hư hỏng hàng hóa xảy ra trong quá trình vận tải từ lúc nhận hàng đến lúc giao hàng; bồi thường thiệt hại do người làm công, người đại diện gây ra trong khi thực hiện công việc được người kinh doanh vận tải giao; chịu trách nhiệm về hậu quả mà người làm công, người đại diện gây ra do thực hiện yêu cầu của người kinh doanh vận tải trái với quy định của pháp luật.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 179,
        "index": 179,
        "text": "Người thuê vận tải hàng hóa có các quyền hạn gì dưới đây?",
        "tip": "Người thuê vận tải có quyền từ chối nếu phương tiện không đúng thỏa thuận trong hợp đồng.",
        "answers": [
            {
                "id": 1,
                "text": "Từ chối xếp hàng lên phương tiện mà phương tiện đó không đúng thỏa thuận trong hợp đồng; yêu cầu người kinh doanh vận tải giao hàng đúng thời gian, địa điểm đã thỏa thuận trong hợp đồng; yêu cầu người kinh doanh vận tải bồi thường thiệt hại theo quy định của pháp luật.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Từ chối xếp hàng hóa lên phương tiện khi thấy phương tiện đó không phù hợp với yêu cầu; yêu cầu người kinh doanh vận tải giao hàng trước thời hạn đã thỏa thuận trong hợp đồng; yêu cầu người kinh doanh vận tải bồi thường thiệt hại khi người kinh doanh vận tải gây thiệt hại.",
                "correct": false
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 180,
        "index": 180,
        "text": "Người thuê vận tải hàng hóa có các nghĩa vụ gì dưới đây?",
        "tip": "Người thuê vận tải chuẩn bị đầy đủ giấy tờ hợp pháp về hàng hóa.",
        "answers": [
            {
                "id": 1,
                "text": "Chuẩn bị đầy đủ các giấy tờ hợp pháp về hàng hóa trước khi giao hàng hóa cho người kinh doanh vận tải; đóng gói hàng hóa đúng quy cách, ghi ký hiệu, mã hiệu hàng hóa đầy đủ, rõ ràng; giao hàng hóa cho người kinh doanh vận tải đúng thời gian, địa điểm và nội dung khác ghi trong giấy gửi hàng.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Chuẩn bị đầy đủ các giấy tờ hợp pháp về phương tiện vận chuyển hàng hoá và giao cho người lái xe; xếp hàng hóa lên phương tiện vận chuyển đảm bảo an toàn; giao hàng hóa cho người nhận hàng đúng thời gian, địa điểm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 181,
        "index": 181,
        "text": "Người nhận hàng có các quyền gì dưới đây?",
        "tip": "Người nhận hàng có quyền yêu cầu thanh toán chi phí phát sinh do giao hàng chậm.",
        "answers": [
            {
                "id": 1,
                "text": "Nhận và kiểm tra hàng hóa nhận được theo giấy vận chuyển hoặc chứng từ tương đương khác; yêu cầu người kinh doanh vận tải thanh toán chi phí phát sinh do giao hàng hóa chậm.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Yêu cầu hoặc thông báo cho người thuê vận tải để yêu cầu người lái xe bồi thường thiệt hại do mất mát, hư hỏng hàng hóa; nhận hàng hóa không theo giấy vận chuyển hoặc chứng từ tương đương khác.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 182,
        "index": 182,
        "text": "Người nhận hàng có các nghĩa vụ gì dưới đây?",
        "tip": "Cả 2 ý 1 và 2 đều đúng với nghĩa vụ của người nhận hàng.",
        "answers": [
            {
                "id": 1,
                "text": "Nhận hàng hóa đúng thời gian, địa điểm đã thỏa thuận.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xuất trình giấy vận chuyển và giấy tờ tùy thân cho người kinh doanh vận tải trước khi nhận hàng hóa; thanh toán chi phí phát sinh do nhận hàng chậm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 183,
        "index": 183,
        "text": "Hàng siêu trường, siêu trọng được hiểu như thế nào là đúng?",
        "tip": "Hàng siêu trường, siêu trọng không thể tháo rời.",
        "answers": [
            {
                "id": 1,
                "text": "Là hàng có kích thước vượt quá kích thước và trọng lượng của xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Là hàng có kích thước hoặc trọng lượng vượt quá giới hạn quy định nhưng có thể tháo rời.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Là hàng có kích thước hoặc trọng lượng vượt quá giới hạn quy định nhưng không thể tháo rời ra được.",
                "correct": true
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 184,
        "index": 184,
        "text": "Việc vận chuyển động vật sống phải tuân theo những quy định nào dưới đây?",
        "tip": "Vận chuyển động vật sống có thể cần chăm sóc và chịu trách nhiệm xếp dỡ động vật sống.",
        "answers": [
            {
                "id": 1,
                "text": "Tùy theo loại động vật sống, người kinh doanh vận tải yêu cầu người thuê vận tải áp tải để chăm sóc trong quá trình vận tải.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Người thuê vận tải chịu trách nhiệm về việc xếp dỡ động vật sống theo hướng dẫn của người kinh doanh vận tải; trường hợp người thuê vận tải không thực hiện được thì phải trả cước, phí xếp, dỡ cho người kinh doanh vận tải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 185,
        "index": 185,
        "text": "Xe vận chuyển hàng nguy hiểm phải chấp hành những quy định nào dưới đây?",
        "tip": "Vận chuyển hàng nguy hiểm phải có giấy phép.",
        "answers": [
            {
                "id": 1,
                "text": "Phải có giấy phép do cơ quan có thẩm quyền cấp, xe vận chuyển hàng nguy hiểm không được dừng, đỗ nơi đông người, những nơi dễ xảy ra nguy hiểm.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Phải được chuyên chở trên xe chuyên dùng để vận chuyển hàng nguy hiểm; xe vận chuyển hàng nguy hiểm phải chạy liên tục không được dừng, đỗ trong quá trình vận chuyển.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 186,
        "index": 186,
        "text": "Trong đô thị, người lái xe buýt, xe chở hàng phải thực hiện những quy định nào dưới đây?",
        "tip": "Xe buýt phải chạy đúng tuyến.",
        "answers": [
            {
                "id": 1,
                "text": "Người lái xe buýt phải chạy đúng tuyến, đúng lịch trình và dừng đỗ đúng nơi quy định; người lái xe chở hàng phải hoạt động đúng tuyến, phạm vi và thời gian quy định đối với từng loại xe.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Người lái xe buýt, xe chở hàng đón, trả khách, hàng hóa theo thỏa thuận giữa hành khách, chủ hàng và người lái xe.",
                "correct": false
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 187,
        "index": 187,
        "text": "Việc vận chuyển hàng hóa bằng xe ô tô phải chấp hành các quy định nào dưới đây?",
        "tip": "Vận chuyển hàng hóa phải xếp đặt gọn hàng và che đậy, không để rơi vãi.",
        "answers": [
            {
                "id": 1,
                "text": "Hàng vận chuyển trên xe phải được xếp đặt gọn gàng và chằng buộc chắc chắn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Khi vận chuyển hàng rời phải che đậy, không để rơi vãi.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q188.png",
        "no": 188,
        "index": 188,
        "text": "Những ký hiệu hàng hóa dưới đây, ký hiệu nào chống mưa?",
        "tip": "Hình 1 tránh ánh nắng mặt trời; Hình 2 tránh mưa; Hình 3 là hàng dễ vỡ.",
        "answers": [
            {
                "id": 1,
                "text": "Hình 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Hình 2.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Hình 3.",
                "correct": false
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q189.png",
        "no": 189,
        "index": 189,
        "text": "Ký hiệu chuyên dùng nào biểu hiện hàng chuyên chở phải tránh ánh nắng mặt trời?",
        "tip": "Hình 1 tránh ánh nắng mặt trời; Hình 2 tránh mưa.",
        "answers": [
            {
                "id": 1,
                "text": "Hình 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Hình 2.",
                "correct": false
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q190.png",
        "no": 190,
        "index": 190,
        "text": "Hình nào dưới đây biểu hiện hàng chuyên chở dễ vỡ phải cẩn thận?",
        "tip": "Hình 1 là hàng dễ vỡ; Hình 2 là hàng chất lỏng.",
        "answers": [
            {
                "id": 1,
                "text": "Hình 1",
                "correct": true
            },
            {
                "id": 2,
                "text": "Hình 2",
                "correct": false
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q191.png",
        "no": 191,
        "index": 191,
        "text": "Hình nào dưới đây đòi hỏi hàng phải xếp theo hướng thẳng đứng?",
        "tip": "Hình 1 tránh ánh nắng mặt trời; Hình 2 là hàng dễ vỡ; Hình 3 hàng để thẳng đứng lên.",
        "answers": [
            {
                "id": 1,
                "text": "Hình 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Hình 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Hình 3.",
                "correct": true
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q192.png",
        "no": 192,
        "index": 192,
        "text": "Hình nào dưới đây biểu hiện hàng chuyên chở là chất lỏng?",
        "tip": "Hình 1 là hàng dễ vỡ; Hình 2 là hàng chất lỏng.",
        "answers": [
            {
                "id": 1,
                "text": "Hình 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Hình 2.",
                "correct": true
            }
        ],
        "topic": 2,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 193,
        "index": 193,
        "text": "Người hành nghề lái xe khi thực hiện tốt việc rèn luyện, nâng cao trách nhiệm, đạo đức nghề nghiệp sẽ thu được kết quả như thế nào?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Được khách hàng, xã hội tôn trọng; được đồng nghiệp quý mến, giúp đỡ; được doanh nghiệp tin dùng và đóng góp nhiều cho xã hội.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Thu hút được khách hàng, góp phần quan trọng trong xây dựng thương hiệu, kinh doanh có hiệu quả cao.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 3,
        "required": 0,
        "a1": 0,
        "a2": 140,
        "a34": 167,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 194,
        "index": 194,
        "text": "Người lái xe vận tải hàng hóa cần thực hiện những nhiệm vụ gì ghi ở dưới đây?",
        "tip": "Nhiệm vụ không chở hàng cấm.",
        "answers": [
            {
                "id": 1,
                "text": "Thực hiện nghiêm chỉnh những nội dung hợp đồng giữa chủ phương tiện với chủ hàng trong việc vận chuyển và bảo quản hàng hóa trong quá trình vận chuyển; không chở hàng cấm, không xếp hàng quá trọng tải của xe, quá trọng tải cho phép của cầu, đường; khi vận chuyển hàng quá khổ, quá tải, hàng nguy hiểm, hàng siêu trường, siêu trọng phải có giấy phép.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Thực hiện nghiêm chỉnh những nội dung hợp đồng giữa chủ hàng với khách hàng trong việc vận chuyển và bảo quản hàng hóa trong quá trình vận chuyển; trong trường hợp cần thiết có thể xếp hàng quá trọng tải của xe, quá trọng tải cho phép của cầu theo yêu cầu của chủ hàng; khi vận chuyển hàng quá khổ, quá tải, hàng nguy hiểm, hàng siêu trường, siêu trọng phải được chủ hàng cho phép.",
                "correct": false
            }
        ],
        "topic": 3,
        "required": 0,
        "a1": 0,
        "a2": 141,
        "a34": 168,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 195,
        "index": 195,
        "text": "Người lái xe kinh doanh vận tải cần thực hiện những công việc gì ghi ở dưới đây để thường xuyên rèn luyện nâng cao đạo đức nghề nghiệp?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Phải yêu quý xe, quản lý và sử dụng xe tốt; bảo dưỡng xe đúng định kỳ; thực hành tiết kiệm vật tư, nhiên liệu; luôn tu dưỡng bản thân, có lối sống lành mạnh, tác phong làm việc công nghiệp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Nắm vững các quy định của pháp luật, tự giác chấp hành pháp luật, lái xe an toàn; coi hành khách như người thân, là đối tác tin cậy; có ý thức tổ chức kỷ luật và xây dựng doanh nghiệp vững mạnh; có tinh thần hợp tác, tương trợ, giúp đỡ đồng nghiệp.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 3,
        "required": 0,
        "a1": 0,
        "a2": 142,
        "a34": 169,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 196,
        "index": 196,
        "text": "Người lái xe và nhân viên phục vụ trên xe ô tô vận tải hành khách phải có những trách nhiệm gì theo quy định được ghi ở dưới đây?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Kiểm tra các điều kiện bảo đảm an toàn của xe sau khi khởi hành; có trách nhiệm lái xe thật nhanh khi chậm giờ của khách.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Kiểm tra các điều kiện bảo đảm an toàn của xe trước khi khởi hành; có thái độ văn minh, lịch sự, hướng dẫn hành khách ngồi đúng nơi quy định; kiểm tra việc sắp xếp, chằng buộc hành lý, bảo đảm an toàn.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Có biện pháp bảo vệ tính mạng, sức khỏe, tài sản của hành khách đi xe, giữ gìn trật tự, vệ sinh trong xe; đóng cửa lên xuống của xe trước và trong khi xe chạy.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ý 2 và ý 3.",
                "correct": true
            }
        ],
        "topic": 3,
        "required": 0,
        "a1": 0,
        "a2": 143,
        "a34": 170,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 197,
        "index": 197,
        "text": "Khái niệm về văn hóa giao thông được hiểu như thế nào là đúng?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Là sự hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông; là ý thức trách nhiệm với cộng đồng khi tham gia giao thông.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Là ứng xử có văn hóa, có tình yêu thương con người trong các tình huống không may xảy ra khi tham gia giao thông.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 3,
        "required": 0,
        "a1": 84,
        "a2": 144,
        "a34": 171,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 198,
        "index": 198,
        "text": "Trên làn đường dành cho ô tô có vũng nước lớn, có nhiều người đi xe mô tô trên làn đường bên cạnh, người lái xe ô tô xử lý như thế nào là có văn hóa giao thông?",
        "tip": "",
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
        "topic": 3,
        "required": 0,
        "a1": 0,
        "a2": 145,
        "a34": 172,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 199,
        "index": 199,
        "text": "Người lái xe cố tình không phân biệt làn đường, vạch phân làn, phóng nhanh, vượt ẩu, vượt đèn đỏ, đi vào đường cấm, đường một chiều được coi là hành vi nào trong các hành vi dưới đây?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Là bình thường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Là thiếu văn hóa giao thông.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Là có văn hóa giao thông.",
                "correct": false
            }
        ],
        "topic": 3,
        "required": 1,
        "a1": 0,
        "a2": 146,
        "a34": 173,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 200,
        "index": 200,
        "text": "Khi sơ cứu người bị tai nạn giao thông đường bộ, có vết thương chảy máu ngoài, màu đỏ tươi phun thành tia và phun mạnh khi mạch đập, bạn phải làm gì?",
        "tip": "",
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
        "topic": 3,
        "required": 1,
        "a1": 0,
        "a2": 147,
        "a34": 174,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 201,
        "index": 201,
        "text": "Người lái xe có văn hóa khi tham gia giao thông phải đáp ứng các điều kiện nào dưới đây?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Có trách nhiệm với bản thân và với cộng đồng; tôn trọng, nhường nhịn người khác.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Tận tình giúp đỡ người tham gia giao thông gặp hoạn nạn; giúp đỡ người khuyết tật, trẻ em và người cao tuổi.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 3,
        "required": 0,
        "a1": 0,
        "a2": 148,
        "a34": 175,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 202,
        "index": 202,
        "text": "Trong các hành vi dưới đây, người lái xe mô tô có văn hóa giao thông phải ứng xử như thế nào?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông, chỉ đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Chấp hành quy định về tốc độ, đèn tín hiệu, biển báo hiệu, vạch kẻ đường khi lái xe; chấp hành hiệu lệnh, chỉ dẫn của người điều khiển giao thông; nhường đường cho người đi bộ, người già, trẻ em, người khuyết tật.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 3,
        "required": 0,
        "a1": 0,
        "a2": 149,
        "a34": 176,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 203,
        "index": 203,
        "text": "Trong các hành vi dưới đây, người lái xe mô tô có văn hóa giao thông phải ứng xử như thế nào?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đạt chuẩn, cài quai đúng quy cách.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông",
                "correct": false
            },
            {
                "id": 3,
                "text": "Đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm",
                "correct": false
            }
        ],
        "topic": 3,
        "required": 0,
        "a1": 85,
        "a2": 150,
        "a34": 177,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 204,
        "index": 204,
        "text": "Trong các hành vi dưới đây, người lái xe ô tô có văn hóa giao thông phải ứng xử như thế nào?",
        "tip": "",
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
                "text": "Dừng và đỗ xe ở nơi thuận tiện cho việc giao nhận hành khách và hàng hóa; sử dụng ít rượu, bia thì có thể lái xe.",
                "correct": false
            }
        ],
        "topic": 3,
        "required": 0,
        "a1": 86,
        "a2": 151,
        "a34": 178,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 205,
        "index": 205,
        "text": "Người có văn hóa giao thông khi điều khiển xe cơ giới tham gia giao thông đường bộ phải đảm bảo các điều kiện gì?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Có giấy phép lái xe phù hợp với loại xe được phép điều khiển; xe cơ giới đảm bảo các quy định về chất lượng, an toàn kỹ thuật và bảo vệ môi trường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Có giấy chứng nhận bảo hiểm trách nhiệm dân sự của chủ xe cơ giới còn hiệu lực; nộp phí sử dụng đường bộ theo quy định.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 3,
        "required": 0,
        "a1": 0,
        "a2": 152,
        "a34": 179,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 206,
        "index": 206,
        "text": "Khi xảy ra tai nạn giao thông, người lái xe và người có mặt tại hiện trường vụ tai nạn phải thực hiện các công việc gì dưới đây?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Đặt các biển cảnh báo hoặc vật báo hiệu ở phía trước và phía sau hiện trường xảy ra tai nạn để cảnh báo; kiểm tra khả năng xảy ra hỏa hoạn do nhiên liệu bị rò rỉ; bảo vệ hiện trường vụ tai nạn và cấp cứu người bị thương.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Đặt các biển cảnh báo hoặc vật báo hiệu ở phía trên nóc xe xảy ra tai nạn để cảnh báo; kiểm tra khả năng xảy ra mất an toàn do nước làm mát bị rò rỉ; di chuyển hiện trường vụ tai nạn để giao thông thông suốt.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 3,
        "required": 0,
        "a1": 0,
        "a2": 153,
        "a34": 180,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 207,
        "index": 207,
        "text": "Khi xảy ra tai nạn giao thông, có người bị thương nghiêm trọng, người lái xe và người có mặt tại hiện trường vụ tai nạn phải thực hiện các công việc gì?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Thực hiện sơ cứu ban đầu trong trường hợp khẩn cấp; thông báo vụ tai nạn đến cơ quan thi hành pháp luật.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Nhanh chóng lái xe gây tai nạn hoặc đi nhờ xe khác ra khỏi hiện trường vụ tai nạn.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 3,
        "required": 0,
        "a1": 87,
        "a2": 154,
        "a34": 181,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 208,
        "index": 208,
        "text": "Khi sơ cứu ban đầu cho người bị tai nạn giao thông đường bộ không còn hô hấp, người lái xe và người có mặt tại hiện trường vụ tai nạn phải thực hiện các công việc gì?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Đặt nạn nhân nằm ngửa, khai thông đường thở của nạn nhân.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Thực hiện các biện pháp hô hấp nhân tạo.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 3,
        "required": 0,
        "a1": 0,
        "a2": 155,
        "a34": 182,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 209,
        "index": 209,
        "text": "Hành vi bỏ trốn sau khi gây tai nạn để trốn tránh trách nhiệm hoặc khi có điều kiện mà cố ý không cứu giúp người bị tai nạn giao thông có bị nghiêm cấm hay không?",
        "tip": "",
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
        "topic": 3,
        "required": 0,
        "a1": 0,
        "a2": 156,
        "a34": 183,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 210,
        "index": 210,
        "text": "Khi xảy ra tai nạn giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Xâm phạm tính mạng, sức khoẻ, tài sản của người bị nạn và người gây tai nạn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Bỏ trốn sau khi gây ra tai nạn để trốn tránh trách nhiệm.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 3,
        "required": 1,
        "a1": 0,
        "a2": 157,
        "a34": 184,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 211,
        "index": 211,
        "text": "Khi xảy ra tai nạn giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Xâm phạm tính mạng, sức khỏe, tài sản của người bị nạn và người gây tai nạn.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Sơ cứu người bị nạn khi cơ quan có thẩm quyền chưa cho phép.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Sơ cứu người gây tai nạn khi cơ quan có thẩm quyền chưa cho phép.",
                "correct": false
            }
        ],
        "topic": 3,
        "required": 1,
        "a1": 0,
        "a2": 158,
        "a34": 185,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 212,
        "index": 212,
        "text": "Trong đoạn đường hai chiều tại khu đông dân cư đang ùn tắc, người điều khiển xe mô tô hai bánh có văn hóa giao thông sẽ lựa chọn xử lý tình huống nào dưới đây?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Cho xe lấn sang làn ngược chiều để nhanh chóng thoát khỏi nơi ùn tắc.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Điều khiển xe lên vỉa hè để nhanh chóng thoát khỏi nơi ùn tắc.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Kiên nhẫn tuân thủ hướng dẫn của người điều khiển giao thông hoặc tín hiệu giao thông, di chuyển trên đúng phần đường bên phải theo chiều đi, nhường đường cho các phương tiện đi ngược chiều để nút tắc nhanh chóng được giải tỏa.",
                "correct": true
            }
        ],
        "topic": 3,
        "required": 0,
        "a1": 0,
        "a2": 159,
        "a34": 186,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 213,
        "index": 213,
        "text": "Trên đường đang xảy ra ùn tắc những hành vi nào sau đây là thiếu văn hóa khi tham gia giao thông?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Bấm còi liên tục thúc giục các phương tiện phía trước nhường đường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đi lên vỉa hè, tận dụng mọi khoảng trống để nhanh chóng thoát khỏi nơi ùn tắc.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Lấn sang làn đường bên trái cố gắng vượt lên xe khác",
                "correct": false
            },
            {
                "id": 4,
                "text": "Tất cả các ý nêu trên.",
                "correct": true
            }
        ],
        "topic": 3,
        "required": 0,
        "a1": 88,
        "a2": 160,
        "a34": 187,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 214,
        "index": 214,
        "text": "Khi điều khiển xe mô tô tay ga xuống đường dốc dài, độ dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
        "tip": "Xe mô tô xuống dốc dài cần sử dụng cả phanh trước và phanh sau để giảm tốc độ.",
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
        "topic": 4,
        "required": 1,
        "a1": 89,
        "a2": 161,
        "a34": 188,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 215,
        "index": 215,
        "text": "Khi vào số để khởi hành xe ô tô có số tự động, người lái xe phải thực hiện các thao tác nào để đảm bảo an toàn?",
        "tip": "Khởi hành xe ô tô số tự động cần đạp phanh chân hết hành trình.",
        "answers": [
            {
                "id": 1,
                "text": "Đạp bàn đạp phanh chân hết hành trình, vào số và nhả phanh tay nếu có, kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Đạp bàn đạp để tăng ga với mức độ phù hợp, vào số và kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 216,
        "index": 216,
        "text": "Khi nhả hệ thống phanh dừng cơ khí điều khiển bằng tay (phanh tay), người lái xe cần phải thực hiện các thao tác nào?",
        "tip": "Thực hiện phanh tay cần phải bóp khóa hãm đẩy cần phanh tay về phía trước.",
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
                "text": "Dùng lực tay phải đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải đẩy mạnh cần phanh tay về phía trước, sau đó bóp khóa hãm.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 217,
        "index": 217,
        "text": "Khi khởi hành ô tô sử dụng hộp số cơ khí trên đường bằng, người lái xe cần thực hiện các thao tác nào theo trình tự dưới đây?",
        "tip": "Khởi hành ô tô sử dụng hộp số đạp côn hết hành trình; vào số 1.",
        "answers": [
            {
                "id": 1,
                "text": "Kiểm tra an toàn xung quanh xe ô tô; nhả từ từ đến 1/2 hành trình bàn đạp ly hợp (côn) và giữ trong khoảng 3 giây; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát, sau đó vừa tăng ga vừa nhả hết ly hợp để cho xe ô tô chuyển động.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Kiểm tra an toàn xung quanh xe ô tô; đạp ly hợp (côn) hết hành trình; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát; nhả từ từ đến 1/2 hành trình bàn đạp ly hợp và giữ trong khoảng 3 giây, sau đó vừa tăng ga vừa nhả hết ly hợp (côn) để cho xe ô tô chuyển động.",
                "correct": true
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 218,
        "index": 218,
        "text": "Khi quay đầu xe, người lái xe cần phải quan sát và thực hiện các thao tác nào để đảm bảo an toàn giao thông?",
        "tip": "Đưa đầu xe về phía nguy hiểm, đuôi xe về phía an toàn.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe cho thích hợp; quay đầu xe với tốc độ thấp; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đầu xe về phía nguy hiểm đưa đuôi xe về phía an toàn.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe; quay đầu xe với tốc độ tối đa; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đuôi xe về phía nguy hiểm và đầu xe về phía an toàn.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 90,
        "a2": 162,
        "a34": 189,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 219,
        "index": 219,
        "text": "Khi tránh nhau trên đường hẹp, người lái xe cần phải chú ý những điểm nào để đảm bảo an toàn giao thông?",
        "tip": "Cả ý 1 và ý 2 đều đúng. Ý 3 tránh nhau ban đêm bật đèn pha là sai.",
        "answers": [
            {
                "id": 1,
                "text": "Không nên đi cố vào đường hẹp; xe đi ở phía sườn núi nên dừng lại trước để nhường đường; khi dừng xe nhường đường phải đỗ ngay ngắn.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Trong khi tránh nhau không nên đổi số; khi tránh nhau ban đêm, phải tắt đèn pha bật đèn cốt.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Khi tránh nhau ban đêm, phải thường xuyên bật đèn pha tắt đèn cốt.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 91,
        "a2": 163,
        "a34": 190,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 220,
        "index": 220,
        "text": "Khi điều khiển ô tô lên dốc cao, người lái xe cần thực hiện các thao tác nào?",
        "tip": "Ô tô lên dốc cao cần về số thấp từ chân dốc.",
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
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 221,
        "index": 221,
        "text": "Khi điều khiển ô tô xuống dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
        "tip": "Ô tô xuống dốc cao cần về số thấp.",
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
                "text": "Về số không (N), nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 1,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 222,
        "index": 222,
        "text": "Khi xuống dốc, muốn dừng xe, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        "tip": "Khi xuống dốc muốn dừng xe thì có tín hiệu rẽ phải, điều khiển xe vào lề đường bên phải.",
        "answers": [
            {
                "id": 1,
                "text": "Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số 1, đạp nửa ly hợp (côn) cho xe đến chỗ dừng; khi xe đã dừng, về số không (N), đạp phanh chân và kéo phanh tay.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên trái; đạp hết hành trình ly hợp (côn) và nhả bàn đạp ga để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được tại chỗ dừng; khi xe đã dừng, đạp và giữ phanh chân.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Có tín hiệu rẽ trái, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số không (N) để xe đi đến chỗ dừng, khi xe đã dừng, kéo phanh tay.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 223,
        "index": 223,
        "text": "Khi điều khiển xe trên đường vòng người lái xe cần phải làm gì để đảm bảo an toàn?",
        "tip": "Điều khiển xe trên đường vòng cần giảm tốc độ.",
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
        "topic": 4,
        "required": 0,
        "a1": 92,
        "a2": 164,
        "a34": 191,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 224,
        "index": 224,
        "text": "Khi điều khiển xe ô tô rẽ phải ở chỗ đường giao nhau, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        "tip": "Điều khiển xe rẽ phải thì bám sát vào phía phải đường và giảm tốc độ.",
        "answers": [
            {
                "id": 1,
                "text": "Có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe sang làn đường bên trái; giảm tốc độ và quan sát an toàn phía bên phải để điều khiển xe qua chỗ đường giao nhau.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe bám sát vào phía phải đường; giảm tốc độ và quan sát an toàn phía bên phải để điều khiển xe qua chỗ đường giao nhau.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe bám sát vào phía phải đường; tăng tốc độ và quan sát an toàn phía bên trái để điều khiển xe qua chỗ đường giao nhau.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 225,
        "index": 225,
        "text": "Khi điều khiển xe ô tô rẽ trái ở chỗ đường giao nhau, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        "tip": "Điều khiển xe rẽ trái thì giảm tốc độ.",
        "answers": [
            {
                "id": 1,
                "text": "Cách chỗ rẽ một khoảng cách an toàn giảm tốc độ, có tín hiệu rẽ trái xin đổi làn đường; quan sát an toàn xung quanh đặc biệt là bên trái; đổi sang làn đường bên trái; cho xe chạy chậm tới phía trong của tâm đường giao nhau mới rẽ trái để điều khiển xe qua chỗ đường giao nhau.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ trái, tăng tốc độ để xe nhanh chóng qua chỗ đường giao nhau; có tín hiệu xin đổi làn đường; quan sát an toàn xung quanh đặc biệt là bên trái; đổi làn đường sang phải để mở rộng vòng cua.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 226,
        "index": 226,
        "text": "Khi điều khiển xe sử dụng hộp số cơ khí vượt qua rãnh lớn cắt ngang mặt đường, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        "tip": "Điều khiển xe số tay qua rãnh lớn thì gài số một (1), và không tăng số cho đến khi qua khỏi rãnh.",
        "answers": [
            {
                "id": 1,
                "text": "Gài số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tăng số, tăng tốc độ để bánh xe sau vượt qua rãnh.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Tăng ga, tăng số để hai bánh xe trước và bánh xe sau vượt qua khỏi rãnh và chạy bình thường.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Gài số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tiếp tục để bánh xe sau từ từ xuống rãnh rồi tăng dần ga cho xe ô tô lên khỏi rãnh.",
                "correct": true
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 227,
        "index": 227,
        "text": "Khi điều khiển xe qua đường sắt, người lái xe cần phải thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Khi có chuông báo hoặc thanh chắn đã hạ xuống, người lái xe phải dừng xe tạm thời đúng khoảng cách an toàn, kéo phanh tay nếu đường dốc hoặc phải chờ lâu.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Khi không có chuông báo hoặc thanh chắn không hạ xuống, người lái xe phải quan sát nếu thấy đủ điều kiện an toàn thì về số thấp, tăng ga nhẹ để tránh động cơ chết máy cho xe vượt qua.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 4,
        "required": 1,
        "a1": 0,
        "a2": 165,
        "a34": 192,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 228,
        "index": 228,
        "text": "Khi điều khiển xe ô tô tự đổ, người lái xe cần chú ý những điểm gì để đảm bảo an toàn?",
        "tip": "Xe ben khi đang chạy thì phải hạ hết thùng xe xuống nên ý 2 là sai. Cả ý 1 và ý 3 đều đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Khi chạy trên đường xấu, nhiều ổ gà nên chạy chậm để thùng xe không bị lắc mạnh, không gây hiện tượng lệch \"ben\"; khi chạy vào đường vòng, cần giảm tốc độ, không lấy lái gấp và không phanh gấp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Khi chạy trên đường quốc lộ, đường bằng phẳng không cần hạ hết thùng xe xuống.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Khi đổ hàng phải chọn vị trí có nền đường cứng và phẳng, dừng hẳn xe, kéo chặt phanh tay; sau đó mới điều khiển cơ cấu nâng \"ben\" để đổ hàng, đổ xong hàng mới hạ thùng xuống.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ý 1 và ý 3.",
                "correct": true
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 229,
        "index": 229,
        "text": "Khi điều khiển xe tăng số, người lái xe cần chú ý những điểm gì để đảm bảo an toàn?",
        "tip": "Không được nhìn xuống buồng lái khi tăng số.",
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
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 230,
        "index": 230,
        "text": "Khi điều khiển xe giảm số, người lái xe cần chú ý những điểm gì để đảm bảo an toàn?",
        "tip": "Không được nhìn xuống buồng lái khi giảm số.",
        "answers": [
            {
                "id": 1,
                "text": "Nhìn xuống buồng lái để biết chính xác vị trí các tay số, cần phải giảm thứ tự từ cao đến thấp, phối hợp các động tác phải nhịp nhàng, chính xác.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không được nhìn xuống buồng lái, cần phải giảm thứ tự từ cao đến thấp, phối hợp các động tác phải nhịp nhàng chính xác, vù ga phải phù hợp với tốc độ.",
                "correct": true
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 231,
        "index": 231,
        "text": "Để giảm tốc độ khi ô tô đi xuống đường dốc dài, người lái xe phải thực hiện các thao tác nào để đảm bảo an toàn?",
        "tip": "Để giảm tốc độ khi ô tô xuống dốc dài thì về số thấp phù hợp, nhả bàn đạp ga, đạp phanh chân phù hợp.",
        "answers": [
            {
                "id": 1,
                "text": "Nhả bàn đạp ga, đạp ly hợp (côn) hết hành trình, đạp mạnh phanh chân để giảm tốc độ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Về số thấp phù hợp, nhả bàn đạp ga, đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Nhả bàn đạp ga, tăng lên số cao, đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 1,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 232,
        "index": 232,
        "text": "Khi điều khiển ô tô qua đoạn đường ngập nước, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        "tip": "Điều khiển ô tô qua đường ngập nước thì về số thấp, giữ đều ga.",
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
                "text": "Quan sát, ước lượng độ ngập nước mà xe ôtô có thể vượt qua an toàn, về số thấp, giữ đều ga và giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
                "correct": true
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 233,
        "index": 233,
        "text": "Khi điều khiển ô tô tới gần xe chạy ngược chiều vào ban đêm, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        "tip": "Điều khiển ô tô ban đêm tới gần xe ngược chiều thì chuyển đèn sang chiếu gần, không nhìn vào đèn xe ngược chiều.",
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
                "text": "Chuyển từ đèn chiếu xa sang đèn chiếu gần; nhìn thẳng vào đèn của xe chạy ngược chiều để tránh xe đảm bảo an toàn.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 234,
        "index": 234,
        "text": "Khi điều khiển xe ô tô trên đường trơn cần chú ý những điểm gì để đảm bảo an toàn?",
        "tip": "Điều khiển ô tô qua đường trơn thì không đánh lái ngoặt và phanh gấp.",
        "answers": [
            {
                "id": 1,
                "text": "Giữ vững tay lái cho xe đi đúng vệt bánh xe đi trước, sử dụng số thấp đi chậm, giữ đều ga, đánh lái ngoặt và phanh gấp khi cần thiết.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giữ vững tay lái cho xe đi đúng vệt bánh xe đi trước, sử dụng số thấp đi chậm (số L hoặc 1, 2 đối với xe số tự động), gài cầu (nếu có), giữ đều ga, không lấy nhiều lái, không đánh lái ngoặt và phanh gấp.",
                "correct": true
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q235.png",
        "no": 235,
        "index": 235,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "BRAKE thì phanh tay đang hãm hoặc thiếu dầu phanh.",
        "answers": [
            {
                "id": 1,
                "text": "Phanh tay đang hãm hoặc thiếu dầu phanh.",
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
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q236.png",
        "no": 236,
        "index": 236,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Phanh tay đang hãm.",
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
                "text": "Dầu bôi trơn bị thiếu.",
                "correct": true
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q237.png",
        "no": 237,
        "index": 237,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Cửa xe đóng chưa chặt; hoặc có cửa xe chưa đóng.",
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
                "text": "Cả ý 2 và 3.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q238.png",
        "no": 238,
        "index": 238,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "",
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
                "text": "Lái xe và người ngồi ghế trước chưa cài dây an toàn.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cửa đóng chưa chặt, có cửa chưa đóng.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q239.png",
        "no": 239,
        "index": 239,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "",
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
                "text": "Đang hãm phanh tay.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Sắp hết nhiên liệu.",
                "correct": true
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 240,
        "index": 240,
        "text": "Trong các loại nhiên liệu dưới đây, loại nhiên liệu nào giảm thiểu ô nhiễm môi trường?",
        "tip": "",
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
                "text": "Cả ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 241,
        "index": 241,
        "text": "Các biện pháp tiết kiệm nhiên liệu khi chạy xe?",
        "tip": "Để tiết kiệm nhiên liệu thì bảo dưỡng định kỳ và kiểm tra áp suất lốp.",
        "answers": [
            {
                "id": 1,
                "text": "Bảo dưỡng xe theo định kỳ và có kế hoạch lộ trình trước khi chạy xe.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Kiểm tra áp suất lốp theo quy định và chạy xe với tốc độ phù hợp với tình trạng mặt đường và mật độ giao thông trên đường.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 166,
        "a34": 193,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 242,
        "index": 242,
        "text": "Khi đã đỗ xe ô tô sát lề đường bên phải, người lái xe phải thực hiện các thao tác nào dưới đây khi mở cửa xuống xe để đảm bảo an toàn?",
        "tip": "Mở cửa xe thì quan sát rồi mới mở hé cánh cửa.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát tình hình giao thông phía sau, mở hé cánh cửa, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô.",
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
        "topic": 4,
        "required": 1,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 243,
        "index": 243,
        "text": "Khi lái xe ô tô qua đường sắt không có rào chắn, không có người điều khiển giao thông, người lái xe phải xử lý như thế nào để đảm bảo an toàn?",
        "tip": "Lái xe ô tô qua đường sắt không rào chắn thì cách 5 mét hạ kính cửa, tắt âm thanh, quan sát.",
        "answers": [
            {
                "id": 1,
                "text": "Tạm dừng xe tại vị trí cách đường sắt tối thiểu 5 mét, hạ kính cửa, tắt các thiết bị âm thanh trên xe, quan sát, nếu không có tàu chạy qua, về số thấp, tăng ga nhẹ để tránh động cơ chết máy cho xe vượt qua.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Tại vị trí cách đường sắt tối thiểu 5 mét quan sát phía trước, nếu tàu còn cách xa, tăng số cao, tăng ga để cho xe nhanh chóng vượt qua đường sắt.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 244,
        "index": 244,
        "text": "Khi lái xe ô tô qua đường sắt không có rào chắn, không có người điều khiển giao thông, người lái xe thực hiện thao tác: tạm dừng xe tại vị trí cách đường sắt tối thiểu 5 mét, hạ kính cửa, tắt các thiết bị âm thanh trên xe, quan sát và nếu không có tàu chạy qua thì về số thấp, tăng ga nhẹ để tránh động cơ chết máy cho xe vượt qua để đảm bảo an toàn là đúng hay không?",
        "tip": "Lái xe ô tô qua đường sắt không rào chắn thì cách 5 mét hạ kính cửa, tắt âm thanh, quan sát.",
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
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 245,
        "index": 245,
        "text": "Khi điều khiển ô tô có hộp số tự động đi vào đường trơn trượt, lầy lội, người lái xe phải xử lý như thế nào để đảm bảo an toàn trong các trường hợp dưới đây?",
        "tip": "Điều khiển xe tự động vào đường trơn trượt thì về số thấp, kết hợp phanh chân.",
        "answers": [
            {
                "id": 1,
                "text": "Về số thấp, kết hợp phanh chân để giảm tốc độ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Giữ nguyên tay số D, kết hợp phanh tay để giảm tốc độ.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Về số N (số 0), kết hợp phanh chân để giảm tốc độ.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 1,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 246,
        "index": 246,
        "text": "Khi động cơ ô tô đã khởi động, muốn điều chỉnh ghế của người lái, người lái xe phải điều chỉnh cần số ở vị trí nào?",
        "tip": "Điều chỉnh ghế thì cần số ở P hoặc N.",
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
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 247,
        "index": 247,
        "text": "Khi điều khiển ô tô có hộp số tự động, người lái xe sử dụng chân như thế nào là đúng để bảo đảm an toàn?",
        "tip": "Điều khiển xe số tự động không sử dụng chân trái.",
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
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 248,
        "index": 248,
        "text": "Khi tầm nhìn bị hạn chế bởi sương mù hoặc mưa to, người lái xe phải thực hiện các thao tác nào?",
        "tip": "Tầm nhìn bị hạn chế thì giảm tốc độ.",
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
        "topic": 4,
        "required": 1,
        "a1": 0,
        "a2": 167,
        "a34": 194,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 249,
        "index": 249,
        "text": "Khi đèn pha của xe đi ngược chiều gây chói mắt, làm giảm khả năng quan sát trên đường, người lái xe xử lý như thế nào để đảm bảo an toàn?",
        "tip": "Đèn pha xe ngược chiều gây chói mắt thì giảm tốc độ.",
        "answers": [
            {
                "id": 1,
                "text": "Giảm tốc độ, nếu cần thiết có thể dừng xe lại.",
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
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 168,
        "a34": 195,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 250,
        "index": 250,
        "text": "Để đạt được hiệu quả phanh cao nhất, người lái xe mô tô phải sử dụng các kỹ năng như thế nào dưới đây?",
        "tip": "Khi phanh xe mô tô thì giảm hết ga.",
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
                "text": "Giảm hết ga; sử dụng đồng thời cả phanh sau và phanh trước.",
                "correct": true
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 93,
        "a2": 169,
        "a34": 196,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 251,
        "index": 251,
        "text": "Khi lái xe ô tô trên mặt đường có nhiều \"ổ gà\", người lái xe phải thực hiện thao tác như thế nào để đảm bảo an toàn?",
        "tip": "Lái xe trên đường có nhiều ổ gà thì giảm tốc độ.",
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
                "text": "Tăng tốc độ, đánh lái liên tục để tránh \"ổ gà\".",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 170,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 252,
        "index": 252,
        "text": "Khi điều khiển ô tô gặp mưa to hoặc sương mù, người lái xe phải làm gì để đảm bảo an toàn?",
        "tip": "Điều khiển ô tô gặp mưa to thì chạy tốc độ chậm.",
        "answers": [
            {
                "id": 1,
                "text": "Bật đèn chiếu gần và đèn vàng, điều khiển gạt nước, điều khiển ô tô đi với tốc độ chậm để có thể quan sát được; tìm chỗ an toàn dừng xe, bật đèn dừng khẩn cấp báo hiệu cho các xe khác biết.",
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
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 253,
        "index": 253,
        "text": "Điều khiển xe ô tô trong trời mưa, người lái xe phải xử lý như thế nào để đảm bảo an toàn?",
        "tip": "Điều khiển ô tô trong trời mưa thì giảm tốc độ.",
        "answers": [
            {
                "id": 1,
                "text": "Giảm tốc độ, tăng cường quan sát, không nên phanh gấp, không nên tăng ga hay đánh vô lăng đột ngột, bật đèn pha gần, mở chế độ gạt nước ở chế độ phù hợp để đảm bảo quan sát.",
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
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 254,
        "index": 254,
        "text": "Khi lùi xe, người lái xe phải xử lý như thế nào để bảo đảm an toàn giao thông?",
        "tip": "Lùi xe thì cần quan sát phía sau xe.",
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
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 255,
        "index": 255,
        "text": "Điều khiển xe ô tô trong khu vực đông dân cư cần lưu ý điều gì dưới đây?",
        "tip": "Điều khiển xe ô tô trong khu vực đông dân cư thì giảm tốc độ và đi đúng làn đường.",
        "answers": [
            {
                "id": 1,
                "text": "Giảm tốc độ đến mức an toàn, quan sát, nhường đường cho người đi bộ; giữ khoảng cách an toàn với các xe phía trước.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đi đúng làn đường quy định; chỉ được chuyển làn đường ở nơi cho phép, nhưng phải quan sát.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 256,
        "index": 256,
        "text": "Khi điều khiển xe ô tô nhập vào đường cao tốc người lái xe cần thực hiện như thế nào để bảo đảm an toàn giao thông?",
        "tip": "Khi lái xe nhập vào làn đường cao tốc thì nhường đường cho xe đang trên đường cao tốc.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát, phát tín hiệu và lái xe nhập vào làn đường tăng tốc, nhường đường cho các xe đang chạy trên đường cao tốc, khi đủ điều kiện an toàn thì tăng tốc độ cho xe nhập vào làn đường cao tốc.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Phát tín hiệu, quan sát các xe đang chạy phía trước, nếu đảm bảo các điều kiện an toàn thì tăng tốc độ cho xe nhập ngay vào làn đường cao tốc.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Phát tín hiệu và lái xe nhập vào làn đường tăng tốc, quan sát các xe phía sau đang chạy trên đường cao tốc, khi đủ điều kiện an toàn thì giảm tốc độ, từ từ cho xe nhập vào làn đường cao tốc.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 257,
        "index": 257,
        "text": "Khi điều khiển xe ô tô ra khỏi đường cao tốc người lái xe cần thực hiện như thế nào để bảo đảm an toàn giao thông?",
        "tip": "Điều khiển xe ra khỏi làn cao tốc thì không được phép lùi xe, nên đáp án 2 là sai.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát phía trước để tìm biển báo chỉ dẫn \"Lối ra đường cao tốc\", kiểm tra tình trạng giao thông phía sau và bên phải, nếu đảm bảo điều kiện an toàn thì phát tín hiệu và điều khiển xe chuyển dần sang làn đường giảm tốc và ra khỏi đường cao tốc.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Quan sát về phía trước để tìm biển báo chỉ dẫn \"Lối ra đường cao tốc\", trường hợp vượt qua \"Lối ra đường cao tốc\" thì phát tín hiệu, di chuyển sang làn đường giảm tốc và lùi xe quay trở lại.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 258,
        "index": 258,
        "text": "Người lái xe được dừng xe, đỗ xe trên làn dừng khẩn cấp của đường cao tốc trong trường hợp nào dưới đây?",
        "tip": "Trên cao tốc chỉ được dừng xe ở làn khẩn cấp khi xe gặp sự cố.",
        "answers": [
            {
                "id": 1,
                "text": "Xe gặp sự cố, tai nạn, hoặc trường hợp khẩn cấp không thể di chuyển bình thường.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Để nghỉ ngơi, đi vệ sinh, chụp ảnh, làm việc riêng...",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 1,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 259,
        "index": 259,
        "text": "Trong trường hợp bất khả kháng, khi dừng xe, đỗ xe trên làn dừng khẩn cấp của đường cao tốc người lái xe phải xử lý như thế nào là đúng quy tắc giao thông?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Bật đèn cảnh báo sự cố, di chuyển phương tiện đến vị trí sát lề đường",
                "correct": false
            },
            {
                "id": 2,
                "text": "Sử dụng các thiết bị cảnh báo như chóp nón, biển báo, đèn chớp... đặt phía sau xe để cảnh báo các phương tiện.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Gọi số điện thoại khẩn cấp của đường cao tốc để được hỗ trợ nếu xe gặp sự cố, tai nạn, hoặc các trường hợp khẩn cấp không thể di chuyển bình thường.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Tất cả các ý nêu trên.",
                "correct": true
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 260,
        "index": 260,
        "text": "Khi điều khiển ô tô xuống đường dốc dài, độ dốc cao, người lái xe số tự động cần thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
        "tip": "Điều khiển ô tô số tự động xuống dốc dài thì nhả bàn đạp ga, về số thấp.",
        "answers": [
            {
                "id": 1,
                "text": "Nhả bàn đạp ga, về số thấp (sử dụng số L hoặc 1, 2), đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Nhả bàn đạp ga, về số không (N) đạp phanh chân và kéo phanh tay để giảm tốc độ.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 1,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 261,
        "index": 261,
        "text": "Khi đi từ đường nhánh ra đường chính, người lái xe phải xử lý như nào là đúng quy tắc giao thông?",
        "tip": "Đi từ đường nhánh ra đường chính thì giảm tốc độ, nhường đường cho xe trên đường chính.",
        "answers": [
            {
                "id": 1,
                "text": "Giảm tốc độ, nhường đường cho xe trên đường chính từ bất kì hướng nào tới.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Nháy đèn, bấm còi để xe đi trên đường chính biết và tăng tốc độ cho xe đi ra đường chính.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Quan sát xe đang đi trên đường chính, nếu là xe có kích thước lớn hơn thì nhường đường, xe có kích thước nhỏ hơn thì tăng tốc độ cho xe đi ra đường chính.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 1,
        "a1": 0,
        "a2": 171,
        "a34": 197,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 262,
        "index": 262,
        "text": "Khi đang lái xe mô tô và ô tô, nếu có nhu cầu sử dụng điện thoại để nhắn tin hoặc gọi điện, người lái xe phải thực hiện như thế nào trong các tình huống nêu dưới đây?",
        "tip": "Khi cần nghe điện thoại thì giảm tốc độ và dừng xe ở nơi cho phép dừng xe.",
        "answers": [
            {
                "id": 1,
                "text": "Giảm tốc độ để đảm bảo an toàn với xe phía trước và sử dụng điện thoại để liên lạc.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giảm tốc độ để dừng xe ở nơi cho phép dừng xe sau đó sử dụng điện thoại để liên lạc.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Tăng tốc độ để cách xa xe phía sau và sử dụng điện thoại để liên lạc.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 1,
        "a1": 94,
        "a2": 172,
        "a34": 198,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 263,
        "index": 263,
        "text": "Những thói quen nào dưới đây khi điều khiển xe mô tô tay ga tham gia giao thông dễ gây tai nạn nguy hiểm?",
        "tip": "Xe mô tô tay ga chỉ sử dụng phanh trước thì rất nguy hiểm.",
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
        "topic": 4,
        "required": 0,
        "a1": 95,
        "a2": 173,
        "a34": 199,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 264,
        "index": 264,
        "text": "Người ngồi trên xe ô tô cần thực hiện những thao tác mở cửa như thế nào để xuống xe một cách an toàn?",
        "tip": "Mở cửa xe thì quan sát rồi mới mở hé cánh cửa.",
        "answers": [
            {
                "id": 1,
                "text": "Quan sát gương chiếu hậu hoặc xoay người quan sát phía sau để phát hiện các phương tiện đang di chuyển tới gần, khi đủ điều kiện an toàn, dùng tay cách xa cửa hơn mở hé cửa, sau đó mở ở mức cần thiết để xuống xe.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Quan sát tình hình giao thông phía trước, không cần quan sát phía sau và bên mở cửa; mở cánh cửa hết hành trình và nhanh chóng ra khỏi xe ô tô.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 265,
        "index": 265,
        "text": "Khi điều khiển xe mô tô quay đầu người lái xe cần thực hiện như thế nào để đảm bảo an toàn?",
        "tip": "",
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
                "text": "Tất cả các ý nêu trên.",
                "correct": true
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 96,
        "a2": 174,
        "a34": 200,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 266,
        "index": 266,
        "text": "Tay ga trên xe mô tô hai bánh có tác dụng gì trong các trường hợp dưới đây?",
        "tip": "",
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
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 97,
        "a2": 175,
        "a34": 201,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 267,
        "index": 267,
        "text": "Gương chiếu hậu của xe mô tô hai bánh, có tác dụng gì trong các trường hợp dưới đây?",
        "tip": "",
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
                "text": "Để quan sát an toàn phía sau cả bên trái và bên phải trước khi chuyển hướng.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Để quan sát an toàn phía trước cả bên trái và bên phải trước khi chuyển hướng.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 98,
        "a2": 176,
        "a34": 202,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 268,
        "index": 268,
        "text": "Để đảm bảo an toàn khi tham gia giao thông, người lái xe lái xe mô tô hai bánh cần điều khiển tay ga như thế nào trong các trường hợp dưới đây?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Tăng ga thật nhanh, giảm ga từ từ.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Tăng ga thật nhanh, giảm ga thật nhanh.",
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
        "topic": 4,
        "required": 0,
        "a1": 99,
        "a2": 177,
        "a34": 203,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 269,
        "index": 269,
        "text": "Kỹ thuật cơ bản để giữ thăng bằng khi điều khiển xe mô tô đi trên đường gồ ghề như thế nào trong các trường hợp dưới đây?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Đứng thẳng trên giá gác chân lái sau đó hơi gập đầu gối và khuỷu tay, đi chậm để không nẩy quá mạnh.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Ngồi lùi lại phía sau, tăng ga vượt nhanh qua đoạn đường xóc.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Ngồi lệch sang bên trái hoặc bên phải để lấy thăng bằng qua đoạn đường gồ ghề.",
                "correct": false
            }
        ],
        "topic": 4,
        "required": 0,
        "a1": 100,
        "a2": 178,
        "a34": 204,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 270,
        "index": 270,
        "text": "Chủ phương tiện cơ giới đường bộ có được tự ý thay đổi màu sơn, nhãn hiệu hoặc các đặc tính kỹ thuật của phương tiện so với chứng nhận đăng ký xe hay không?",
        "tip": "Không được phép thay đổi so với giấy chứng nhận đăng ký xe.",
        "answers": [
            {
                "id": 1,
                "text": "Được phép thay đổi bằng cách dán đề can với màu sắc phù hợp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Không được phép thay đổi.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Tùy từng loại phương tiện cơ giới đường bộ.",
                "correct": false
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 179,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 271,
        "index": 271,
        "text": "Xe ô tô tham gia giao thông đường bộ phải bảo đảm các quy định về chất lượng, an toàn kỹ thuật và bảo vệ môi trường nào ghi dưới đây?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Kính chắn gió, kính cửa phải là loại kính an toàn, bảo đảm tầm nhìn cho người điều khiển; có đủ hệ thống hãm và hệ thống chuyển hướng có hiệu lực, tay lái của xe ô tô ở bên trái của xe, có còi với âm lượng đúng quy chuẩn kỹ thuật.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Có đủ đèn chiếu sáng gần và xa, đèn soi biển số, đèn báo hãm, đèn tín hiệu; có đủ bộ phận giảm thanh, giảm khói, các kết cấu phải đủ độ bền và bảo đảm tính năng vận hành ổn định.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2",
                "correct": true
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 272,
        "index": 272,
        "text": "Xe mô tô và xe ô tô tham gia giao thông trên đường bộ phải bắt buộc có đủ bộ phận giảm thanh không?",
        "tip": "",
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
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 180,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 273,
        "index": 273,
        "text": "Xe ô tô tham gia giao thông trên đường bộ phải có đủ các loại đèn gì?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Đèn chiếu sáng gần và xa.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Đèn soi biển số; đèn báo hãm và đèn tín hiệu.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dàn đèn pha trên nóc xe.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 274,
        "index": 274,
        "text": "Kính chắn gió của xe ô tô phải đảm bảo yêu cầu nào dưới đây?",
        "tip": "Yêu cầu của kính chắn gió, chọn \"Loại kính an toàn\".",
        "answers": [
            {
                "id": 1,
                "text": "Là loại kính an toàn, kính nhiều lớp, đúng quy cách, không rạn nứt, đảm bảo hình ảnh quan sát rõ ràng, không bị méo mó.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Là loại kính trong suốt, đúng quy cách, không rạn nứt, đảm bảo tầm nhìn cho người điều khiển về phía trước mặt và hai bên.",
                "correct": false
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 275,
        "index": 275,
        "text": "Bánh xe lắp cho xe ô tô phải đảm bảo an toàn kỹ thuật như thế nào dưới đây?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Đủ số lượng, đủ áp suất, đúng cỡ lốp của nhà sản xuất hoặc tài liệu kỹ thuật quy định; lốp bánh dẫn hướng hai bên cùng kiểu hoa lốp, chiều cao hoa lốp đồng đều; không sử dụng lốp đắp; lốp không mòn đến dấu chỉ báo độ mòn của nhà sản xuất, không nứt, vỡ, phồng rộp làm hở lớp sợi mành.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Vành, đĩa vành đúng kiểu loại, không rạn, nứt, cong vênh; bánh xe quay trơn, không bị bó kẹt hoặc cọ sát vào phần khác; moay ơ không bị rơ; lắp đặt chắc chắn, đủ các chi tiết kẹp chặt và phòng lỏng.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 276,
        "index": 276,
        "text": "Âm lượng của còi điện lắp trên ô tô (đo ở độ cao 1,2 mét với khoảng cách 2 mét tính từ đầu xe) là bao nhiêu?",
        "tip": "Âm lượng của còi là từ 90 dB đến 115 dB.",
        "answers": [
            {
                "id": 1,
                "text": "Không nhỏ hơn 90 dB (A), không lớn hơn 115 dB (A).",
                "correct": true
            },
            {
                "id": 2,
                "text": "Không nhỏ hơn 80 dB (A), không lớn hơn 105 dB (A).",
                "correct": false
            },
            {
                "id": 3,
                "text": "Không nhỏ hơn 70 dB (A), không lớn hơn 90 dB (A).",
                "correct": false
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 277,
        "index": 277,
        "text": "Mục đích của bảo dưỡng thường xuyên đối với xe ô tô có tác dụng gì?",
        "tip": "",
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
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 278,
        "index": 278,
        "text": "Trong các nguyên nhân nêu dưới đây, nguyên nhân nào làm động cơ diesel không nổ?",
        "tip": "Động cơ diesel không nổ do nhiên liệu lẫn tạp chất.",
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
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 279,
        "index": 279,
        "text": "Gạt nước lắp trên ô tô phải đảm bảo yêu cầu an toàn kỹ thuật nào dưới đây?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Đầy đủ số lượng, lắp đặt chắc chắn, hoạt động bình thường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Lưỡi gạt không quá mòn, diện tích quét đảm bảo tầm nhìn của người lái.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": true
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 280,
        "index": 280,
        "text": "Dây đai an toàn lắp trên ô tô phải đảm bảo yêu cầu an toàn kỹ thuật nào dưới đây?",
        "tip": "Dây đai an toàn có cơ cấu hãm giữ chặt dây khi giật dây đột ngột.",
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
                "text": "Cả ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 281,
        "index": 281,
        "text": "Thế nào là động cơ 4 kỳ?",
        "tip": "Động cơ 4 kỳ thì pít tông thực hiện 4 hành trình.",
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
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 181,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 282,
        "index": 282,
        "text": "Công dụng của hệ thống bôi trơn đối với động cơ ô tô?",
        "tip": "Hệ thống bôi trơn giảm ma sát.",
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
                "text": "Cả ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 283,
        "index": 283,
        "text": "Niên hạn sử dụng của ô tô tải (tính bắt đầu từ năm sản xuất) là bao nhiêu năm?",
        "tip": "Niên hạn ô tô tải là 25 năm.",
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
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 284,
        "index": 284,
        "text": "Niên hạn sử dụng của ô tô chở người trên 9 chỗ ngồi (tính bắt đầu từ năm sản xuất) là bao nhiêu năm?",
        "tip": "Niên hạn ô tô trên 9 chỗ ngồi là 20 năm.",
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
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 285,
        "index": 285,
        "text": "Hãy nêu công dụng của động cơ ô tô?",
        "tip": "Động cơ ô tô biến nhiệt năng thành cơ năng.",
        "answers": [
            {
                "id": 1,
                "text": "Khi làm việc, nhiệt năng được biến đổi thành cơ năng làm trục khuỷu động cơ quay, truyền lực đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho ô tô.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Khi làm việc, cơ năng được biến đổi thành nhiệt năng và truyền đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho ô tô.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả ý 1 và ý 2.",
                "correct": false
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 286,
        "index": 286,
        "text": "Hãy nêu công dụng hệ thống truyền lực của ô tô?",
        "tip": "Hệ thống truyền lực truyền mô men quay từ động cơ tới bánh xe.",
        "answers": [
            {
                "id": 1,
                "text": "Dùng để truyền mô men quay từ động cơ tới các bánh xe chủ động của ô tô.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Dùng để thay đổi hướng chuyển động hoặc giữ cho ô tô chuyển động ổn định theo hướng xác định.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dùng để làm giảm tốc độ, dừng chuyển động của ô tô.",
                "correct": false
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 287,
        "index": 287,
        "text": "Hãy nêu công dụng ly hợp (côn) của ô tô?",
        "tip": "Ly hợp (côn) truyền hoặc ngắt truyền động từ động cơ đến hộp số.",
        "answers": [
            {
                "id": 1,
                "text": "Dùng để truyền mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình ô tô chuyển động.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Dùng để truyền hoặc ngắt truyền động từ động cơ đến hộp số của ô tô.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Dùng để truyền truyền động từ hộp số đến bánh xe chủ động của ô tô.",
                "correct": false
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 288,
        "index": 288,
        "text": "Hãy nêu công dụng hộp số của ô tô?",
        "tip": "Hộp số ô tô đảm bảo chuyển động lùi.",
        "answers": [
            {
                "id": 1,
                "text": "Truyền và tăng mô men xoắn giữa các trục vuông góc nhau, đảm bảo cho các bánh xe chủ động quay với tốc độ khác nhau khi sức cản chuyển động ở bánh xe hai bên không bằng nhau.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Truyền và thay đổi mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình ô tô chuyển động, chuyển số êm dịu, dễ điều khiển.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Truyền và thay đổi mô men từ động cơ đến bánh xe chủ động, cắt truyền động từ động cơ đến bánh xe chủ động, đảm bảo cho ô tô chuyển động lùi.",
                "correct": true
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 289,
        "index": 289,
        "text": "Hãy nêu công dụng hệ thống lái của ô tô?",
        "tip": "Hệ thống lái dùng để thay đổi hướng.",
        "answers": [
            {
                "id": 1,
                "text": "Dùng để thay đổi mô men từ động cơ tới các bánh xe chủ động khi ô tô chuyển động theo hướng xác định.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Dùng để thay đổi mô men giữa các trục vuông góc nhau khi ô tô chuyển động theo hướng xác định.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dùng để thay đổi hướng chuyển động hoặc giữ cho ô tô chuyển động ổn định theo hướng xác định.",
                "correct": true
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 290,
        "index": 290,
        "text": "Hãy nêu công dụng hệ thống phanh của ô tô?",
        "tip": "Hệ thống phanh giúp giảm tốc độ.",
        "answers": [
            {
                "id": 1,
                "text": "Dùng để giảm tốc độ, dừng chuyển động của ô tô và giữ cho ô tô đứng yên trên dốc.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Dùng để thay đổi hướng chuyển động hoặc giữ cho ô tô chuyển động ổn định theo hướng xác định.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Dùng để truyền hoặc ngắt truyền động từ động cơ đến bánh xe chủ động của ô tô.",
                "correct": false
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 291,
        "index": 291,
        "text": "Đèn phanh trên xe mô tô có tác dụng gì?",
        "tip": "",
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
                "text": "Cả ý 1 và ý 2",
                "correct": true
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 182,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q292.png",
        "no": 292,
        "index": 292,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "",
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
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q293.png",
        "no": 293,
        "index": 293,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "",
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
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q294.png",
        "no": 294,
        "index": 294,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "",
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
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q295.png",
        "no": 295,
        "index": 295,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Báo hiệu hệ thống chống bó cứng khi phanh bị lỗi.",
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
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q296.png",
        "no": 296,
        "index": 296,
        "text": "Khi khởi động xe số tự động có trang bị chìa khóa thông minh có cần đạp hết hành trình bàn đạp chân phanh?",
        "tip": "Khởi động xe tự động phải đạp phanh.",
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
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 297,
        "index": 297,
        "text": "Ắc quy được trang bị trên xe ô tô có tác dụng gì?",
        "tip": "Ắc quy để tích trữ điện năng.",
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
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 298,
        "index": 298,
        "text": "Máy phát điện được trang bị trên xe ô tô có tác dụng gì?",
        "tip": "Máy phát điện để phát điện năng.",
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
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 299,
        "index": 299,
        "text": "Dây đai an toàn được trang bị trên xe ô tô có tác dụng gì?",
        "tip": "Dây đai giữ chặt người lái và hành khách trên ghế ngồi.",
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
            },
            {
                "id": 3,
                "text": "Để tích trữ điện năng và cung cấp điện cho các phụ tải làm việc.",
                "correct": false
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "",
        "no": 300,
        "index": 300,
        "text": "Túi khí được trang bị trên xe ô tô có tác dụng gì?",
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
                "text": "Cả ý 2 và ý 3.",
                "correct": true
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q301.png",
        "no": 301,
        "index": 301,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây không tắt trong thời gian dài, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "",
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
                "text": "Hệ thống lái gặp trục trặc.",
                "correct": true
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q302.png",
        "no": 302,
        "index": 302,
        "text": "Trên xe ô tô có trang bị thiết bị như hình vẽ có tác dụng gì?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Dùng để kích (hay nâng) xe ô tô",
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
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 183,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q303.png",
        "no": 303,
        "index": 303,
        "text": "Trên xe ô tô có trang bị thiết bị như hình vẽ, dùng để làm gì?",
        "tip": "",
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
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 184,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q304.png",
        "no": 304,
        "index": 304,
        "text": "Trên xe ô tô có trang bị thiết bị như hình vẽ, dùng để làm gì?",
        "tip": "",
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
                "text": "Phá cửa kính xe ô tô trong các trường hợp khẩn cấp.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cầm máu cho người bị nạn.",
                "correct": false
            }
        ],
        "topic": 5,
        "required": 0,
        "a1": 0,
        "a2": 185,
        "a34": 0,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q305.png",
        "no": 305,
        "index": 305,
        "text": "Biển nào cấm các loại xe cơ giới đi vào, trừ xe gắn máy, mô tô hai bánh và các loại xe ưu tiên theo luật định?",
        "tip": "",
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
                "text": "Biển 1 và 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 186,
        "a34": 205,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q306.png",
        "no": 306,
        "index": 306,
        "text": "Biển nào cấm ô tô tải?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Cả ba biển.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2 và 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 1 và 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 1 và 2.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 187,
        "a34": 206,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q307.png",
        "no": 307,
        "index": 307,
        "text": "Biển nào cấm máy kéo?",
        "tip": "Biển 2: P.106 \"Cấm xe ôtô tải\" sẽ cấm cả máy kéo và các xe máy chuyên dùng; Biển 3: P.109 \"Cấm máy kéo\" nên Biển 2 và Biển 3 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2 và 3.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 1 và 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 188,
        "a34": 207,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q308.png",
        "no": 308,
        "index": 308,
        "text": "Biển nào báo hiệu cấm xe mô tô ba bánh đi vào?",
        "tip": "Biển 1: P.104 \"Cấm mô tô\" thì cấm cả mô tô 3 bánh.\nBiển 2: P.103a \"Cấm ô tô\" cấm ô tô và và cả phương tiện 3 bánh đi vào.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và 2.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 1 và 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 189,
        "a34": 208,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q309.png",
        "no": 309,
        "index": 309,
        "text": "Biển nào dưới đây xe gắn máy được phép đi vào?",
        "tip": "Biển 104 \"Cấm mô tô\" và biển 103a \"Cấm ô tô\" không cấm xe gắn máy (không phải mô tô). Nên cả 2 biển đều cho phép xe gắn máy đi vào.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 101,
        "a2": 190,
        "a34": 209,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q310.png",
        "no": 310,
        "index": 310,
        "text": "Biển nào báo hiệu cấm xe mô tô hai bánh đi vào?",
        "tip": "",
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
        "topic": 6,
        "required": 0,
        "a1": 102,
        "a2": 191,
        "a34": 210,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q311.png",
        "no": 311,
        "index": 311,
        "text": "Khi gặp biển nào thì xe mô tô hai bánh được đi vào?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Không biển nào.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 103,
        "a2": 192,
        "a34": 211,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q312.png",
        "no": 312,
        "index": 312,
        "text": "Biển nào cho phép ô tô con được vượt?",
        "tip": "Biển 1: DP.133 \"Hết cấm vượt\"; Biển 2: P.125 \"Cấm vượt\"; Biển 3: P.126 \"Cấm ô tô tải vượt\". Chỉ có biển 2 cấm ô tô con vượt nên là đáp án đúng Biển 1 và biển 3.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và 2.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 1 và 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Biển 2 và 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 193,
        "a34": 212,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q313.png",
        "no": 313,
        "index": 313,
        "text": "Biển nào không cho phép ô tô con vượt?",
        "tip": "Biển 1: DP.133 \"Hết cấm vượt\"; Biển 2: P.125 \"Cấm vượt\"; Biển 3: P.126 \"Cấm ô tô tải vượt\". Biển 2 cấm ô tô con vượt nên là đáp án đúng.",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 194,
        "a34": 213,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q314.png",
        "no": 314,
        "index": 314,
        "text": "Biển nào cấm ô tô tải vượt?",
        "tip": "Biển 1: DP.133 \"Hết cấm vượt\"; Biển 2: P.125 \"Cấm vượt\"; Biển 3: P.126 \"Cấm ô tô tải vượt\".",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 1 và 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 2 và 3.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 195,
        "a34": 214,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q315.png",
        "no": 315,
        "index": 315,
        "text": "Biển nào cấm xe tải vượt?",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 196,
        "a34": 215,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q316.png",
        "no": 316,
        "index": 316,
        "text": "Biển nào xe ô tô con được phép vượt?",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 197,
        "a34": 216,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q317.png",
        "no": 317,
        "index": 317,
        "text": "Biển nào cấm quay xe?",
        "tip": "Biển 1: P.123a \"Cấm rẽ trái\" không cấm quay đầu xe; Biển 2: P.124a \"Cấm quay xe\" không cấm rẽ trái.\nNên Biển 2 là đáp án đúng.",
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
        "topic": 6,
        "required": 0,
        "a1": 104,
        "a2": 198,
        "a34": 217,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q318.png",
        "no": 318,
        "index": 318,
        "text": "Biển nào cấm xe rẽ trái?",
        "tip": "Biển 1: P.123a \"Cấm rẽ trái\" không cấm quay đầu xe; Biển 2: P.124a \"Cấm quay xe\" không cấm rẽ trái.\nNên Biển 1 là đáp án đúng.",
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
        "topic": 6,
        "required": 0,
        "a1": 105,
        "a2": 199,
        "a34": 218,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q319.png",
        "no": 319,
        "index": 319,
        "text": "Khi gặp biển nào xe được rẽ trái?",
        "tip": "Biển 1: P.123a \"Cấm rẽ trái\" không cấm quay đầu xe; Biển 2: P.124a \"Cấm quay xe\" không cấm rẽ trái.\nNên Biển 2 là đáp án đúng.",
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
        "topic": 6,
        "required": 0,
        "a1": 106,
        "a2": 200,
        "a34": 219,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q320.png",
        "no": 320,
        "index": 320,
        "text": "Biển nào cấm ô tô rẽ trái?",
        "tip": "Biển 1: 123a \"Cấm rẽ trái\"; Biển 2: 124e \"Cấm ô tô rẽ trái và quay xe\" nên cả 2 biển đều cấm rẽ trái.",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 201,
        "a34": 220,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q321.png",
        "no": 321,
        "index": 321,
        "text": "Biển nào cấm các phương tiện giao thông đường bộ rẽ phải?",
        "tip": "Biển 1: 123b \"Cấm rẽ phải\"; Biển 2: 124d \"Cấm rẽ phải và quay xe\"; Biển 3: 124f \"Cấm ô tô rẽ phải và quay xe\".\nNên biển 3 chỉ cấm xe ô tô, còn biển 1 và biển 2 cấm toàn bộ phương tiện rẽ phải.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và 2.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 1 và 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 107,
        "a2": 202,
        "a34": 221,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q322.png",
        "no": 322,
        "index": 322,
        "text": "Biển nào cấm các phương tiện giao thông đường bộ rẽ trái?",
        "tip": "Biển 1: 123a \"Cấm rẽ trái\"; Biển 2: 124c \"Cấm rẽ trái và quay xe\"; Biển 3: 124e \"Cấm ô tô rẽ trái và quay xe\".\nNên biển 3 chỉ cấm xe ô tô, còn biển 1 và biển 2 cấm toàn bộ phương tiện rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và 2.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 1 và 3",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và 3",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 108,
        "a2": 203,
        "a34": 222,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q323.png",
        "no": 323,
        "index": 323,
        "text": "Biển nào cấm cấm ô tô quay đầu?",
        "tip": "Biển 1: P.124b \"Cấm ô tô quay đầu xe\"; Biển 2: P.124e \"Cấm ôtô rẽ trái và quay xe\"; Biển 3: P.103b \"Cấm ô tô rẽ phải\" - Biển này không cấm quay đầu.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và 2.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 1 và 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Không biển nào.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 204,
        "a34": 223,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q324.png",
        "no": 324,
        "index": 324,
        "text": "Biển nào cấm ô tô rẽ phải và quay đầu xe?",
        "tip": "Biển 1: P.124b \"Cấm ô tô quay đầu xe\"; Biển 2: P.124e \"Cấm ôtô rẽ trái và quay xe\"; Biển 3: P.124f \"Cấm ôtô rẽ phải và quay xe\"",
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
                "text": "Biển 1 và 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 205,
        "a34": 224,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q325.png",
        "no": 325,
        "index": 325,
        "text": "Biển nào cấm xe taxi mà không cấm các phương tiện khác?",
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
            },
            {
                "id": 3,
                "text": "Không biển nào",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 206,
        "a34": 225,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q326.png",
        "no": 326,
        "index": 326,
        "text": "Biển nào cho phép xe rẽ trái?",
        "tip": "Theo QCVN41:2019 thì Biển 2: I.410 \"Khu vực quay xe\" chỉ dẫn khu vực được phép quay đầu xe. Biển này thuộc nhóm biển chỉ dẫn nên KHÔNG cấm rẽ trái. Do đó, đáp án đúng là câu 2.",
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
        "topic": 6,
        "required": 0,
        "a1": 109,
        "a2": 207,
        "a34": 226,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q327.png",
        "no": 327,
        "index": 327,
        "text": "Biển nào xe quay đầu không bị cấm?",
        "tip": "Biển 1: P.123a \"Cấm rẽ trái\" không cấm quay đầu xe; Biển 2: I.410 \"Khu vực quay xe\". Nên cả 2 biển cho phép quay đầu xe là đáp án đúng.",
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
                "text": "Cả 2 biển.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 110,
        "a2": 208,
        "a34": 227,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q328.png",
        "no": 328,
        "index": 328,
        "text": "Biển nào xe được phép quay đầu nhưng không được rẽ trái?",
        "tip": "Biển 1: 123a \"Cấm rẽ trái\" nhưng không cấm quay đầu xe.\nBiển 2: R.301e đặt trước ngã ba ngã tư chỉ được rẽ trái ở phạm vi ngã ba, ngã tư phía sau mặt biển nên không thể quay đầu xe.",
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
                "text": "Cả 2 biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 111,
        "a2": 209,
        "a34": 228,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q329.png",
        "no": 329,
        "index": 329,
        "text": "Biển nào là biển \"Cấm đi ngược chiều\"?",
        "tip": "Biển 1: P.101 \"Đường cấm\"; Biển 2: P.102 \"Cấm đi ngược chiều\"; Biển 3: P.301a \"Cấm đỗ xe\". Nên biển 2 là cấm đi ngược chiều.",
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
        "topic": 6,
        "required": 0,
        "a1": 112,
        "a2": 210,
        "a34": 229,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q330.png",
        "no": 330,
        "index": 330,
        "text": "Biển nào dưới đây các phương tiện không được phép đi vào?",
        "tip": "Biển 1: P.101 \"Đường cấm\";\nBiển 2: P.102 \"Cấm đi ngược chiều\" cấm đi vào theo chiều đặt biển;\nBiển 3: P.301a \"Cấm đỗ xe\".\nNên biển 1 và biển 2 là cấm các phương tiện không được phép đi vào.",
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
                "text": "Biển 1 và 2.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 113,
        "a2": 211,
        "a34": 230,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q331.png",
        "no": 331,
        "index": 331,
        "text": "Gặp biển nào người lái xe không được đỗ xe vào ngày chẵn?",
        "tip": "Biển 1: P.301a \"Cấm đỗ xe\" bất kỳ ngày nào; Biển 2: P301b \"Cấm đỗ xe\" vào ngày lẻ; Biển 3: P301c \"Cấm đỗ xe\" vào ngày chẵn. Nên biển 1 và biển 3 là cấm đỗ xe ngày chẵn.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và 3.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 2 và 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 212,
        "a34": 231,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q332.png",
        "no": 332,
        "index": 332,
        "text": "Gặp biển nào người lái xe không được đỗ xe vào ngày lẻ?",
        "tip": "Biển 1: P.301a \"Cấm đỗ xe\" bất kỳ ngày nào; Biển 2: P301b \"Cấm đỗ xe\" vào ngày lẻ; Biển 3: P301c \"Cấm đỗ xe\" vào ngày chẵn. Nên biển 1 và biển 2 là cấm đỗ xe ngày lẻ.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và 2.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 213,
        "a34": 232,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q333.png",
        "no": 333,
        "index": 333,
        "text": "Khi gặp biển nào xe ưu tiên theo luật định vẫn phải dừng lại?",
        "tip": "Biển 1: P.101 \"Đường cấm\" không cấm xe ưu tiên;\nBiển 2: R.122 \"Dừng lại\" áp dụng với cả xe ưu tiên;\nBiển 3: P.102 \"Cấm đi ngược chiều\" không áp dụng với xe ưu tiên;\nNên Biển 2 là đáp án đúng, áp dụng với cả xe ưu tiên.",
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
        "topic": 6,
        "required": 0,
        "a1": 114,
        "a2": 214,
        "a34": 233,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q334.png",
        "no": 334,
        "index": 334,
        "text": "Biển nào cấm tất cả các loại xe cơ giới và thô sơ đi lại trên đường, trừ xe ưu tiên theo luật định (nếu đường vẫn cho xe chạy được)?",
        "tip": "Biển 1: P.101 \"Đường cấm\" không cấm xe ưu tiên;\nBiển 2: R.122 \"Dừng lại\" áp dụng với cả xe ưu tiên;\nNên Biển 1 là đáp án đúng.",
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
        "topic": 6,
        "required": 0,
        "a1": 115,
        "a2": 215,
        "a34": 234,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q335.png",
        "no": 335,
        "index": 335,
        "text": "Biển nào là biển \"Cấm xe chở hàng nguy hiểm\"?",
        "tip": "Biển 1: P.106a \"Cấm xe tải\"; Biển 2: P.106b \"Cấm xe tải có khối lượng chuyên chở lớn hơn 2.5 tấn\"; P.106c: \"Cấm xe chở hàng nguy hiểm\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 216,
        "a34": 235,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q336.png",
        "no": 336,
        "index": 336,
        "text": "Gặp biển nào xe xích lô được phép đi vào?",
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
                "text": "Biển 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Biển 1 và 2.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 116,
        "a2": 217,
        "a34": 236,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q337.png",
        "no": 337,
        "index": 337,
        "text": "Gặp biển nào xe lam, xe xích lô máy được phép đi vào?",
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
                "text": "Biển 3.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 117,
        "a2": 218,
        "a34": 237,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q338.png",
        "no": 338,
        "index": 338,
        "text": "Biển báo này có ý nghĩa gì?",
        "tip": "",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 219,
        "a34": 238,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q339.png",
        "no": 339,
        "index": 339,
        "text": "Biển báo này có ý nghĩa như thế nào?",
        "tip": "",
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
        "topic": 6,
        "required": 0,
        "a1": 118,
        "a2": 220,
        "a34": 239,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q340.png",
        "no": 340,
        "index": 340,
        "text": "Khi gặp các biển này xe ưu tiên theo luật định (có tải trọng hay chiều cao toàn bộ vượt quá chỉ số ghi trên biển) có được phép đi qua hay không?",
        "tip": "",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 221,
        "a34": 240,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q341.png",
        "no": 341,
        "index": 341,
        "text": "Biển nào hạn chế chiều cao của xe và hàng?",
        "tip": "",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 222,
        "a34": 241,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q342.png",
        "no": 342,
        "index": 342,
        "text": "Biển số 2 có ý nghĩa như thế nào?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Cho phép ô tô có tải trọng trục lớn hơn 7 tấn đi qua.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Cho phép ô tô có tải trọng trên trục xe từ 7 tấn trở xuống đi qua.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 223,
        "a34": 242,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q343.png",
        "no": 343,
        "index": 343,
        "text": "Biển 3 có ý nghĩa như thế nào?",
        "tip": "",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 224,
        "a34": 243,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q344.png",
        "no": 344,
        "index": 344,
        "text": "Biển nào cấm máy kéo kéo theo rơ moóc?",
        "tip": "Biển 1: P.108 \"Cấm ô tô kéo moóc\"; Biển 2: P.109 \"Cấm máy kéo\". Đáp án đúng là cả 2 biển.",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 225,
        "a34": 244,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q345.png",
        "no": 345,
        "index": 345,
        "text": "Khi gặp biển 1, xe ô tô tải có được đi vào không?",
        "tip": "Biển 1: P.108 \"Cấm ô tô kéo moóc\" không áp dụng với xe ô tô tải (không kéo rơ moóc).",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 226,
        "a34": 245,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q346.png",
        "no": 346,
        "index": 346,
        "text": "Biển nào không có hiệu lực đối với ô tô tải không kéo moóc?",
        "tip": "Biển 1: P.108 \"Cấm ô tô kéo moóc\" không áp dụng với ô tô tải không kéo rơ moóc;\nBiển 2: P.109 \"Cấm máy kéo\" không áp dụng với xe ô tô tải.\nBiển 3: P.103a \"Cấm ô tô\" thì cấm ô tô tải.\nDo đó đáp án đúng là biển 1 và 2.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và 2.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2 và 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 1 và 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 227,
        "a34": 246,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q347.png",
        "no": 347,
        "index": 347,
        "text": "Biển nào cấm máy kéo?",
        "tip": "Biển 1: P.108 \"Cấm ô tô kéo moóc\"; Biển 2: P.109 \"Cấm máy kéo\"; Biển 3: P.106a \"Cấm ô tô tải\" thì cấm máy kéo. Nên đáp án đúng là Biển 2 và Biển 3.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và 2.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 228,
        "a34": 247,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q348.png",
        "no": 348,
        "index": 348,
        "text": "Khi gặp biển này, xe mô tô ba bánh có được phép rẽ trái hoặc rẽ phải hay không?",
        "tip": "",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 229,
        "a34": 248,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q349.png",
        "no": 349,
        "index": 349,
        "text": "Biển này có hiệu lực đối với xe mô tô hai, ba bánh không?",
        "tip": "",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 230,
        "a34": 249,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q350.png",
        "no": 350,
        "index": 350,
        "text": "Biển này có ý nghĩa gì?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Cấm xe cơ giới (trừ xe ưu tiên theo luật định) đi thẳng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Cấm xe ô tô và mô tô (trừ xe ưu tiên theo luật định) đi về bên trái và bên phải.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Hướng trái và phải không cấm xe cơ giới.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 231,
        "a34": 250,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q351.png",
        "no": 351,
        "index": 351,
        "text": "Biển phụ đặt dưới biển cấm bóp còi có ý nghĩa gì?",
        "tip": "Biển phụ là biển S.501 \"Phạm vi tác dụng của biển\" xác định chiều dài áp dụng biển chính từ nơi đặt biển.",
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
                "text": "Báo cấm dùng còi có độ vang xa 500 m.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 232,
        "a34": 251,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q352.png",
        "no": 352,
        "index": 352,
        "text": "Chiều dài đoạn đường 500 m từ nơi đặt biển này, người lái xe có được phép bấm còi không?",
        "tip": "Biển phụ là biển S.501 \"Phạm vi tác dụng của biển\" xác định chiều dài áp dụng biển chính từ nơi đặt biển.",
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
        "topic": 6,
        "required": 0,
        "a1": 119,
        "a2": 233,
        "a34": 252,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q353.png",
        "no": 353,
        "index": 353,
        "text": "Biển nào xe mô tô hai bánh được đi vào?",
        "tip": "Biển chính là P.101 \"Đường cấm\", có biển phụ thì áp dụng cấm theo biển phụ. Nên Biển 1 và Biển 3 không áp dụng với xe mô tô là câu trả lời đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và 2.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và 3.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 2 và 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 120,
        "a2": 234,
        "a34": 253,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q354.png",
        "no": 354,
        "index": 354,
        "text": "Biển nào xe mô tô hai bánh không được đi vào?",
        "tip": "Biển chính là P.101 \"Đường cấm\", có biển phụ thì áp dụng kèm theo biển phụ. Nên Biển 2 áp dụng với xe mô tô là câu trả lời đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 121,
        "a2": 235,
        "a34": 254,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q355.png",
        "no": 355,
        "index": 355,
        "text": "Ba biển này có hiệu lực như thế nào?",
        "tip": "Biển chính là P.101 \"Đường cấm\", có biển phụ thì áp dụng cấm theo biển phụ.",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 236,
        "a34": 255,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q356.png",
        "no": 356,
        "index": 356,
        "text": "Biển nào báo hiệu chiều dài đoạn đường phải giữ cự ly tối thiểu giữa hai xe?",
        "tip": "Biển phụ 1: S.501 \"Phạm vi tác dụng của biển\";\nBiển phụ 2: S.502 \"Khoảng cách đến đối tượng báo hiệu\".\nNên Biển phụ 1 là đáp án đúng.",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 237,
        "a34": 256,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q357.png",
        "no": 357,
        "index": 357,
        "text": "Biển nào báo hiệu khoảng cách thực tế từ nơi đặt biển đến nơi cần cự ly tối thiểu giữa hai xe?",
        "tip": "Biển phụ 1: S.501 \"Phạm vi tác dụng của biển\";\nBiển phụ 2: S.502 \"Khoảng cách đến đối tượng báo hiệu\".\nNên Biển phụ 2 là đáp án đúng.",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 238,
        "a34": 257,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q358.png",
        "no": 358,
        "index": 358,
        "text": "Biển này có ý nghĩa gì?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Cấm dừng xe về hướng bên trái.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Cấm đỗ xe và cấm dừng xe theo hướng bên phải.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Được phép đỗ xe và dừng xe theo hướng bên phải.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 239,
        "a34": 258,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q359.png",
        "no": 359,
        "index": 359,
        "text": "Theo hướng bên phải có được phép đỗ xe, dừng xe không?",
        "tip": "",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 240,
        "a34": 259,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q360.png",
        "no": 360,
        "index": 360,
        "text": "Gặp biển này, xe ô tô sơ mi rơ moóc có chiều dài toàn bộ kể cả xe, moóc và hàng lớn hơn trị số ghi trên biển có được phép đi vào không?",
        "tip": "",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 241,
        "a34": 260,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q361.png",
        "no": 361,
        "index": 361,
        "text": "Xe ô tô chở hàng vượt quá phía trước và sau thùng xe, mỗi phía quá 10% chiều dài toàn bộ thân xe, tổng chiều dài xe (cả hàng) từ trước đến sau nhỏ hơn trị số ghi trên biển thì có được phép đi vào không?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Không được phép",
                "correct": true
            },
            {
                "id": 2,
                "text": "Được phép",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 242,
        "a34": 261,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q362.png",
        "no": 362,
        "index": 362,
        "text": "Biển này có ý nghĩa gì?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Cấm ô tô buýt.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Cấm ô tô chở khách.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cấm ô tô con.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 243,
        "a34": 262,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q363.png",
        "no": 363,
        "index": 363,
        "text": "Biển này có ý nghĩa gì?",
        "tip": "",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 244,
        "a34": 263,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q364.png",
        "no": 364,
        "index": 364,
        "text": "Biển nào là biển \"Tốc độ tối đa cho phép về ban đêm\"?",
        "tip": "",
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
                "text": "Cả 2 biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 245,
        "a34": 264,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q365.png",
        "no": 365,
        "index": 365,
        "text": "Biển báo nào báo hiệu bắt đầu đoạn đường vào phạm vi khu dân cư, các phương tiện tham gia giao thông phải tuân theo các quy định đi đường được áp dụng ở khu đông dân cư?",
        "tip": "",
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
        "topic": 6,
        "required": 0,
        "a1": 122,
        "a2": 246,
        "a34": 265,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q366.png",
        "no": 366,
        "index": 366,
        "text": "Biển nào báo hiệu hạn chế tốc độ của phương tiện không vượt quá trị số ghi trên biển?",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 247,
        "a34": 266,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q367.png",
        "no": 367,
        "index": 367,
        "text": "Trong các biển báo dưới đây biển nào báo hiệu \"Hết đường cao tốc\"?",
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
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 248,
        "a34": 267,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q368.png",
        "no": 368,
        "index": 368,
        "text": "Số 50 trên biển báo dưới đây có ý nghĩa gì?",
        "tip": "Biển số P.127 \"Tốc độ tối đa cho phép\"",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 249,
        "a34": 268,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q369.png",
        "no": 369,
        "index": 369,
        "text": "Trong các biển báo dưới đây biển nào chỉ dẫn bắt đầu đường cao tốc.",
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
            },
            {
                "id": 3,
                "text": "Cả biển 1 và biển 2.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 250,
        "a34": 269,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q370.png",
        "no": 370,
        "index": 370,
        "text": "Biển báo này có ý nghĩa gì?",
        "tip": "Biển số R.306 \"Tốc độ tối thiểu cho phép\"",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 251,
        "a34": 270,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q371.png",
        "no": 371,
        "index": 371,
        "text": "Gặp biển nào người lái xe phải nhường đường cho người đi bộ?",
        "tip": "Biển 1: W.224 \"Đường người đi bộ cắt ngang\"; Biển 2: P.112 \"Cấm người đi bộ\"; Biển 3: R.305 \"Đường dành cho người đi bộ\".\nBiển 1 báo ưu tiên cho người đi bộ nên phải nhường đường.",
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
                "text": "Biển 1 và 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 123,
        "a2": 252,
        "a34": 271,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q372.png",
        "no": 372,
        "index": 372,
        "text": "Biển nào chỉ đường dành cho người đi bộ, các loại xe không được đi vào khi gặp biển này?",
        "tip": "Biển 1: W.224 \"Đường người đi bộ cắt ngang\"; Biển 2: P.112 \"Cấm người đi bộ\"; Biển 3: R.305 \"Đường dành cho người đi bộ\".\nBiển 3 báo đường dành cho người đi bộ nên phương tiện khác không được đi vào.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và 3",
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
        "topic": 6,
        "required": 0,
        "a1": 124,
        "a2": 253,
        "a34": 272,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q373.png",
        "no": 373,
        "index": 373,
        "text": "Biển nào báo hiệu \"Đường dành cho xe thô sơ\"?",
        "tip": "",
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
        "topic": 6,
        "required": 0,
        "a1": 125,
        "a2": 254,
        "a34": 273,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q374.png",
        "no": 374,
        "index": 374,
        "text": "Biển nào báo hiệu sắp đến chỗ giao nhau nguy hiểm?",
        "tip": "Biển 1: W.210 \"Giao nhau với đường sắt có rào chắn\"; Biển 2: W.208 \"Giao nhau với đường ưu tiên\"; Biển 3: W.209 \"Giao nhau có tín hiệu đèn\".",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 126,
        "a2": 255,
        "a34": 274,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q375.png",
        "no": 375,
        "index": 375,
        "text": "Biển nào báo hiệu \"Giao nhau với đường sắt có rào chắn\"?",
        "tip": "Biển 1: W.210 \"Giao nhau với đường sắt có rào chắn\"; Biển 2: W.208 \"Giao nhau với đường ưu tiên\"; Biển 3: W.209 \"Giao nhau có tín hiệu đèn\".",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 2 và 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 127,
        "a2": 256,
        "a34": 275,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q376.png",
        "no": 376,
        "index": 376,
        "text": "Biển nào báo hiệu \"Giao nhau có tín hiệu đèn\"?",
        "tip": "Biển 1: W.210 \"Giao nhau với đường sắt có rào chắn\"; Biển 2: W.208 \"Giao nhau với đường ưu tiên\"; Biển 3: W.209 \"Giao nhau có tín hiệu đèn\".",
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
        "topic": 6,
        "required": 0,
        "a1": 128,
        "a2": 257,
        "a34": 276,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q377.png",
        "no": 377,
        "index": 377,
        "text": "Biển nào báo hiệu nguy hiểm giao nhau với đường sắt?",
        "tip": "Biển 1: W.210 \"Giao nhau với đường sắt có rào chắn\"; Biển 2: W.234 \"Giao nhau với đường hai chiều\"; Biển 3: W.242a \"Nơi đường sắt giao vuông góc với đường bộ\".",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và 2.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và 3.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 2 và 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 129,
        "a2": 258,
        "a34": 277,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q378.png",
        "no": 378,
        "index": 378,
        "text": "Biển nào báo hiệu Đường sắt giao nhau với đường bộ không có rào chắn?",
        "tip": "Biển 1: W.210 \"Giao nhau với đường sắt có rào chắn\"; Biển 2: W.211a \"Giao nhau với đường sắt không có rào chắn\"; Biển 3: W.242a \"Nơi đường sắt giao vuông góc với đường bộ\" bổ sung cho biển W.211a. Nên cả 2 biển 2 và 3 đều đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và 2.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 130,
        "a2": 259,
        "a34": 278,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q379.png",
        "no": 379,
        "index": 379,
        "text": "Biển nào báo hiệu sắp đến chỗ giao nhau giữa đường bộ và đường sắt?",
        "tip": "Biển 1: Biển 211a Giao nhau với đường sắt không có rào chắn.\nBiển 2: Biển 208 Giao nhau với đường ưu tiên.\nBiển 3: Biển 211b Giao nhau với tàu điện.",
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
                "text": "Biển 1 và 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 131,
        "a2": 260,
        "a34": 279,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q380.png",
        "no": 380,
        "index": 380,
        "text": "Biển nào báo hiệu \"Cửa chui\"?",
        "tip": "Biển 1: W.237 \"Cầu vòng\"; Biển 2: W.218 \"Cửa chui\"; Biển 3: W.240 \"Đường hầm\". Đáp án đúng là đáp án 2.",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 261,
        "a34": 280,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q381.png",
        "no": 381,
        "index": 381,
        "text": "Hai biển này có ý nghĩa gì?",
        "tip": "Hai biển này là 242a và 242b \"Nơi đường sắt giao nhau vuông góc với đường bộ\" bổ sung cho biển 211 \"Giao nhau với đường sắt không có rào chắn\". Do đó câu trả lời 1 đúng.",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 262,
        "a34": 281,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q382.png",
        "no": 382,
        "index": 382,
        "text": "Biển nào báo hiệu \"Nơi đường sắt giao vuông góc với đường bộ\"?",
        "tip": "Biển 1 và Biển 2 là 242a và 242b \"Nơi đường sắt giao nhau vuông góc với đường bộ\" bổ sung cho biển 211 \"Giao nhau với đường sắt không có rào chắn\".\n Biển 3 là 243a \"Nơi giao nhau không vuông góc với đường bộ\".",
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
                "text": "Biển 1 và 2.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 263,
        "a34": 282,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q383.png",
        "no": 383,
        "index": 383,
        "text": "Các biển này có ý nghĩa gì?",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 264,
        "a34": 283,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q384.png",
        "no": 384,
        "index": 384,
        "text": "Biển nào báo hiệu \"Hết đoạn đường ưu tiên\"?",
        "tip": "Biển 1: W.207a \"Giao nhau với đường không ưu tiên\";\nBiển 2: W.208 \"Giao nhau với đường ưu tiên\";\nBiển 3: I.402 \"Hết đường ưu tiên\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 265,
        "a34": 284,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q385.png",
        "no": 385,
        "index": 385,
        "text": "Biển nào báo hiệu, chỉ dẫn xe đi trên đường này được quyền ưu tiên qua nơi giao nhau?",
        "tip": "Biển 1: W.207a \"Giao nhau với đường không ưu tiên\";\nBiển 2: W.208 \"Giao nhau với đường ưu tiên\";\nBiển 3: I.401 \"Bắt đầu đường ưu tiên\". Nên Biển 1 và Biển 3 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và 2.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và 3.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 2 và 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 132,
        "a2": 266,
        "a34": 285,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q386.png",
        "no": 386,
        "index": 386,
        "text": "Biển nào báo hiệu \"Giao nhau với đường không ưu tiên\"?",
        "tip": "Biển 1: W.207a \"Giao nhau với đường không ưu tiên\";\nBiển 2: W.208 \"Giao nhau với đường ưu tiên\";\nBiển 3: I.401 \"Bắt đầu đường ưu tiên\".",
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
                "text": "Biển 2 và 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 133,
        "a2": 267,
        "a34": 286,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q387.png",
        "no": 387,
        "index": 387,
        "text": "Biển nào báo hiệu \"Giao nhau với đường ưu tiên\"?",
        "tip": "Biển 1: W.207a \"Giao nhau với đường không ưu tiên\";\nBiển 2: W.208 \"Giao nhau với đường ưu tiên\";\nBiển 3: I.401 \"Bắt đầu đường ưu tiên\".",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và 3.",
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
        "topic": 6,
        "required": 0,
        "a1": 134,
        "a2": 268,
        "a34": 287,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q388.png",
        "no": 388,
        "index": 388,
        "text": "Biển nào báo hiệu \"Đường bị thu hẹp\"?",
        "tip": "Biển 1: W.203a \"Đường bị hẹp cả hai bên\"; Biển 2: W203b \"Đường bị hẹp về phía trái\"; Biển 3: W.201b \"Chỗ ngoặt nguy hiểm vòng bên phải\". Nên đáp án đúng là Biển 1 và Biển 2.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và 2.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 1 và 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 135,
        "a2": 269,
        "a34": 288,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q389.png",
        "no": 389,
        "index": 389,
        "text": "Khi gặp biển nào, người lái xe phải giảm tốc độ, chú ý xe đi ngược chiều, xe đi ở phía đường bị hẹp phải nhường đường cho xe đi ngược chiều?",
        "tip": "Biển 1: W.236 \"Hết đường đôi\"; Biển 2: W203b \"Đường bị hẹp về phía trái\"; Biển 3: W203c \"Đường bị hẹp về phía phải\".\nCâu này hỏi về việc đường bị thu hẹp nên câu trả lời đúng là Biển 2 và Biển 3.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 136,
        "a2": 270,
        "a34": 289,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q390.png",
        "no": 390,
        "index": 390,
        "text": "Biển nào báo hiệu \"Giao nhau với đường ưu tiên\"?",
        "tip": "Biển 1: W.205a \"Đường giao nhau\" cùng cấp; Biển 2: W.207a \"Giao nhau với đường không ưu tiên\"; Biển 3: W.208 \"Giao nhau với đường ưu tiên\";",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 271,
        "a34": 290,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q391.png",
        "no": 391,
        "index": 391,
        "text": "Biển nào báo hiệu \"Đường giao nhau\" của các tuyến đường cùng cấp?",
        "tip": "Biển 1: W.205a \"Đường giao nhau\" cùng cấp; Biển 2: W.207a \"Giao nhau với đường không ưu tiên\"; Biển 3: W.208 \"Giao nhau với đường ưu tiên\";",
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
        "topic": 6,
        "required": 0,
        "a1": 137,
        "a2": 272,
        "a34": 291,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q392.png",
        "no": 392,
        "index": 392,
        "text": "Biển nào báo hiệu \"Giao nhau với đường không ưu tiên\"?",
        "tip": "Biển 1: W.205a \"Đường giao nhau\" cùng cấp; Biển 2: W.207a \"Giao nhau với đường không ưu tiên\"; Biển 3: W.208 \"Giao nhau với đường ưu tiên\";",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 273,
        "a34": 292,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q393.png",
        "no": 393,
        "index": 393,
        "text": "Biển nào báo hiệu \"Đường hai chiều\"?",
        "tip": "Biển 1: W.204 \"Đường hai chiều\";\nBiển 2: P.132 \"Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp\";\nBiển 3: I.406 \"Được ưu tiên qua đường hẹp\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 274,
        "a34": 293,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q394.png",
        "no": 394,
        "index": 394,
        "text": "Biển nào báo hiệu phải giảm tốc độ, nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp?",
        "tip": "Biển 1: W.204 \"Đường hai chiều\";\nBiển 2: P.132 \"Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp\";\nBiển 3: I.406 \"Được ưu tiên qua đường hẹp\".",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 275,
        "a34": 294,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q395.png",
        "no": 395,
        "index": 395,
        "text": "Biển nào chỉ dẫn \"Được ưu tiên qua đường hẹp\"?",
        "tip": "Biển 1: W.204 \"Đường hai chiều\";\nBiển 2: P.132 \"Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp\";\nBiển 3: I.406 \"Được ưu tiên qua đường hẹp\".",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Biển 2 và 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 276,
        "a34": 295,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q396.png",
        "no": 396,
        "index": 396,
        "text": "Biển nào báo hiệu \"Đường đôi\"?",
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
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 138,
        "a2": 277,
        "a34": 296,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q397.png",
        "no": 397,
        "index": 397,
        "text": "Biển nào báo hiệu \"Đường đôi\"?",
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
                "text": "Biển 3.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 139,
        "a2": 278,
        "a34": 297,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q398.png",
        "no": 398,
        "index": 398,
        "text": "Biển nào báo hiệu \"Kết thúc đường đôi\"?",
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
                "text": "Biển 3.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 279,
        "a34": 298,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q399.png",
        "no": 399,
        "index": 399,
        "text": "Biển nào báo hiệu \"Giao nhau với đường hai chiều\"?",
        "tip": "",
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
        "topic": 6,
        "required": 0,
        "a1": 140,
        "a2": 280,
        "a34": 299,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q400.png",
        "no": 400,
        "index": 400,
        "text": "Biển nào báo hiệu \"Đường hai chiều\"?",
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
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 141,
        "a2": 281,
        "a34": 300,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q401.png",
        "no": 401,
        "index": 401,
        "text": "Biển nào báo hiệu \"Giao nhau với đường hai chiều\"?",
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
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 142,
        "a2": 282,
        "a34": 301,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q402.png",
        "no": 402,
        "index": 402,
        "text": "Biển nào báo hiệu \"Chú ý chướng ngại vật\"?",
        "tip": "",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2 và 3.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 143,
        "a2": 283,
        "a34": 302,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q403.png",
        "no": 403,
        "index": 403,
        "text": "Biển nào chỉ dẫn cho người tham gia giao thông biết vị trí và khoảng cách có làn đường cứu nạn hay làn thoát xe khẩn cấp?",
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
            },
            {
                "id": 3,
                "text": "Cả hai biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 284,
        "a34": 303,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q404.png",
        "no": 404,
        "index": 404,
        "text": "Biển nào báo hiệu \"Đường hầm\"?",
        "tip": "",
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
                "text": "Biển 2 và 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 285,
        "a34": 304,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q405.png",
        "no": 405,
        "index": 405,
        "text": "Biển nào dưới đây là biển \"Cầu hẹp\"?",
        "tip": "Biển 1: W.213 \"Cầu tạm\"; Biển 2: W.212 \"Cầu hẹp\"; Biển 3: W.214 \"Cầu xoay - cầu cất\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 286,
        "a34": 305,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q406.png",
        "no": 406,
        "index": 406,
        "text": "Biển nào dưới đây là biển \"Cầu xoay - cầu cất\"?",
        "tip": "Biển 1: W.213 \"Cầu tạm\"; Biển 2: W.212 \"Cầu hẹp\"; Biển 3: W.214 \"Cầu xoay - cầu cất\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 287,
        "a34": 306,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q407.png",
        "no": 407,
        "index": 407,
        "text": "Biển nào dưới đây là biển \"Kè, vực sâu phía trước\"?",
        "tip": "Biển 1: W.215a \"Kè, vực sâu phía trước\";\nBiển 2: W.215b \"Kè, vực sâu bên đường phía bên phải\";\nBiển 3: W.215c \"Kè, vực sâu bên đường phía bên trái\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 288,
        "a34": 307,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q408.png",
        "no": 408,
        "index": 408,
        "text": "Biển nào sau đây là biển \"Kè, vực sâu bên đường phía bên trái\"?",
        "tip": "Biển 1: W.215a \"Kè, vực sâu phía trước\";\nBiển 2: W.215b \"Kè, vực sâu bên đường phía bên phải\";\nBiển 3: W.215c \"Kè, vực sâu bên đường phía bên trái\".",
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
                "text": "Biển 1 và Biển 2.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 289,
        "a34": 308,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q409.png",
        "no": 409,
        "index": 409,
        "text": "Biển nào sau đây là biển \"Kè, vực sâu bên đường phía bên phải\"?",
        "tip": "Biển 1: W.215a \"Kè, vực sâu phía trước\";\nBiển 2: W.215b \"Kè, vực sâu bên đường phía bên phải\";\nBiển 3: W.215c \"Kè, vực sâu bên đường phía bên trái\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 290,
        "a34": 309,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q410.png",
        "no": 410,
        "index": 410,
        "text": "Biển nào sau đây là biển \"Đường trơn\"?",
        "tip": "Biển 1: W201c \"Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái\"; Biển 2: W.222a \"Đường trơn\"; Biển 3: W217 \"Bến phà\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 291,
        "a34": 310,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q411.png",
        "no": 411,
        "index": 411,
        "text": "Biển nào sau đây là biển \"Lề đường nguy hiểm\"?",
        "tip": "Biển 1: W.215b \"Kè, vực sâu bên đường phía bên phải\"; Biển 2: W.222b \"Lề đường nguy hiểm\"; Biển 3: W201c \"Chỗ ngoặt nguy hiểm có nguy cơ lật xe\".",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2",
                "correct": true
            },
            {
                "id": 3,
                "text": "Biển 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 292,
        "a34": 311,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q412.png",
        "no": 412,
        "index": 412,
        "text": "Biển nào sau đây báo trước gần tới đoạn đường đang tiến hành thi công?",
        "tip": "Biển 1: W.227 \"Công trường\"; Biển 2: W.228b \"Đá lở\"; Biển 3: W.228c \"Sỏi đá bắn lên\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 293,
        "a34": 312,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q413.png",
        "no": 413,
        "index": 413,
        "text": "Biển nào dưới đây cảnh báo nguy hiểm đoạn đường thường xảy ra tai nạn?",
        "tip": "Biển 1: W.241 \"Ùn tắc giao thông\"; Biển 2: W.244 \"Đoạn đường hay xảy ra tai nạn\"; Biển 3: W.201c \"Chỗ ngoặt nguy hiểm có nguy cơ lật xe\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 294,
        "a34": 313,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q414.png",
        "no": 414,
        "index": 414,
        "text": "Biển nào báo hiệu đoạn đường hay xảy ra ùn tắc giao thông?",
        "tip": "Biển 1: W.240 \"Đường hầm\"; Biển 2: W.241 \"Ùn tắc giao thông\"; Biển 3: W.244 \"Đoạn đường hay xảy ra tai nạn\"",
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
                "text": "Cả 3 biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 295,
        "a34": 314,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q415.png",
        "no": 415,
        "index": 415,
        "text": "Gặp biển nào người tham gia giao thông phải đi chậm và thận trọng đề phòng khả năng xuất hiện và di chuyển bất ngờ của trẻ em trên mặt đường?",
        "tip": "Biển 1: W.224 \"Đường người đi bộ cắt ngang\"; Biển 2: W.225 \"Trẻ em\".",
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
        "topic": 6,
        "required": 0,
        "a1": 144,
        "a2": 296,
        "a34": 315,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q416.png",
        "no": 416,
        "index": 416,
        "text": "Biển nào chỉ dẫn nơi bắt đầu đoạn đường dành cho người đi bộ?",
        "tip": "Biển 1: W.224 \"Đường người đi bộ cắt ngang\"; Biển 2: I.423c \"Điểm bắt đầu đường đi bộ\"; Biển 3: W.225 \"Trẻ em\".",
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
        "topic": 6,
        "required": 0,
        "a1": 145,
        "a2": 297,
        "a34": 316,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q417.png",
        "no": 417,
        "index": 417,
        "text": "Biển nào báo hiệu gần đến đoạn đường thường có trẻ em đi ngang qua?",
        "tip": "Biển 1: W.224 \"Đường người đi bộ cắt ngang\"; Biển 2: W.225 \"Trẻ em\"; Biển 3: W.226 \"Đường người đi xe đạp cắt ngang\".",
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
                "text": "Cả 3 biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 298,
        "a34": 317,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q418.png",
        "no": 418,
        "index": 418,
        "text": "Gặp biển nào dưới đây người tham gia giao thông cần phải điều chỉnh tốc độ xe chạy cho thích hợp, đề phòng gió thổi mạnh gây lật xe?",
        "tip": "Biển 1: W.232 \"Gió ngang\"; Biển 2: W201c \"Chỗ ngoặt nguy hiểm có nguy cơ lật xe\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 299,
        "a34": 318,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q419.png",
        "no": 419,
        "index": 419,
        "text": "Biển nào sau đây là biển \"Dốc xuống nguy hiểm\"?",
        "tip": "Biển 1: W.219 \"Dốc xuống nguy hiểm\"; Biển 2: W.220 \"Dốc lên nguy hiểm\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 300,
        "a34": 319,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q420.png",
        "no": 420,
        "index": 420,
        "text": "Biển nào sau đây là biển \"Dốc lên nguy hiểm\"?",
        "tip": "Biển 1: W.219 \"Dốc xuống nguy hiểm\"; Biển 2: W.220 \"Dốc lên nguy hiểm\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 301,
        "a34": 320,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q421.png",
        "no": 421,
        "index": 421,
        "text": "Biển báo này có ý nghĩa gì?",
        "tip": "Biển W201c \"Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái\".",
        "answers": [
            {
                "id": 1,
                "text": "Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên trái khi đường cong vòng bên phải.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 302,
        "a34": 321,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q422.png",
        "no": 422,
        "index": 422,
        "text": "Biển báo này có ý nghĩa gì?",
        "tip": "Biển W.217 \"Bến phà\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 303,
        "a34": 322,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q423.png",
        "no": 423,
        "index": 423,
        "text": "Biển báo này có ý nghĩa gì?",
        "tip": "Biển W.221a \"Đường ổ gà, sống trâu\".",
        "answers": [
            {
                "id": 1,
                "text": "Báo hiệu đường có ổ gà, lồi lõm.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Báo hiệu đường có gờ giảm tốc phía trước.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 304,
        "a34": 323,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q424.png",
        "no": 424,
        "index": 424,
        "text": "Biển báo này có ý nghĩa gì?",
        "tip": "Biển W221b \"Đường có sóng mấp mô nhân tạo\".",
        "answers": [
            {
                "id": 1,
                "text": "Báo hiệu đường có ổ gà, lồi lõm.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Báo hiệu đường có gờ giảm tốc phía trước.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 146,
        "a2": 305,
        "a34": 324,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q425.png",
        "no": 425,
        "index": 425,
        "text": "Biển báo này có ý nghĩa gì?",
        "tip": "Biển W.228d \"Nền đường yếu\".",
        "answers": [
            {
                "id": 1,
                "text": "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sạt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi băng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 306,
        "a34": 325,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q426.png",
        "no": 426,
        "index": 426,
        "text": "Các biển báo này có ý nghĩa gì?",
        "tip": "Biển số W.228 (a, b) \"Đá lở\".",
        "answers": [
            {
                "id": 1,
                "text": "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sạt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 307,
        "a34": 326,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q427.png",
        "no": 427,
        "index": 427,
        "text": "Biển báo này có ý nghĩa gì?",
        "tip": "Biển số W.228c \"Sỏi đá bắn lên\".",
        "answers": [
            {
                "id": 1,
                "text": "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sạt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi băng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 308,
        "a34": 327,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q428.png",
        "no": 428,
        "index": 428,
        "text": "Gặp biển báo này người lái xe phải xử lý thế nào?",
        "tip": "Biển số W.230 \"Gia súc\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 309,
        "a34": 328,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q429.png",
        "no": 429,
        "index": 429,
        "text": "Biển báo này có ý nghĩa gì?",
        "tip": "Biển số W.239a \"Đường cáp điện ở phía trên\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 310,
        "a34": 329,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q430.png",
        "no": 430,
        "index": 430,
        "text": "Biển nào báo hiệu các phương tiện phải đi đúng làn đường quy định và tuân thủ tốc độ tối đa cho phép?",
        "tip": "Biển 1: P.127b \"Biển ghép tốc độ tối đa cho phép trên từng làn đường\";\nBiển 2: P.127c \"Biển ghép tốc độ tối đa cho phép theo phương tiện, trên từng làn đường\".\nBiển 2 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 311,
        "a34": 330,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q431.png",
        "no": 431,
        "index": 431,
        "text": "Biển nào báo hiệu các phương tiện phải tuân thủ tốc độ tối đa cho phép trên từng làn đường?",
        "tip": "Biển 1: P.127b \"Biển ghép tốc độ tối đa cho phép trên từng làn đường\";\nBiển 2: P.127c \"Biển ghép tốc độ tối đa cho phép theo phương tiện, trên từng làn đường\".\nNên cả 2 biển đều là đáp án đúng (Quy định tốc độ tối đa theo làn đường).",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 312,
        "a34": 331,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q432.png",
        "no": 432,
        "index": 432,
        "text": "Biển nào báo hiệu \"Đường dành cho xe ô tô\"?",
        "tip": "Biển 1: R.403a \"Đường dành cho xe ôtô\";\nBiển 2: R.404a \"Hết đoạn đường dành cho xe ôtô\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 313,
        "a34": 332,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q433.png",
        "no": 433,
        "index": 433,
        "text": "Biển nào báo hiệu \"Hết đường dành cho xe ô tô\"?",
        "tip": "Biển 1: R.403a \"Đường dành cho xe ôtô\";\nBiển 2: R.404a \"Hết đoạn đường dành cho xe ôtô\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 314,
        "a34": 333,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q434.png",
        "no": 434,
        "index": 434,
        "text": "Khi gặp biển nào thì các phương tiện không được đi vào, trừ ô tô và mô tô?",
        "tip": "Biển 1: R.403b \"Đường dành cho xe ôtô, xe máy\";\nBiển 2: R.404b \"Hết đoạn đường dành cho xe ôtô, xe máy\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 315,
        "a34": 334,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q435.png",
        "no": 435,
        "index": 435,
        "text": "Biển này có ý nghĩa gì?",
        "tip": "Biển số R.411 \"Hướng đi trên mỗi làn đường phải theo\".",
        "answers": [
            {
                "id": 1,
                "text": "Chỉ hướng đi phải theo.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển báo hiệu cho người lái xe biết số lượng làn đường trên mặt đường và hướng đi trên mỗi làn đường phai theo.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Chỉ hướng đường phải theo.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 316,
        "a34": 335,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q436.png",
        "no": 436,
        "index": 436,
        "text": "Biển nào (đặt trước ngã ba, ngã tư) cho phép xe được rẽ sang hướng khác?",
        "tip": "Biển 1: R.301a \"Hướng đi phải theo\" chỉ được đi thẳng đặt trước ngã ba, ngã tư;\nBiển 2: R.301h \"Hướng đi phải theo\" chỉ được rẽ trái hoặc rẽ phải đặt sau ngã ba, ngã tư;\nNên đáp án đúng là không có biển nào.",
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
                "text": "Không biển nào",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 147,
        "a2": 317,
        "a34": 336,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q437.png",
        "no": 437,
        "index": 437,
        "text": "Biển nào báo hiệu \"Hướng đi thẳng phải theo\"?",
        "tip": "Biển 1: R.301a \"Hướng đi phải theo\" chỉ được đi thẳng đặt trước ngã ba, ngã tư;\nBiển 2: I.407a \"Đường một chiều\" không liên quan hướng đi phải theo.\nNên Biển 1 là đáp án đúng.",
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
        "topic": 6,
        "required": 0,
        "a1": 148,
        "a2": 318,
        "a34": 337,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q438.png",
        "no": 438,
        "index": 438,
        "text": "Biển nào báo hiệu \"Đường một chiều\"?",
        "tip": "Biển 1: R.301a \"Hướng đi phải theo\" chỉ được đi thẳng đặt trước ngã ba, ngã tư;\nBiển 2: I.407a \"Đường một chiều\";\nNên Biển 2 là đáp án đúng.",
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
        "topic": 6,
        "required": 0,
        "a1": 149,
        "a2": 319,
        "a34": 338,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q439.png",
        "no": 439,
        "index": 439,
        "text": "Trong các biển dưới đây biển nào là biển \"Hết tốc độ tối đa cho phép\"?",
        "tip": "Biển 1: DP134 \"Hết hạn chế tốc độ tối đa\"; Biển 2: DP135 \"Hết mọi lệnh cấm\"; Biển 3: R307 \"Hết hạn chế tốc độ tối thiểu\". Nên Biển 1 là biển \"Hết hạn chế tốc độ tối đa\".\nChú ý câu này hỏi ý nghĩa của biển.",
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
                "text": "Biển 3",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 150,
        "a2": 320,
        "a34": 339,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q440.png",
        "no": 440,
        "index": 440,
        "text": "Hiệu lực của biển \"Tốc độ tối đa cho phép\" hết tác dụng khi gặp biển nào dưới đây?",
        "tip": "Biển 1: DP134 \"Hết hạn chế tốc độ tối đa\"; Biển 2: DP135 \"Hết mọi lệnh cấm\"; Biển 3: R307 \"Hết hạn chế tốc độ tối thiểu\". Nên Biển 1 và Biển 2 là đều hết hạn chế tốc độ tối đa.\nChú ý câu hỏi các biển hết hạn chế, không phải ý nghĩa của biển.",
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
                "text": "Biển 1 và 2.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 151,
        "a2": 321,
        "a34": 340,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q441.png",
        "no": 441,
        "index": 441,
        "text": "Trong các biển dưới đây biển nào là biển \"Hết tốc độ tối thiểu\"?",
        "tip": "Biển 1: DP134 \"Hết hạn chế tốc độ tối đa\"; Biển 2: DP135 \"Hết mọi lệnh cấm\"; Biển 3: R307 \"Hết hạn chế tốc độ tối thiểu\". Nên Biển 3 là biển \"Hết hạn chế tốc độ tối thiểu\".\nChú ý câu này hỏi ý nghĩa của biển.",
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
                "text": "Cả ba biển",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 152,
        "a2": 322,
        "a34": 341,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q442.png",
        "no": 442,
        "index": 442,
        "text": "Biển nào dưới đây báo hiệu hết cấm vượt?",
        "tip": "Biển 1: DP.134 \"Hết hạn chế tốc độ tối đa\"; Biển 2: DP.135 \"Hết tất cả các lệnh cấm\"; Biển 3: DP.133 \"Hết cấm vượt\";\nNên đáp án đúng phải là Biển 2 và Biển 3.",
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
                "text": "Biển 2 và 3.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 153,
        "a2": 323,
        "a34": 342,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q443.png",
        "no": 443,
        "index": 443,
        "text": "Trong các biển dưới đây biển nào là biển \"Hết mọi lệnh cấm\"?",
        "tip": "Biển 1: DP.134 \"Hết hạn chế tốc độ tối đa\"; Biển 2: DP.135 \"Hết tất cả các lệnh cấm\"; Biển 3: R.307 \"Hết hạn chế tốc độ tối thiểu\".",
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
                "text": "Cả ba biển",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 154,
        "a2": 324,
        "a34": 343,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q444.png",
        "no": 444,
        "index": 444,
        "text": "Biển nào cho phép được quay đầu xe đi theo hướng ngược lại khi đặt biển trước ngã ba, ngã tư?",
        "tip": "R.301 (a,b,c,d,e,f,g,h) \"Hướng đi phải theo\";\nBiển 1: R.301e được đặt ở trước nơi đường giao nhau, chỉ được rẽ trái ở phạm vi nơi đường giao nhau đằng sau mặt biển.\nBiển 2: R.301h đặt sau ngã ba, ngã tư, chỉ được phép rẽ trái, quay đầu hoặc rẽ phải ở khu vực ngã ba, ngã tư trước mặt biển.\nBiển 3: R.301g được đặt ở trước nơi đường giao nhau, chỉ được phép đi thẳng, rẽ trái hoặc quay đầu xe để đi theo hướng ngược lại.\nBiển 3 là đáp án đúng.",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 325,
        "a34": 344,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q445.png",
        "no": 445,
        "index": 445,
        "text": "Biển nào không cho phép rẽ phải?",
        "tip": "R.301 (a,b,c,d,e,f,g,h) \"Hướng đi phải theo\";\nBiển 1: R.301e được đặt ở trước nơi đường giao nhau, chỉ được rẽ trái ở phạm vi nơi đường giao nhau đằng sau mặt biển.\nBiển 2: R.301h đặt sau ngã ba, ngã tư, chỉ được phép rẽ trái, quay đầu hoặc rẽ phải ở khu vực ngã ba, ngã tư trước mặt biển.\nBiển 3: R.301f được đặt ở trước nơi đường giao nhau, chỉ được phép đi thẳng hay rẽ phải ở phạm vi nơi đường giao nhau đằng sau mặt biển.\nBiển 1 không cho phép rẽ phải là đáp án đúng.",
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
                "text": "Biển 1 và 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 326,
        "a34": 345,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q446.png",
        "no": 446,
        "index": 446,
        "text": "Khi đến chỗ giao nhau, gặp biển nào thì người lái xe không được cho xe đi thẳng, phải rẽ sang hướng khác?",
        "tip": "R.301 (a,b,c,d,e,f,g,h) \"Hướng đi phải theo\";\nBiển 1: R.301e được đặt ở trước nơi đường giao nhau, chỉ được rẽ trái ở phạm vi nơi đường giao nhau đằng sau mặt biển.\nBiển 2: R.301h đặt sau ngã ba, ngã tư, chỉ được phép rẽ trái, quay đầu hoặc rẽ phải ở khu vực ngã ba, ngã tư trước mặt biển.\nBiển 3: R.301f được đặt ở trước nơi đường giao nhau, chỉ được phép đi thẳng hay rẽ phải ở phạm vi nơi đường giao nhau đằng sau mặt biển.\nBiển 1 và Biển 2 là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và 2.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 1 và 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và 3.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 327,
        "a34": 346,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q447.png",
        "no": 447,
        "index": 447,
        "text": "Biển nào cho phép quay đầu xe?",
        "tip": "Biển 1: I.409 \"Chỗ quay xe\" và Biển 2: I.410 \"Khu vực quay xe\" nên cả 2 biển đều cho phép quay đầu xe.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 2",
                "correct": false
            },
            {
                "id": 3,
                "text": "Cả 2 biển",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 328,
        "a34": 347,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q448.png",
        "no": 448,
        "index": 448,
        "text": "Biển nào chỉ dẫn tên đường trên các tuyến đường đối ngoại?",
        "tip": "Biển 1: R.E,9a \"Cấm đỗ xe trong khu vực\";\nBiển 2: R.E,9b \"Cấm đỗ xe theo giờ trong khu vực\".\nBiển 3: I.449  \"Biển tên đường\".",
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
                "text": "Biển 1 và 2.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 329,
        "a34": 348,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q449.png",
        "no": 449,
        "index": 449,
        "text": "Biển 1 có ý nghĩa gì?",
        "tip": "Biển 1: R.E,10b \"Hết cấm đỗ xe theo giờ trong khu vực\";\nBiển 2: R.E,10a \"Hết cấm đỗ xe trong khu vực\";\nBiển 3: R.E,10c: \"Hết khu vực đỗ xe\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 330,
        "a34": 349,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q450.png",
        "no": 450,
        "index": 450,
        "text": "Biển 3 có ý nghĩa gì?",
        "tip": "Biển 1: R.E,9a \"Cấm đỗ xe trong khu vực\"; Biển 2: Biển R.E,10c \"Hết khu vực đỗ xe\"; Biển 3: Biển R.E,9d \"Hạn chế tốc độ tối đa trong khu vực\".",
        "answers": [
            {
                "id": 1,
                "text": "Biển chỉ dẫn khu vực cấm đỗ xe trên các tuyến đường đối ngoại",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 331,
        "a34": 350,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q451.png",
        "no": 451,
        "index": 451,
        "text": "Biển nào báo hiệu \"Đường phía trước có làn đường dành cho ô tô khách\"?",
        "tip": "Biển 1: R.412f \"Làn đường dành cho xe ôtô\";\nBiển 2: I.413a \"Đường phía trước có làn đường dành cho ô tô khách\";\nBiển 3 I.413c \"Rẽ ra đường có làn đường dành cho ô tô khách\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 332,
        "a34": 351,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q452.png",
        "no": 452,
        "index": 452,
        "text": "Biển nào báo hiệu \"Rẽ ra đường có làn đường dành cho ô tô khách\"?",
        "tip": "Biển 1: R.412f \"Làn đường dành cho xe ôtô\";\nBiển 2: I.413a \"Đường phía trước có làn đường dành cho ô tô khách\";\nBiển 3 I.413c \"Rẽ ra đường có làn đường dành cho ô tô khách\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 333,
        "a34": 352,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q453.png",
        "no": 453,
        "index": 453,
        "text": "Biển nào đặt trên đường chính trước khi đến nơi đường giao nhau để rẽ vào đường cụt?",
        "tip": "Biển số I.405(a,b,c) \"Đường cụt\". Biển 1 và 2: Biển số I.405 (a,b) để chỉ lối rẽ vào đường cụt; Biển 3: Biển số I.405c để chỉ dẫn phía trước là đường cụt.",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 334,
        "a34": 353,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q454.png",
        "no": 454,
        "index": 454,
        "text": "Biển nào chỉ dẫn cho người đi bộ sử dụng cầu vượt qua đường?",
        "tip": "Biển 1: I424a \"Cầu vượt qua đường cho người đi bộ\"; Biển 2: I424c \"Hầm chui qua đường cho người đi bộ\" nên đáp án đúng là biển 1.",
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
        "topic": 6,
        "required": 0,
        "a1": 155,
        "a2": 335,
        "a34": 354,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q455.png",
        "no": 455,
        "index": 455,
        "text": "Biển nào chỉ dẫn cho người đi bộ sử dụng hầm chui qua đường?",
        "tip": "Biển 1: I424b \"Cầu vượt qua đường cho người đi bộ\"; Biển 2: I424d \"Hầm chui qua đường cho người đi bộ\" nên đáp án đúng là biển 2.",
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
        "topic": 6,
        "required": 0,
        "a1": 156,
        "a2": 336,
        "a34": 355,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q456.png",
        "no": 456,
        "index": 456,
        "text": "Biển nào báo hiệu nơi đỗ xe cho người tàn tật",
        "tip": "Biển 1: R.304 \"Đường dành cho xe thô sơ\";\nBiển 2: I.446 \"Nơi đỗ xe dành cho người khuyết tật\";\nBiển 3: R.305 \"Đường dành cho người đi bộ\".",
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
        "topic": 6,
        "required": 0,
        "a1": 157,
        "a2": 337,
        "a34": 356,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q457.png",
        "no": 457,
        "index": 457,
        "text": "Gặp biển báo này, người lái xe phải đỗ xe như thế nào?",
        "tip": "Biển số 408a \"Nơi đỗ xe một phần trên hè phố\".",
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
                "text": "Đỗ ½ thân xe trở lên trên hè phố.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 338,
        "a34": 357,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q458.png",
        "no": 458,
        "index": 458,
        "text": "Gặp biển báo này, người tham gia giao thông phải xử lý như thế nào?",
        "tip": "Biển I.436 \"Trạm cảnh sát giao thông\". Các phương tiện phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này.",
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
        "topic": 6,
        "required": 0,
        "a1": 158,
        "a2": 339,
        "a34": 358,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q459.png",
        "no": 459,
        "index": 459,
        "text": "Gặp biển báo này người lái xe có bắt buộc phải chạy vòng theo đảo an toàn theo hướng mũi tên khi muốn chuyển hướng hay không?",
        "tip": "Biển số R.303 \"Nơi giao nhau chạy theo vòng xuyến\".",
        "answers": [
            {
                "id": 1,
                "text": "Bắt buộc",
                "correct": true
            },
            {
                "id": 2,
                "text": "Không bắt buộc.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 340,
        "a34": 359,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q460.png",
        "no": 460,
        "index": 460,
        "text": "Biển nào chỉ dẫn địa giới hành chính giữa các thành phố, tỉnh, huyện?",
        "tip": "Biển 1: I.414a \"Chỉ hướng đường\"; Biển 2: I.419a \"Chỉ dẫn địa giới\"; Biển 3: I.422 \"Di tích lịch sử\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 341,
        "a34": 360,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q461.png",
        "no": 461,
        "index": 461,
        "text": "Biển nào báo hiệu \"Cầu vượt liên thông\"?",
        "tip": "Biển 1: I.447d \"Cầu vượt liên thông\"; Biển 2: R.308b \"Tuyến đường cầu vượt cắt qua\"; Biển 3: I.447a \"Cầu vượt liên thông\";",
        "answers": [
            {
                "id": 1,
                "text": "Biển 2 và 3.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và 2.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 1 và 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cả ba biển.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 342,
        "a34": 361,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q462.png",
        "no": 462,
        "index": 462,
        "text": "Biển số 1 có ý nghĩa gì?",
        "tip": "Biển 1: I.447d \"Cầu vượt liên thông\"; Biển 2, Biển 3: R.308 (a,b) \"Tuyến đường cầu vượt cắt qua\".",
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
        "topic": 6,
        "required": 0,
        "a1": 159,
        "a2": 343,
        "a34": 362,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q463.png",
        "no": 463,
        "index": 463,
        "text": "Biển nào báo hiệu \"Tuyến đường cầu vượt cắt qua\"?",
        "tip": "Biển 1, Biển 2: R.308 (a,b) \"Tuyến đường cầu vượt cắt qua\"; Biển 3: W.237 \"Cầu vồng\".",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và 2.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Biển 1 và 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Biển 2 và 3.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 344,
        "a34": 363,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q464.png",
        "no": 464,
        "index": 464,
        "text": "Biển báo dưới đây có ý nghĩa gì?",
        "tip": "Biển số I.448 \"Làn đường cứu nạn hay làn thoát xe khẩn cấp\".",
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
                "text": "Báo hiệu nút giao gần nhất phía trước",
                "correct": false
            },
            {
                "id": 4,
                "text": "Báo hiệu trạm dừng nghỉ phía trước.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 345,
        "a34": 364,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q465.png",
        "no": 465,
        "index": 465,
        "text": "Tại đoạn đường có biển \"Làn đường dành riêng cho từng loại xe\", các phương tiện có được phép chuyển sang làn khác để đi theo hành trình mong muốn khi đến gần nơi đường bộ giao nhau hay không?",
        "tip": "Biển số R.412 (a,b,c,d,e,f,g,h) \"Làn đường dành riêng cho từng loại xe hoặc nhóm xe\": Khi đến gần nơi đường bộ giao nhau, xe được phép chuyển làn để đi theo hành trình mong muốn. Việc chuyển làn phải thực hiện theo đúng các quy định.",
        "answers": [
            {
                "id": 1,
                "text": "Được phép chuyển sang làn khác",
                "correct": true
            },
            {
                "id": 2,
                "text": "Không được phép chuyển sang làn khác, chỉ được đi trong làn quy định theo biển",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 346,
        "a34": 365,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q466.png",
        "no": 466,
        "index": 466,
        "text": "Tại đoạn đường có cắm biển dưới đây, xe tải và xe khách có được phép đi vào không?",
        "tip": "Biển số R.403a \"Đường dành cho ôtô\" nên xe tải và xe khách đi vào được.",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 347,
        "a34": 366,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q467.png",
        "no": 467,
        "index": 467,
        "text": "Tại đoạn đường có cắm biển dưới đây, xe tải và xe khách có được phép đi vào không?",
        "tip": "Biển số R.403d \"Đường dành cho ôtô con\" nên xe tải và xe khách KHÔNG được phép đi vào.",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 348,
        "a34": 367,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q468.png",
        "no": 468,
        "index": 468,
        "text": "Biển nào báo hiệu kết thúc đường cao tốc?",
        "tip": "Biển 1: I.402 \"Hết đoạn đường ưu tiên\"; Biển 2: IE.453b chỉ dẫn điểm kết thúc đường cao tốc; Biển 3: R.404a \"Hết đoạn đường dành cho xe ôtô\".",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 349,
        "a34": 368,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q469.png",
        "no": 469,
        "index": 469,
        "text": "Biển này có ý nghĩa gì?",
        "tip": "Biển IE.467b chỉ dẫn cho người điều kiển phương tiện giao thông biết trước sắp đến vị trí nhập làn xe.",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 350,
        "a34": 369,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q470.png",
        "no": 470,
        "index": 470,
        "text": "Biển này có ý nghĩa gì?",
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
                "text": "Tên và ký hiệu đường cao tốc, tốc độ tối đa và tối thiểu khi di chuyển trên cao tốc.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả ý 1 và ý 3.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 351,
        "a34": 370,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q471.png",
        "no": 471,
        "index": 471,
        "text": "Ý nghĩa các biểu tượng ghi trên biển chỉ dẫn là gì?",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 352,
        "a34": 371,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q472.png",
        "no": 472,
        "index": 472,
        "text": "Biển này có ý nghĩa gì?",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 353,
        "a34": 372,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q473.png",
        "no": 473,
        "index": 473,
        "text": "Khi di chuyển trên đường cao tốc, gặp biển nào thì người lái xe đi theo hướng bên trái để tránh chướng ngại vật?",
        "tip": "Biển 1: IE.468a chỉ dẫn đi theo hướng bên trái;\nBiển 2: IE.468b chỉ dẫn đi được cả hai hướng;\nBiển 3: IE.468c chỉ dẫn đi theo hướng bên phải.",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 354,
        "a34": 373,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q474.png",
        "no": 474,
        "index": 474,
        "text": "Khi di chuyển trên đường cao tốc, gặp biển nào thì người lái xe đi theo hướng bên phải để tránh chướng ngại vật?",
        "tip": "Biển 1: IE.468a chỉ dẫn đi theo hướng bên trái;\nBiển 2: IE.468b chỉ dẫn đi được cả hai hướng;\nBiển 3: IE.468c chỉ dẫn đi theo hướng bên phải.",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 355,
        "a34": 374,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q475.png",
        "no": 475,
        "index": 475,
        "text": "Khi di chuyển trên đường cao tốc, gặp biển nào thì người lái xe đi được cả hai hướng (bên trái hoặc bên phải) để tránh chướng ngại vật?",
        "tip": "Biển 1: IE.468a chỉ dẫn đi theo hướng bên trái;\nBiển 2: IE.468b chỉ dẫn đi được cả hai hướng;\nBiển 3: IE.468c chỉ dẫn đi theo hướng bên phải.",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 356,
        "a34": 375,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q476.png",
        "no": 476,
        "index": 476,
        "text": "Khi di chuyển trên đường cao tốc, gặp biển nào người lái xe phải chú ý đổi hướng đi khi sắp vào đường cong nguy hiểm?",
        "tip": "Biển 1 và Biển 3: Biển số IE.469 (tiêu phản quang) chỉ dẫn hướng rẽ để nhắc người điều khiển phương tiện chuẩn bị đổi hướng đi khi sắp vào đường cong nguy hiểm;\nBiển 2: IE.468b chỉ dẫn đi được cả hai hướng.",
        "answers": [
            {
                "id": 1,
                "text": "Biển 1 và 2.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Biển 1 và 3.",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 357,
        "a34": 376,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q477.png",
        "no": 477,
        "index": 477,
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
                "text": "Vạch 2 và 3.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Vạch 3.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Vạch 1 và 2.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 358,
        "a34": 377,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q478.png",
        "no": 478,
        "index": 478,
        "text": "Vạch kẻ đường nào dưới đây là vạch phân chia các làn xe cùng chiều?",
        "tip": "Vạch 1: Phân chia các làn xe cùng chiều, cho phép lần làn đè vạch;\nVạch 2: Phân chia các làn xe cùng chiều, không cho phép lấn làn, không cho phép đè vạch;\n Vạch 3: Phân chia hai chiều xe chạy ngược chiều, xe không được lấn làn, không được đè lên vạch.",
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
                "text": "Vạch 1 và 2.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 160,
        "a2": 359,
        "a34": 378,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q479.png",
        "no": 479,
        "index": 479,
        "text": "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường), xe không được lấn làn, không được đè lên vạch?",
        "tip": "Vạch 1: Phân chia các làn xe cùng chiều, cho phép lần làn đè vạch;\nVạch 2: Phân chia hai chiều xe chạy ngược chiều; xe không được lấn làn, không được đè lên vạch.\nVạch 3: Phân chia các làn xe cùng chiều, không cho phép lấn làn, không cho phép đè vạch;",
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
                "text": "Cả 3 vạch.",
                "correct": false
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 161,
        "a2": 360,
        "a34": 379,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q480.png",
        "no": 480,
        "index": 480,
        "text": "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường)?",
        "tip": "Vạch 1: Phân chia hai chiều xe chạy ngược chiều. Xe được phép cắt qua để sử dụng làn ngược chiều từ cả hai phía;\nVạch 2: Phân chia các làn xe cùng chiều, cho phép lần làn đè vạch;\nVạch 3: Phân chia hai chiều xe chạy ngược chiều; xe không được lấn làn, không được đè lên vạch.",
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
                "text": "Vạch 1 và 3.",
                "correct": true
            }
        ],
        "topic": 6,
        "required": 0,
        "a1": 162,
        "a2": 361,
        "a34": 380,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q481.png",
        "no": 481,
        "index": 481,
        "text": "Các vạch dưới đây có tác dụng gì?",
        "tip": "Vạch 1: Phân chia hai chiều xe chạy ngược chiều, cho phép lấn làn, đè vạch ở cả 2 chiều;\nVạch 2: Phân chia hai chiều xe chạy ngược chiều; xe không được lấn làn, không được đè lên vạch;\nVạch 3: Phân chia hai chiều xe chạy ngược chiều có 4 làn xe cơ giới trở lên; xe không được lấn làn, không được đè lên vạch.",
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
        "topic": 6,
        "required": 0,
        "a1": 163,
        "a2": 362,
        "a34": 381,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q482.png",
        "no": 482,
        "index": 482,
        "text": "Các vạch dưới đây có tác dụng gì?",
        "tip": "Vạch 1: Phân chia các làn xe cùng chiều, cho phép lần làn đè vạch;\nVạch 2: Phân chia các làn xe cùng chiều, không cho phép lấn làn, không cho phép đè vạch;",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 363,
        "a34": 382,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q483.png",
        "no": 483,
        "index": 483,
        "text": "Khi gặp vạch kẻ đường nào các xe được phép đè vạch?",
        "tip": "Vạch 1: Phân chia hai chiều xe chạy ngược chiều, cho phép lấn làn, đè vạch ở cả 2 chiều;\nVạch 2: Phân chia các làn xe cùng chiều, không cho phép lấn làn, không cho phép đè vạch;\nVạch 3: Phân chia các làn xe cùng chiều, cho phép lần làn đè vạch;",
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
        "topic": 6,
        "required": 0,
        "a1": 164,
        "a2": 364,
        "a34": 383,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q484.png",
        "no": 484,
        "index": 484,
        "text": "Vạch dưới đây có tác dụng gì?",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 365,
        "a34": 384,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q485.png",
        "no": 485,
        "index": 485,
        "text": "Vạch dưới đây có ý nghĩa gì?",
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
        "topic": 6,
        "required": 0,
        "a1": 0,
        "a2": 366,
        "a34": 385,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q486.png",
        "no": 486,
        "index": 486,
        "text": "Vạch dưới đây có ý nghĩa gì?",
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
        "topic": 6,
        "required": 0,
        "a1": 165,
        "a2": 367,
        "a34": 386,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q487.png",
        "no": 487,
        "index": 487,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.\n1. Xe tải: Đường ưu tiên và đi thẳng;\n2. Mô tô: Đường ưu tiên và rẽ trái;\n3. Xe khách: Đường không ưu tiên, đi thẳng.\n4. Xe con: Đường không ưu tiên, rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Xe tải, xe khách, xe con, mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe tải, mô tô, xe khách, xe con.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe khách, xe tải, xe con, mô tô.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Mô tô, xe khách, xe tải, xe con.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 166,
        "a2": 368,
        "a34": 387,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q488.png",
        "no": 488,
        "index": 488,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.\n1. Xe công an: Xe ưu tiên.\n2. Xe con: Đường ưu tiên.\n3. Xe tải: Đường không ưu tiên, đi thẳng.\n4. Xe khách: Đường không ưu tiên, rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Xe công an, xe con, xe tải, xe khách.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe công an, xe khách, xe con, xe tải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe công an, xe tải, xe khách, xe con.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Xe con, xe công an, xe tải, xe khách.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 388,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q489.png",
        "no": 489,
        "index": 489,
        "text": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.\n1. Xe công an: Xe ưu tiên; \n2. Xe tải: Đường ưu tiên;\n3. Xe khách: Đường không ưu tiên, bên phải trống;\n4. Xe con: Đường không ưu tiên, bên phải vướng xe khách nên phải nhường.",
        "answers": [
            {
                "id": 1,
                "text": "Xe tải, xe công an, xe khách, xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe công an, xe khách, xe con, xe tải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe công an, xe con, xe tải, xe khách.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Xe công an, xe tải, xe khách, xe con.",
                "correct": true
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 389,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q490.png",
        "no": 490,
        "index": 490,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.\n1. Xe mô tô: Bên phải trống;\n2. Xe con: Đi thẳng;\n3. Xe tải: Rẽ trái;",
        "answers": [
            {
                "id": 1,
                "text": "Xe tải, xe con, mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con, xe tải, mô tô.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Mô tô, xe con, xe tải.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Xe con, mô tô, xe tải.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 167,
        "a2": 369,
        "a34": 390,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q491.png",
        "no": 491,
        "index": 491,
        "text": "Xe nào phải nhường đường trong trường hợp này?",
        "tip": "Giao nhau cùng cấp có vòng xuyến: Chưa vào vòng xuyến thì ưu tiên xe bên phải; đã vào vòng xuyến ưu tiên xe từ bên trái tới.\nXe con nhường vì thấy xe tải từ bên trái tới đã nằm trong vòng xuyến.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 391,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
                "text": "Mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con.",
                "correct": true
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 168,
        "a2": 370,
        "a34": 392,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q493.png",
        "no": 493,
        "index": 493,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe vào ngã ba, ngã tư trước - Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái..\n1. Xe con (A): Đã vào ngã tư trước;\n2. Xe cứu thương: Xe ưu tiên;\n3. Xe con (B);",
        "answers": [
            {
                "id": 1,
                "text": "Xe con (A), xe cứu thương, xe con (B).",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe cứu thương, xe con (B), xe con (A).",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe con (B), xe con (A), xe cứu thương.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 393,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
                "text": "Xe cứu thương, xe cứu hỏa, xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe cứu hỏa, xe cứu thương, xe con.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe cứu thương, xe con, xe cứu hỏa.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 371,
        "a34": 394,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
                "text": "Mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe cứu thương.",
                "correct": true
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 169,
        "a2": 372,
        "a34": 395,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q496.png",
        "no": 496,
        "index": 496,
        "text": "Xe nào phải nhường đường đi cuối cùng qua nơi giao nhau này?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.\n1. Xe con: Đường ưu tiên;\n2. Xe tải: Đường không ưu tiên, rẽ phải;\n3. Xe khách: Đường không ưu tiên, rẽ trái (Đáp án đúng).",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 373,
        "a34": 396,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q497.png",
        "no": 497,
        "index": 497,
        "text": "Xe nào phải nhường đường là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.\nXe tải bên phải trống nên đi trước;\nĐáp án đúng là Xe con phải nhường đường: Bên phải vướng xe tải.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 374,
        "a34": 397,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
                "text": "Xe công an.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe chữa cháy.",
                "correct": true
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 375,
        "a34": 398,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
                "text": "Mô tô.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 170,
        "a2": 376,
        "a34": 399,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q500.png",
        "no": 500,
        "index": 500,
        "text": "Theo tín hiệu đèn, xe nào được quyền đi là đúng quy tắc giao thông?",
        "tip": "Xe con và xe tải đang ở trên làn đường có tín hiệu đèn xanh nên được phép đi.",
        "answers": [
            {
                "id": 1,
                "text": "Xe khách, mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con, xe tải.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe tải, mô tô.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 377,
        "a34": 400,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q501.png",
        "no": 501,
        "index": 501,
        "text": "Trong trường hợp này xe nào được quyền đi trước?",
        "tip": "Xe ưu tiên cùng cấp nên áp dụng thứ tự đường cùng cấp: Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\nXe quân sự được ưu tiên trước do bên phải trống.",
        "answers": [
            {
                "id": 1,
                "text": "Xe công an.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe quân sự.",
                "correct": true
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 378,
        "a34": 401,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 379,
        "a34": 402,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q503.png",
        "no": 503,
        "index": 503,
        "text": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        "tip": "1. Xe khách: Sai làn, Đi thẳng đèn đang đỏ;\n2. Xe tải: Sai làn: Đi trên làn đi thẳng trong khi thực hiện rẽ trái.\n3. Xe mô tô: Sai làn: Đi trên làn rẽ trái trong khi thực hiện rẽ phải,\nNên đáp án đúng là xe khách, xe tải và xe mô tô đều vi phạm quy tắc giao thông.",
        "answers": [
            {
                "id": 1,
                "text": "Xe khách, xe tải, mô tô.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe tải, xe con, mô tô.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe khách, xe con, mô tô.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 171,
        "a2": 380,
        "a34": 403,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q504.png",
        "no": 504,
        "index": 504,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Giao nhau cùng cấp có vòng xuyến: Chưa vào vòng xuyến thì ưu tiên xe bên phải; đã vào vòng xuyến ưu tiên xe từ bên trái tới.\nToàn bộ các xe chưa vào phòng xuyến nên ưu tiên xe bên phải.\nThứ tự sẽ là Mô tô, xe tải, xe khách, xe con.",
        "answers": [
            {
                "id": 1,
                "text": "Xe khách, xe tải, mô tô, xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con, xe khách, xe tải, mô tô.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Mô tô, xe tải, xe khách, xe con.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Mô tô, xe tải, xe con, xe khách.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 172,
        "a2": 381,
        "a34": 404,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 173,
        "a2": 382,
        "a34": 405,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q506.png",
        "no": 506,
        "index": 506,
        "text": "Xe nào được quyền đi trước?",
        "tip": "Thứ tự ưu tiên không vòng xuyến: Xe vào ngã ba, ngã tư trước - Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.\nĐáp án đúng là Xe con (B): Đường ưu tiên;",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 383,
        "a34": 406,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q507.png",
        "no": 507,
        "index": 507,
        "text": "Theo hướng mũi tên, những hướng nào xe gắn máy đi được?",
        "tip": "Bạn lưu ý câu hỏi này hỏi về hướng đi của xe GẮN MÁY. Hướng 1 và 3 chắc chắn là đi được rồi.\nVới hướng 2, biển báo cấm mô tô đi vào chỉ có tác dụng với xe MÔ TÔ nên xe gắn máy không có hiệu lực. Do đó vẫn đi vào bình thường.",
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
        "topic": 7,
        "required": 0,
        "a1": 174,
        "a2": 384,
        "a34": 407,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 175,
        "a2": 385,
        "a34": 408,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
                "text": "Chỉ mô tô.",
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
                "text": "Chỉ mô tô và xe tải.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 176,
        "a2": 386,
        "a34": 409,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q510.png",
        "no": 510,
        "index": 510,
        "text": "Xe tải kéo mô tô ba bánh như hình này có đúng quy tắc giao thông không?",
        "tip": "Xe tải kéo xe mô tô 3 bánh như trên hình là không đúng vì đi vào đường có biển P.108 \"Cấm ô tô kéo moóc\" kể cả xe máy kéo, xe ô tô khách kéo theo rơ moóc đi qua.",
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
        "topic": 7,
        "required": 0,
        "a1": 177,
        "a2": 387,
        "a34": 410,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 388,
        "a34": 411,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q512.png",
        "no": 512,
        "index": 512,
        "text": "Theo hướng mũi tên, những hướng nào ô tô không được phép đi?",
        "tip": "Biển P.123a \"Cấm rẽ trái\" không cấm quay đầu xe nên chỉ có hướng 3 là hướng ô tô không được phép đi.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 389,
        "a34": 412,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q513.png",
        "no": 513,
        "index": 513,
        "text": "Xe nào vượt đúng quy tắc giao thông?",
        "tip": "Biển số P.126 \"Cấm ô tô tải vượt\" nên không áp dụng với xe con và xe khách.",
        "answers": [
            {
                "id": 1,
                "text": "Cả 2 xe đều đúng.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 390,
        "a34": 413,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q514.png",
        "no": 514,
        "index": 514,
        "text": "Theo hướng mũi tên, gặp biển hướng đi phải theo đặt trước ngã tư, những hướng nào xe được phép đi?",
        "tip": "Biển R.301g được đặt ở trước nơi đường giao nhau, chỉ được phép đi thẳng, rẽ trái hoặc quay đầu xe để đi theo hướng ngược lại.\nĐáp án đúng là hướng 2 và hướng 3.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 391,
        "a34": 414,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 415,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q516.png",
        "no": 516,
        "index": 516,
        "text": "Xe nào phải nhường đường trong trường hợp này?",
        "tip": "Phía trước xe tải có biển báo được ưu tiên qua đường hẹp nên được đi trước.\nHoặc phía trước xe khách có biển báo nhường cho xe ngược chiều qua đường hẹp.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 416,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q517.png",
        "no": 517,
        "index": 517,
        "text": "Xe nào được quyền đi trước trong trường hợp này?",
        "tip": "Cả 2 xe đều gặp đèn xanh nên áp dụng quy tắc đường cùng cấp: Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\nNên đáp án đúng là xe mô tô rẽ phải được quyền đi trước. Xe con rẽ trái phải nhường đường.",
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
        "topic": 7,
        "required": 0,
        "a1": 178,
        "a2": 392,
        "a34": 417,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 418,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q519.png",
        "no": 519,
        "index": 519,
        "text": "Theo hướng mũi tên, những hướng nào ô tô con được phép đi?",
        "tip": "Biển số R.301d \"Chỉ được rẽ phải\" chỉ áp dụng với xe tải (biển phụ) nên không áp dụng với xe con.\nHướng 2 cấm xe con không được đi vào, còn hướng 1, 3 và 4 xe con đều được phép đi.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 419,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q520.png",
        "no": 520,
        "index": 520,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên đường cùng cấp: Xe ưu tiên - Đường ưu tiên - Bên phải trống - rẽ phải - đi thẳng - rẽ trái.\n1. Mô tô và xe đạp: Bên phải trống;\n2. Xe con (A): Đi thẳng;\n3. Xe con (B): Rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Xe con (A), mô tô, xe con (B), xe đạp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con (B), xe đạp, mô tô, xe con (A).",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe con (A), xe con (B), mô tô + xe đạp.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Mô tô + xe đạp, xe con (A), xe con (B).",
                "correct": true
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 179,
        "a2": 393,
        "a34": 420,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q521.png",
        "no": 521,
        "index": 521,
        "text": "Theo hướng mũi tên, những hướng nào xe tải được phép đi?",
        "tip": "Biển số R.301d \"Chỉ được rẽ phải\" áp dụng với xe tải (biển phụ) nên hướng 3, 4 rẽ trái bị cấm.\nHướng 2 có biển cấm xe tải đi vào.\nNên xe tải chỉ có thể chạy theo hướng 1 là đáp án đúng.",
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
                "text": "Hướng 1, 2 và 3",
                "correct": false
            },
            {
                "id": 4,
                "text": "Cả bốn hướng.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 421,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 422,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q523.png",
        "no": 523,
        "index": 523,
        "text": "Những hướng nào ô tô tải được phép đi?",
        "tip": "Hướng 2,3,4 bị cấm do có biển cấm xe ô tô đi vào.\nHướng 1 và 5 xe tải đi được bình thường.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 423,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q524.png",
        "no": 524,
        "index": 524,
        "text": "Những hướng nào ô tô tải được phép đi?",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 424,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q525.png",
        "no": 525,
        "index": 525,
        "text": "Xe nào được quyền đi trước trong trường hợp này?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\nXe mô tô rẽ trái từ đường ưu tiên vào đường ưu tiên (theo biển báo và biển phụ) nên được quyền đi trước.",
        "answers": [
            {
                "id": 1,
                "text": "Mô tô.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe con.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 180,
        "a2": 394,
        "a34": 425,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q526.png",
        "no": 526,
        "index": 526,
        "text": "Ô tô con đi theo chiều mũi tên có vi phạm quy tắc giao thông không?",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 395,
        "a34": 426,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
                "text": "Mô tô.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe con.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Xe con và mô tô.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 181,
        "a2": 396,
        "a34": 427,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q528.png",
        "no": 528,
        "index": 528,
        "text": "Các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Giơ tay thẳng đứng: Tất cả dừng, trừ xe đã ở trong ngã tư được phép đi;\nGiang ngang tay: Trái phải đi; Trước sau dừng;\nTay phải giơ trước: Sau, phải dừng, trước rẽ phải, trái đi các hướng, người đi bộ qua đường đi sau người điều khiển.",
        "answers": [
            {
                "id": 1,
                "text": "Các xe ở phía tay phải và tay trái của người điều khiển được phép đi thẳng.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Cho phép các xe ở mọi hướng được rẽ phải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Tất cả các xe phải dừng lại trước ngã tư, trừ những xe đã ở trong ngã tư được phép tiếp tục đi.",
                "correct": true
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 182,
        "a2": 397,
        "a34": 428,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q529.png",
        "no": 529,
        "index": 529,
        "text": "Theo hướng mũi tên, xe nào được phép đi?",
        "tip": "Giang ngang tay: Trái phải đi; Trước sau dừng.\nXe mô tô và xe tải được phép đi là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Mô tô, xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con, xe tải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Mô tô, xe tải.",
                "correct": true
            },
            {
                "id": 4,
                "text": "Cả ba xe.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 183,
        "a2": 398,
        "a34": 429,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 399,
        "a34": 430,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q531.png",
        "no": 531,
        "index": 531,
        "text": "Xe nào vượt đúng quy tắc giao thông?",
        "tip": "Theo hướng xe tải, vượt xe khách đè vạch liền nên vi phạm.\n Theo hướng xe con, xe con vượt xe tải đè vạch đứt nên không vi phạm quy tắc giao thông là đáp án đúng.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 400,
        "a34": 431,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q532.png",
        "no": 532,
        "index": 532,
        "text": "Đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        "tip": "Biển cấm xe ngược chiều không có tác dụng với xe chữa cháy (xe ưu tiên) nên không vi phạm.\nTrước mặt xe tải có biển cấm rẽ trái và quay đầu nên vi phạm là đáp án đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Xe chữa cháy.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 401,
        "a34": 432,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q533.png",
        "no": 533,
        "index": 533,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe tải: Rẽ phải; 2. Xe khách: Đi thẳng; 3. Xe con: Rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Xe khách, xe tải, xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con và xe tải, xe khách.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe tải, xe khách, xe con.",
                "correct": true
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 402,
        "a34": 433,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q534.png",
        "no": 534,
        "index": 534,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe khách và xe tải cùng rẽ phải nên cùng nhau đi trước. Hãy nhìn đáp án có chữ \"VÀ\".",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 403,
        "a34": 434,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q535.png",
        "no": 535,
        "index": 535,
        "text": "Những hướng nào ô tô tải được phép đi?",
        "tip": "Biển số P.102 \"Cấm đi ngược chiều\" ở hướng 4 nên hướng này không được phép đi.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 404,
        "a34": 435,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q536.png",
        "no": 536,
        "index": 536,
        "text": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe công an: Xe ưu tiên;\n2. Xe con: Đường ưu tiên, bên phải trống;\n3. Xe tải: Đường ưu tiên, bên phải vướng xe con nếu đi trước;\n4. Xe khách: Đường không ưu tiên.",
        "answers": [
            {
                "id": 1,
                "text": "Xe công an, xe con, xe tải, xe khách.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe con, xe khách và xe công an, xe tải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe công an, xe con, xe khách, xe tải.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Xe con, xe tải, xe khách, xe công an.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 405,
        "a34": 436,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q537.png",
        "no": 537,
        "index": 537,
        "text": "Những hướng nào ô tô tải được phép đi?",
        "tip": "Trước mặt xe tải là Biển số P.123a \"Cấm rẽ trái\" không cấm quay đầu (hướng 3).\nHướng 4 là Biển số P.109 \"Cấm máy kéo\" không cấm xe tải.\nNên các hướng 1, 3 và 4 là câu trả lời đúng.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 437,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
                "text": "Chỉ xe khách, mô tô.",
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
        "topic": 7,
        "required": 0,
        "a1": 184,
        "a2": 406,
        "a34": 438,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q539.png",
        "no": 539,
        "index": 539,
        "text": "Theo hướng mũi tên, những hướng nào xe mô tô được phép đi?",
        "tip": "Hướng 2 có Biển số P.104 \"Cấm mô tô\". Hướng 3 Biển số P.103a \"Cấm ô tô\" nhưng không cấm mô tô. Nên đáp án đúng là hướng 1 và hướng 3.",
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
                "text": "Hướng 1 và 3",
                "correct": true
            },
            {
                "id": 4,
                "text": "Hướng 2 và 3.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 185,
        "a2": 407,
        "a34": 439,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q540.png",
        "no": 540,
        "index": 540,
        "text": "Trong trường hợp này, thứ tự xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe quân sự: Xe ưu tiên cùng cấp xe công an nhưng đi thẳng;\n2. Xe công an: Xe ưu tiên; rẽ trái;\n3. Xe con và xe mô tô: Cùng đi thẳng.",
        "answers": [
            {
                "id": 1,
                "text": "Xe công an, xe quân sự, xe con + mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe quân sự, xe công an, xe con + mô tô.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe mô tô + xe con, xe quân sự, xe công an.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 186,
        "a2": 408,
        "a34": 440,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 441,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 409,
        "a34": 442,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
                "text": "Xe con (E), mô tô (C).",
                "correct": true
            },
            {
                "id": 2,
                "text": "Xe tải (A), mô tô (D).",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe khách (B), mô tô (C).",
                "correct": false
            },
            {
                "id": 4,
                "text": "Xe khách (B), mô tô (D).",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 187,
        "a2": 410,
        "a34": 443,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 411,
        "a34": 444,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q545.png",
        "no": 545,
        "index": 545,
        "text": "Người lái xe điều khiển xe chạy theo hướng nào là đúng quy tắc giao thông?",
        "tip": "Hướng 4: Biển số P.123b \"Cấm rẽ phải\"; Hướng 3: Biển số P.102 \"Cấm đi ngược chiều\";\nNên chỉ có thể đi theo hướng 1 và hướng 2 là câu trả lời đúng.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 412,
        "a34": 445,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 446,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 413,
        "a34": 447,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
                "text": "Xe con (B), mô tô (C).",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con (A), mô tô (C).",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe con (E), mô tô (D).",
                "correct": true
            },
            {
                "id": 4,
                "text": "Tất cả các loại xe trên.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 188,
        "a2": 414,
        "a34": 448,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q549.png",
        "no": 549,
        "index": 549,
        "text": "Xe nào đi trước là đúng quy tắc giao thông?",
        "tip": "Trước mặt xe của bạn có Biển số W.208 \"Giao nhau với đường ưu tiên\" nên phải ưu tiên các xe đang đi trên đường ưu tiên. Xe tải được ưu tiên trong trường hợp này.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 415,
        "a34": 449,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q550.png",
        "no": 550,
        "index": 550,
        "text": "Người lái xe có thể quay đầu xe như thế nào là đúng quy tắc giao thông?",
        "tip": "Trước mặt người lái xe có Biển số P.123a \"Cấm rẽ trái\" không cấm quay đầu. Tuy nhiên, hướng B quay đầu đè vạch liền nên vi phạm. Do đó, chỉ có hướng A quay đầu xe là câu trả lời đúng.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 416,
        "a34": 450,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q551.png",
        "no": 551,
        "index": 551,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\nXe bạn đang trên đường ưu tiên nên được đi trước.\nXe con rẽ phải không giao nhau với xe bạn nên được đi đồng thời với xe bạn.\nXe tải rẽ trái từ đường không ưu tiên phải nhường đi sau cùng.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 417,
        "a34": 451,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 452,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
                "text": "Xe khách, mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe tải, mô tô.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Xe con, xe tải.",
                "correct": true
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 418,
        "a34": 453,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q554.png",
        "no": 554,
        "index": 554,
        "text": "Xe nào phải nhường đường là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe tải đi thẳng không phải nhường đường vì không vướng xe nào cả; 2. Xe con: Rẽ phải; 3. Xe khách: Đi thẳng nên phải nhường xe con là câu trả lời đúng.",
        "answers": [
            {
                "id": 1,
                "text": "Xe tải.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe khách.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe con.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 419,
        "a34": 454,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q555.png",
        "no": 555,
        "index": 555,
        "text": "Người lái xe có được vượt xe tải để đi thẳng trong trường hợp này không?",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 455,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 189,
        "a2": 420,
        "a34": 456,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q557.png",
        "no": 557,
        "index": 557,
        "text": "Người lái xe dừng tại vị trí nào là đúng quy tắc giao thông?",
        "tip": "Vị trí A vi phạm do dừng bên trái đường.\nBiển số P.131a \"Cấm đỗ xe\" không cấm dừng xe. Do đó vị trí dừng tại B và C là câu trả lời đúng.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 457,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q558.png",
        "no": 558,
        "index": 558,
        "text": "Bạn được dừng xe ở vị trí nào trong tình huống này?",
        "tip": "Biển số P.130 \"Cấm dừng xe và đỗ xe\" và biển phụ báo phạm vi trước và sau biển báo nên không được phép dừng xe tại cả 2 vị trí A và B.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 458,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
                "text": "Xe ô tô con",
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
        "topic": 7,
        "required": 0,
        "a1": 190,
        "a2": 421,
        "a34": 459,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q560.png",
        "no": 560,
        "index": 560,
        "text": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        "tip": "Xe con trong cả hai phía đều đang ở đúng làn đường và đi theo hướng mà đèn xanh đang bật nên đúng quy tắc.\nXe tải trong cả hai phía đều ở sai làn đường so với hướng rẽ nên vi phạm quy tắc giao thông.",
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
        "topic": 7,
        "required": 0,
        "a1": 191,
        "a2": 422,
        "a34": 460,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q561.png",
        "no": 561,
        "index": 561,
        "text": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        "tip": "Xe con và xe mô tô đang ở đúng làn đường, đúng hướng rẽ với tín hiệu đèn xanh nên đúng quy tắc giao thông.\nXe khách và xe tải đang ở sai làn đường so với hướng rẽ nên đều vi phạm.",
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
        "topic": 7,
        "required": 0,
        "a1": 192,
        "a2": 423,
        "a34": 461,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q562.png",
        "no": 562,
        "index": 562,
        "text": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        "tip": "Xe con đi đúng làn đường theo hướng rẽ và tín hiệu đèn.\nXe khách: Sai làn đường và tín hiệu đèn.\nXe tải: Đi thẳng vi phạm đèn đỏ.\nXe mô tô: Đi thẳng vi phạm đèn đỏ.",
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
        "topic": 7,
        "required": 0,
        "a1": 193,
        "a2": 424,
        "a34": 462,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q563.png",
        "no": 563,
        "index": 563,
        "text": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        "tip": "Xe con đúng làn đường và tín hiệu đèn.\nXe khách: Sai làn đường; Xe tải: Sai làn đường và tín hiệu đèn.",
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
                "text": "Xe con, xe tải",
                "correct": false
            },
            {
                "id": 4,
                "text": "Xe khách, xe tải, xe con.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 425,
        "a34": 463,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 464,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q565.png",
        "no": 565,
        "index": 565,
        "text": "Các xe đi theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?",
        "tip": "Xe con và xe tải: Vi phạm tín hiệu đèn;\nXe khách và xe mô tô: Đúng làn đường và đúng tín hiệu đèn.",
        "answers": [
            {
                "id": 1,
                "text": "Xe tải, mô tô.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe khách, mô tô.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Xe tải, xe con.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Mô tô, xe con.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 194,
        "a2": 426,
        "a34": 465,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
                "text": "Xe tải (D), xe con (B).",
                "correct": true
            },
            {
                "id": 4,
                "text": "Xe con (B), xe con (C).",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 427,
        "a34": 466,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q567.png",
        "no": 567,
        "index": 567,
        "text": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\nBiển báo phía trước là đường ưu tiên và biển phụ báo hướng di chuyển của xe mô tô là hướng ưu tiên.\n1. Xe mô tô: Đường ưu tiên;\n2. Xe con: Đường không ưu tiên, bên phải trống;\n3. Xe của bạn: Đường không ưu tiên, bên phải vướng xe con.",
        "answers": [
            {
                "id": 1,
                "text": "Xe của bạn, mô tô, xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con, xe của bạn, mô tô.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Mô tô, xe con, xe của bạn.",
                "correct": true
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 195,
        "a2": 428,
        "a34": 467,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q568.png",
        "no": 568,
        "index": 568,
        "text": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp: Bên phải trống, rẽ phải, đi thẳng, rẽ trái.\n1. Xe con: Rẽ phải; 2. Xe của bạn: Đi thẳng; 3. Mô tô: Rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Xe của bạn, mô tô, xe con.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Xe con, xe của bạn, mô tô.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Mô tô, xe con, xe của bạn.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 196,
        "a2": 429,
        "a34": 468,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 430,
        "a34": 469,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
                "text": "Đi thẳng hoặc rẽ trái.",
                "correct": true
            },
            {
                "id": 2,
                "text": "Đi thẳng hoặc rẽ phải.",
                "correct": false
            },
            {
                "id": 3,
                "text": "Rẽ trái.",
                "correct": false
            },
            {
                "id": 4,
                "text": "Đi thẳng, rẽ phải hoặc rẽ trái.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 431,
        "a34": 470,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 432,
        "a34": 471,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 197,
        "a2": 433,
        "a34": 472,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q573.png",
        "no": 573,
        "index": 573,
        "text": "Bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Ở vạch kẻ đường dành cho người đi bộ có người chuẩn bị sang đường nên phải nhường đường và không được phép vượt.\nNên bạn phải nhường đường cho người đi bộ và rẽ phải sau xe con màu xanh.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 434,
        "a34": 473,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q574.png",
        "no": 574,
        "index": 574,
        "text": "Bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Trước mặt bạn có biển Biển số R.122 \"Dừng lại\" nên phải dừng xe và nhường đường. Nên xe của bạn phải nhường đường cho xe đạp và xe khách.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 435,
        "a34": 474,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q575.png",
        "no": 575,
        "index": 575,
        "text": "Xe nào phải nhường đường trong trường hợp này?",
        "tip": "Biển W.207c \"Giao nhau với đường không ưu tiên\" cho biết xe tải đi từ đường không ưu tiên nên phải nhường đường.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 436,
        "a34": 475,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 476,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 437,
        "a34": 477,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 478,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 479,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
                "text": "Phanh xe giảm tốc độ và đi sát lề đường bên trái.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 480,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 481,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q582.png",
        "no": 582,
        "index": 582,
        "text": "Bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Trước mặt là Biển số W.208 \"Giao nhau với đường ưu tiên\" nên bạn phải giảm tốc độ, quan sát nhường đường ưu tiên nếu có và đi qua ngã tư.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 438,
        "a34": 482,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q583.png",
        "no": 583,
        "index": 583,
        "text": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe đạp: Bên phải trống; 2. Xe mô tô: Đi thẳng; 3. Xe của bạn: Rẽ trái.",
        "answers": [
            {
                "id": 1,
                "text": "Xe của bạn, mô tô, xe đạp.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 439,
        "a34": 483,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q584.png",
        "no": 584,
        "index": 584,
        "text": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe của bạn: Đường ưu tiên; 2. Xe con: Đi không ưu tiên, đi thẳng; 3. Xe tải: Đường không ưu tiên, rẽ trái.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 440,
        "a34": 484,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q585.png",
        "no": 585,
        "index": 585,
        "text": "Xe nào phải nhường đường trong trường hợp này?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe con: Đường ưu tiên; 2. Xe của bạn: Đường không ưu tiên nên phải nhường đường.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 441,
        "a34": 485,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q586.png",
        "no": 586,
        "index": 586,
        "text": "Xe nào phải nhường đường trong trường hợp này?",
        "tip": "Trước mặt xe của bạn có Biển số P.132 \"Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp\" nên phải nhường đường.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 486,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q587.png",
        "no": 587,
        "index": 587,
        "text": "Bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Trước mặt bạn có biển I.423a \"Đường người đi bộ sang ngang\" nên bạn phải giảm tốc độ và nhường đường cho người đi bộ sang đường.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 442,
        "a34": 487,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q588.png",
        "no": 588,
        "index": 588,
        "text": "Xe nào được đi trước trong trường hợp này?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\nXe của bạn trên đường ưu tiên (theo biển báo) nên được đi trước.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 443,
        "a34": 488,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q589.png",
        "no": 589,
        "index": 589,
        "text": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe tải: Bên phải trống; 2. Xe con: Đi thẳng; 3. Xe của bạn: Rẽ trái.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 444,
        "a34": 489,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 490,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q591.png",
        "no": 591,
        "index": 591,
        "text": "Xe nào được đi trước trong trường hợp này?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe tải: Đi thẳng; 2. Xe của bạn: Rẽ trái.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 445,
        "a34": 491,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q592.png",
        "no": 592,
        "index": 592,
        "text": "Xe nào dừng đúng theo quy tắc giao thông?",
        "tip": "Biển số W.211a \"Giao nhau với đường sắt không có rào chắn\" thì các phương tiện đứng cách xa đường sắt tối thiểu 5m nên xe con đúng.",
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
                "text": "Cả 2 xe đều sai.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 198,
        "a2": 446,
        "a34": 492,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q593.png",
        "no": 593,
        "index": 593,
        "text": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe của bạn: Bên phải trống, đi thẳng; 2. Xe tải: Rẽ trái, bên phải trống (khi xe bạn đã đi rồi); 3. Xe đạp: Rẽ trái.",
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 447,
        "a34": 493,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
                "text": "Cả 02 hướng đều được.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 448,
        "a34": 494,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 495,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
                "text": "Quan sát nếu thấy không có tàu thì tăng tốc cho xe vượt qua đường sắt.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Dừng lại trước rào chắn một khoảng cách an toàn.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Ra tín hiệu, yêu cầu người gác chắn tàu kéo chậm Barie để xe bạn qua.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 199,
        "a2": 449,
        "a34": 496,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 497,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 498,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
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
        "topic": 7,
        "required": 0,
        "a1": 0,
        "a2": 0,
        "a34": 499,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    },
    {
        "image": "q600.png",
        "no": 600,
        "index": 600,
        "text": "Trong tình huống dưới đây, xe đầu kéo kéo rơ moóc (xe container) đang rẽ phải, xe con màu xanh đi như thế nào để đảm bảo an toàn?",
        "tip": "Giảm tốc độ chờ xe đầu kéo rẽ phải rồi mới tiếp tục đi.",
        "answers": [
            {
                "id": 1,
                "text": "Vượt về phía bên phải để đi tiếp.",
                "correct": false
            },
            {
                "id": 2,
                "text": "Giảm tốc độ chờ xe đầu kéo rẽ phải, rồi tiếp tục đi.",
                "correct": true
            },
            {
                "id": 3,
                "text": "Vượt về phía bên trái để đi tiếp.",
                "correct": false
            }
        ],
        "topic": 7,
        "required": 0,
        "a1": 200,
        "a2": 450,
        "a34": 500,
        "b1": 1,
        "b2": 1,
        "c": 1,
        "def": 1
    }
]

const licenseType = localStorage.getItem("is_license");
const filterConditions = {
	"A1_2025": (question) => question.a1 > 0,
	"A_2025": (question) => question.a2 > 0,
	"B1_2025": (question) => question.a34 > 0,
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

const filterFunction = filterConditions[licenseType];

var fullQuestions = filterFunction 
    ? originalQuestions.filter(filterFunction)
    : (filterConditions[licenseType] === (() => true) ? originalQuestions : []);


var dangerQuestions = fullQuestions.filter(function (question) {
  return question.required > 0;
})

var topics = []
