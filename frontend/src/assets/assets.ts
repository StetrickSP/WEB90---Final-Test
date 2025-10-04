import logo from "./logo.png";
import gradientBackground from "./gradientBackground.png";
import user_group from "./user_group.png";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import profile_img_1 from "./profile_img_1.png";
import arrow_icon from "./arrow_icon.svg";
import { SquarePen, Image, Eraser, Scissors, FileText, BookOpenText } from 'lucide-react'
import ai_gen_img_1 from "./ai_gen_img_1.png";
import ai_gen_img_2 from "./ai_gen_img_2.png";
import ai_gen_img_3 from "./ai_gen_img_3.png";

export const assets = {
    logo,
    gradientBackground,
    user_group,
    star_icon,
    star_dull_icon,
    profile_img_1,
    arrow_icon,
};

export const AiToolsData = [
    {
        title: 'AI Essay Writer',
        description: 'Generate high-quality, engaging and educational essays on any topic with our AI writing technology.',
        Icon: SquarePen,
        bg: { from: '#226BFF', to: '#65ADFF' },
        path: '/ai/write-essay'
    },
    {
        title: 'AI Dictionary',
        description: 'Explain the vocabulary, grammar, or phrases you encountered on your learning journey with our AI-powered assistant.',
        Icon: BookOpenText,
        bg: { from: '#B153EA', to: '#E549A3' },
        path: '/ai/dictionary'
    },
    {
        title: 'AI Image Generation',
        description: 'Create stunning visuals with our AI image generation tool. Experience the power of AI.',
        Icon: Image,
        bg: { from: '#1DB059', to: '#14F2BF' },
        path: '/ai/generate-images'
    },
    {
        title: 'CEFR Evaluation',
        description: 'Get your essay, paragraphs or sentences of any language evaluated according to CEFR standards with brief explanations by AI.',
        Icon: FileText,
        bg: { from: '#11A89E', to: '#09D6F2' },
        path: '/ai/review-cefr'
    },
    {
        title: 'Background Removal',
        description: 'Effortlessly remove backgrounds from your images with our AI-driven tool.',
        Icon: Eraser,
        bg: { from: '#F76C1C', to: '#F04A3C' },
        path: '/ai/remove-background'
    },
    {
        title: 'Object Removal',
        description: 'Remove unwanted objects from your images seamlessly with our AI object removal tool.',
        Icon: Scissors,
        bg: { from: '#5C6AF1', to: '#427DF5' },
        path: '/ai/remove-object'
    },
]

export const dummyTestimonialData = [
    {
        image: assets.profile_img_1,
        name: 'John Doe',
        title: 'Marketing Director, TechCorp',
        content: 'ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
        rating: 4,
    },
    {
        image: assets.profile_img_1,
        name: 'Jane Smith',
        title: 'Content Creator, TechCorp',
        content: 'ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.',
        rating: 5,
    },
    {
        image: assets.profile_img_1,
        name: 'David Lee',
        title: 'Content Writer, TechCorp',
        content: 'ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.',
        rating: 4,
    },
]


export const dummyCreationData = [
    {
        "id": 9,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "野菜の値段は日々変わる。",
        "content": "Okay, let's break down the Japanese sentence \"野菜の値段は日々変わる\" and explore its meaning, usage, and some example conversations.\n\n**Meaning:**\n\n*   **野菜 (yasai):** Vegetables\n*   **の (no):**  Possessive particle, linking \"vegetables\" and \"price\"\n*   **値段 (nedan):** Price\n*   **は (wa):** Topic marker, indicating that \"vegetable prices\" is the topic of the sentence.\n*   **日々 (hibi):** Daily, day-to-day, every day\n*   **変わる (kawaru):** To change, to vary\n\nPutting it all together, the sentence means:\n\n**\"The price of vegetables changes daily.\"**  or **\"Vegetable prices vary from day to day.\"**\n\n**How to Use It:**\n\nThis sentence is used to express the fluctuating nature of vegetable prices.  It's a common observation because many factors can influence the cost of produce, such as:\n\n*   **Seasonality:**  Certain vegetables are cheaper when they are in season locally.\n*   **Weather:**  Extreme weather events (droughts, floods, frosts) can damage crops and increase prices.\n*   **Supply and Demand:**  If there's a shortage of a particular vegetable, the price will likely go up.\n*   **Transportation Costs:**  The cost of shipping vegetables from farms to markets can affect the final price.\n\nYou can use this sentence in various contexts, such as:\n\n*   **Explaining why your grocery bill is different each week.**\n*   **Discussing the impact of weather on agriculture.**\n*   **Commenting on the market prices at a farmers' market or supermarket.**\n*   **Giving a reason for eating seasonal vegetables.**\n\n**Example Use Cases and Conversations:**\n\nHere are some example conversations where you might use this sentence:\n\n**Example 1:  Shopping at a supermarket**\n\n*   **Person A:**  \"このトマト、先週より高いね。(Kono tomato, senshuu yori takai ne.)\"  (These tomatoes are more expensive than last week, aren't they?)\n*   **Person B:**  \"うん、野菜の値段は日々変わるからね。(Un, yasai no nedan wa hibi kawaru kara ne.)\" (Yeah, vegetable prices change daily, you know.)\n\n**Example 2: Discussing the news**\n\n*   **Person A:**  \"ニュースで、今年の夏は猛暑で野菜が不作だって言ってたよ。(Nyuusu de, kotoshi no natsu wa mousho de yasai ga fusaku da tte itteta yo.)\" (The news said there's a heatwave this summer and the vegetable harvest is poor.)\n*   **Person B:**  \"やっぱり。野菜の値段は日々変わるから、心配だね。(Yappari. Yasai no nedan wa hibi kawaru kara, shinpai da ne.)\" (I thought so.  Vegetable prices change daily, so I'm worried.)\n\n**Example 3:  Planning a meal**\n\n*   **Person A:**  \"今日の夕食は何にしようかな？(Kyou no yuushoku wa nani ni shiyou kana?)\" (What should we have for dinner tonight?)\n*   **Person B:**  \"スーパーに行って、安い野菜を見てから決めよう。野菜の値段は日々変わるから。(Suupaa ni itte, yasui yasai wo mite kara kimeyou. Yasai no nedan wa hibi kawaru kara.)\" (Let's go to the supermarket and see what vegetables are cheap before we decide. Vegetable prices change daily.)\n\n**Example 4: Talking about Seasonal Eating**\n\n*   **Person A:** \"いつも同じ野菜ばかり食べている。(Itsumo onaji yasai bakari tabeteiru.)\" (I always eat the same vegetables.)\n*   **Person B:** \"旬の野菜を食べるのもいいよ。野菜の値段は日々変わるから、旬のものは安くて美味しい。(Shun no yasai wo taberu no mo ii yo. Yasai no nedan wa hibi kawaru kara, shun no mono wa yasukute oishii.)\" (Eating seasonal vegetables is good too. Vegetable prices change daily, so seasonal vegetables are cheap and delicious.)\n\nIn summary, \"野菜の値段は日々変わる\" is a practical phrase used to acknowledge the fluctuating prices of vegetables, often due to seasonality, weather, and market forces. It's a useful sentence for everyday conversations related to shopping, cooking, and current events.\n",
        "type": "dictionary",
        "publish": false,
        "likes": [],
        "created_at": "2025-07-01T11:09:50.492Z",
        "updated_at": "2025-07-01T11:09:50.492Z"
    },
    {
        "id": 8,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Công nghệ bán dẫn",
        "content": "Chào bạn, rất vui được giải thích về từ \"Stuhl\" trong tiếng Đức. Đây là một từ rất phổ biến nhưng cũng có một nghĩa khác mà người học cần lưu ý để tránh nhầm lẫn.\n\n\"Stuhl\" là một danh từ trong tiếng Đức.\n\n---\n\n### Phần 1: Nghĩa chính và phổ biến nhất - \"Cái ghế\"\n\nĐây là nghĩa mà bạn sẽ gặp trong 95% các trường hợp hàng ngày.\n\n#### A. Giống và Số nhiều (Genus und Plural)\n\n*   **Giống:** Giống đực (maskulin). Vì vậy, mạo từ xác định của nó là **der**.\n    *   **der Stuhl** (cái ghế)\n*   **Số nhiều:** **die Stühle** (những cái ghế). Lưu ý nguyên âm `u` chuyển thành `ü`.\n    *   Ví dụ: `ein Stuhl` (một cái ghế) -> `zwei Stühle` (hai cái ghế).\n\n#### B. Cách dùng trong câu (Verwendung im Satz)\n\nVì là danh từ giống đực, \"der Stuhl\" sẽ biến đổi theo 4 cách (Fälle) trong ngữ pháp tiếng Đức.\n\n1.  **Nominativ (Cách 1 - Chủ ngữ):** Khi \"Stuhl\" là chủ ngữ của câu.\n    *   `Der Stuhl ist alt.` (Cái ghế thì cũ.)\n    *   `Hier steht ein Stuhl.` (Ở đây có (đứng) một cái ghế.)\n\n2.  **Akkusativ (Cách 4 - Tân ngữ trực tiếp):** Khi \"Stuhl\" là đối tượng bị tác động trực tiếp.\n    *   `Ich kaufe **einen Stuhl**.` (Tôi mua một cái ghế.)\n    *   `Er repariert **den Stuhl**.` (Anh ấy sửa cái ghế.)\n\n3.  **Dativ (Cách 3 - Tân ngữ gián tiếp):** Thường đi sau các giới từ chỉ vị trí (wo?) hoặc các động từ yêu cầu Dativ.\n    *   `Die Katze sitzt auf **dem Stuhl**.` (Con mèo đang ngồi trên cái ghế.)\n    *   `Er gibt **dem Stuhl** einen neuen Anstrich.` (Anh ấy sơn lại cái ghế. - *câu này hơi lạ, nhưng đúng ngữ pháp*)\n\n4.  **Genitiv (Cách 2 - Sở hữu cách):** Để chỉ sự sở hữu.\n    *   `Das Bein **des Stuhls** ist kaputt.` (Cái chân của cái ghế bị hỏng.)\n\n#### C. Phân biệt với các từ liên quan\n\n*   **der Stuhl:** Ghế thông thường, có lưng tựa, thường dùng ở bàn ăn, bàn làm việc.\n*   **der Sessel:** Ghế bành. To hơn, thoải mái hơn, có tay vịn, thường bọc nệm và đặt ở phòng khách.\n*   **der Hocker:** Ghế đẩu. Loại ghế nhỏ, không có lưng tựa và không có tay vịn.\n\n---\n\n### Phần 2: Nghĩa thứ hai (Quan trọng cần lưu ý) - \"Phân\"\n\nTrong ngữ cảnh y tế hoặc đôi khi là trang trọng, \"Stuhl\" còn có nghĩa là **phân** (chất thải của người). Từ liên quan là **der Stuhlgang** (việc đi đại tiện).\n\nĐây là một nghĩa hoàn toàn khác và bạn cần dựa vào ngữ cảnh để hiểu.\n\n*   **Ví dụ trong ngữ cảnh y tế:**\n    *   `Der Arzt fragt nach dem **Stuhlgang**.` (Bác sĩ hỏi về việc đi đại tiện.)\n    *   `Der Patient muss eine **Stuhlprobe** abgeben.` (Bệnh nhân phải nộp một mẫu phân.)\n    *   `Blut im **Stuhl** ist ein ernstes Symptom.` (Có máu trong phân là một triệu chứng nghiêm trọng.)\n\n**Lưu ý:** Trong giao tiếp hàng ngày, bạn sẽ gần như không bao giờ gặp nghĩa này trừ khi đang nói về sức khỏe hoặc ở phòng khám bác sĩ. Đừng lo lắng quá về việc nhầm lẫn, vì ngữ cảnh sẽ giúp bạn phân biệt rất rõ ràng.\n\n---\n\n### Phần 3: Một vài thành ngữ (Redewendungen)\n\n*   **Jemandem den Stuhl vor die Tür setzen:**\n    *   *Nghĩa đen:* Đặt ghế của ai đó ra trước cửa.\n    *   *Nghĩa bóng:* Đuổi việc ai đó, đuổi ai đó ra khỏi nhà.\n    *   Ví dụ: `Der Chef hat ihm den Stuhl vor die Tür gesetzt.` (Sếp đã sa thải anh ta.)\n\n*   **Zwischen zwei Stühlen sitzen:**\n    *   *Nghĩa đen:* Ngồi giữa hai cái ghế.\n    *   *Nghĩa bóng:* Lưỡng lự, khó xử, không thể quyết định giữa hai lựa chọn. Tương tự câu \"đứng giữa ngã ba đường\" trong tiếng Việt.\n    *   Ví dụ: `Mit dem Jobangebot aus Berlin und dem aus München sitze ich jetzt zwischen zwei Stühlen.` (Với lời mời làm việc từ Berlin và từ Munich, giờ tôi đang ở trong tình thế khó xử.)\n\n### Tóm lại\n\n1.  **Nghĩa chính:** **der Stuhl** là **cái ghế**. Đây là nghĩa phổ biến nhất.\n2.  **Ngữ pháp:** Là danh từ **giống đực**, số nhiều là **die Stühle**.\n3.  **Nghĩa phụ:** Trong y học, **der Stuhl** có nghĩa là **phân**.\n4.  **Mấu chốt:** Luôn dựa vào **ngữ cảnh** để xác định nghĩa của từ.\n\nHy vọng giải thích này giúp bạn hiểu rõ hơn về từ \"Stuhl\" và cách sử dụng nó",
        "type": "dictionary",
        "publish": false,
        "likes": [],
        "created_at": "2025-07-01T11:08:10.450Z",
        "updated_at": "2025-07-01T11:08:10.450Z"
    },
    {
        "id": 7,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Write an article about AI With Coding in Short (500-800 word).",
        "content": "## AI and Coding: A Symbiotic Partnership Reshaping the Future\n\nArtificial intelligence (AI) and coding, once distinct disciplines, are now deeply intertwined, forging a powerful symbiotic relationship that's revolutionizing industries and accelerating innovation. Understanding this connection is crucial for anyone seeking to navigate the future of technology.\n\nAt its core, AI is the ability of a machine to mimic intelligent human behavior. This is achieved through algorithms, which are essentially sets of instructions meticulously crafted by programmers – coders. Coding, therefore, is the backbone of AI, providing the language and structure necessary to bring these algorithms to life.\n\n**Coding Fuels AI: Building the Foundation**\n\nAI models don't magically appear. They are built, trained, and deployed using code. Here's how:\n\n*   **Data Preprocessing:** Raw data, the lifeblood of AI, is often messy and unusable in its original form. Coders use programming languages like Python with libraries like Pandas and NumPy to clean, transform, and prepare this data for training. This involves handling missing values, removing inconsistencies, and formatting data into a suitable structure.\n*   **Model Development:** Coders utilize programming languages like Python and R, coupled with machine learning libraries like TensorFlow, PyTorch, and scikit-learn, to build and train AI models. These libraries provide pre-built functionalities and tools that simplify the process of creating complex algorithms.\n*   **Deployment and Integration:** Once trained, AI models need to be deployed and integrated into real-world applications. This involves writing code to connect the model to existing systems, handle user input, and present the results in a user-friendly manner.\n*   **Maintenance and Optimization:** AI models are not static entities. They require constant monitoring, maintenance, and optimization to ensure they remain accurate and effective. Coders play a vital role in identifying and addressing performance issues, retraining models with new data, and adapting them to changing requirements.\n\n**AI Empowers Coding: Revolutionizing Development**\n\nThe relationship isn't just one-way. AI is also transforming the way coding is done, making developers more efficient and productive.\n\n*   **Code Completion and Suggestion:** AI-powered tools like GitHub Copilot and Tabnine analyze code context and suggest code snippets, reducing repetitive tasks and accelerating development. These tools learn from vast code repositories and can predict what a developer is likely to write next, saving significant time and effort.\n*   **Automated Testing and Debugging:** AI can automate the process of testing code and identifying bugs. By analyzing code patterns and identifying potential vulnerabilities, AI tools can help developers catch errors early and improve code quality.\n*   **Code Generation:** AI is increasingly capable of generating code from natural language descriptions. This allows developers to focus on the higher-level aspects of software design and leave the more tedious coding tasks to AI.\n*   **Personalized Learning:** AI can personalize the learning experience for aspiring coders by tailoring educational content and providing individualized feedback. This can make learning to code more effective and engaging.\n\n**The Future: Collaboration and Specialization**\n\nThe future of AI and coding is one of increasing collaboration and specialization. As AI becomes more sophisticated, coders will need to focus on higher-level tasks such as designing AI architectures, managing data pipelines, and ensuring ethical considerations are addressed.\n\nThe demand for skilled professionals who understand both AI and coding is rapidly growing. Individuals with this skillset are well-positioned to lead the charge in developing innovative AI-powered solutions across a wide range of industries.\n\n**In conclusion,** AI and coding are not separate entities but rather two sides of the same coin. Coding provides the foundation for AI, while AI empowers coding, leading to a more efficient and innovative development process. Understanding this symbiotic relationship is essential for anyone seeking to thrive in the rapidly evolving landscape of technology. As AI continues to advance, the demand for skilled professionals who can bridge",
        "type": "essay",
        "publish": false,
        "likes": [],
        "created_at": "2025-07-01T11:07:51.312Z",
        "updated_at": "2025-07-01T11:07:51.312Z"
    }
]


export const dummyPublishedCreationData = [
    {
        "id": 1,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Generate an image of A Boy is on Boat , and fishing in the style Anime style.",
        "content": ai_gen_img_1,
        "type": "image",
        "publish": true,
        "likes": [
            "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
            "user_2yaW5EHzeDfQbXdAJWYFnZo2bje"
        ],
        "created_at": "2025-06-19T09:02:25.035Z",
        "updated_at": "2025-06-19T09:58:37.552Z",
    },
    {
        "id": 2,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Generate an image of A Boy Riding a bicycle on road and bicycle is from year 2201  in the style Anime style.",
        "content": ai_gen_img_2,
        "type": "image",
        "publish": true,
        "likes": [
            "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
            "user_2yaW5EHzeDfQbXdAJWYFnZo2bje"
        ],
        "created_at": "2025-06-19T08:16:54.614Z",
        "updated_at": "2025-06-19T09:58:40.072Z",
    },
    {
        "id": 3,
        "user_id": "user_2yaW5EHzeDfQbXdAJWYFnZo2bje",
        "prompt": "Generate an image of a boy riding a car on sky in the style Realistic.",
        "content": ai_gen_img_3,
        "type": "image",
        "publish": true,
        "likes": [
            "user_2yaW5EHzeDfQbXdAJWYFnZo2bje"
        ],
        "created_at": "2025-06-23T11:29:23.351Z",
        "updated_at": "2025-06-23T11:29:44.434Z",
        "__v": 1
    },
]