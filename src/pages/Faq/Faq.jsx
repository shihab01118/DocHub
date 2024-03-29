import { Helmet } from "react-helmet-async";
import Banner from "../../components/Shared/Banner/Banner";
import NewsLetter from "../../components/Shared/NewsLetter/NewsLetter";
import SectionContainer from "../../components/Shared/Container/SectionContainer";
import { Accordion } from "react-headless-accordion";
import QnA from "../../components/Faq/QnA";

const Faq = () => {
  return (
    <>
      <Helmet>
        <title>DocHub - Faq</title>
      </Helmet>
      <section>
        <Banner heading="Frequently Asked Questions" pageTitle="Faq" />
        <SectionContainer>
          <div className="space-y-16">
            <div>
              <h2 className="text-dark text-2xl font-bold mb-7">Dental Care</h2>
              <Accordion>
                {dental?.map((item) => (
                  <QnA
                    key={item?.id}
                    question={item?.ques}
                    answer={item?.ans}
                  />
                ))}
              </Accordion>
            </div>
            <div>
              <h2 className="text-dark text-2xl font-bold mb-7">Cardiology</h2>
              <Accordion>
                {cardiology?.map((item) => (
                  <QnA
                    key={item?.id}
                    question={item?.ques}
                    answer={item?.ans}
                  />
                ))}
              </Accordion>
            </div>
            <div>
              <h2 className="text-dark text-2xl font-bold mb-7">Diagonosis</h2>
              <Accordion>
                {diagonosis?.map((item) => (
                  <QnA
                    key={item?.id}
                    question={item?.ques}
                    answer={item?.ans}
                  />
                ))}
              </Accordion>
            </div>
          </div>
        </SectionContainer>
        <NewsLetter />
      </section>
    </>
  );
};

export default Faq;

const dental = [
  {
    id: 1,
    ques: "What type of toothbrush and toothpaste should I use?",
    ans: "For optimal oral hygiene, choose a toothbrush with soft bristles and a small head to reach all areas of your mouth comfortably. Select a fluoride toothpaste endorsed by dental associations to prevent cavities and maintain healthy gums. Always brush for two minutes, twice daily, and replace your toothbrush every three months.",
  },
  {
    id: 2,
    ques: "Do I really need to floss?",
    ans: "Yes, flossing is essential for maintaining healthy teeth and gums. It helps remove plaque and food particles between teeth and along the gumline, areas where your toothbrush may not reach effectively. Regular flossing can prevent cavities, gum disease, and bad breath. Aim to floss at least once a day for optimal oral health.",
  },
  {
    id: 3,
    ques: "What are early signs of dental trouble?",
    ans: "Early signs of dental trouble include tooth sensitivity to hot or cold, persistent bad breath, swollen or bleeding gums, tooth pain or discomfort, and visible signs of decay or discoloration on the teeth. Regular dental check-ups can help detect and address these issues before they worsen.",
  },
  {
    id: 4,
    ques: "Why do I need dental test?",
    ans: "Dental tests are crucial for detecting oral health issues early, allowing for timely intervention and treatment. Regular check-ups help prevent cavities, gum disease, and other dental problems. Additionally, dental exams can uncover underlying issues such as oral cancer, ensuring overall health and well-being.",
  },
  {
    id: 5,
    ques: "How do fillings work?",
    ans: "Fillings work by repairing teeth damaged by decay or trauma. During the procedure, the dentist removes the decayed portion of the tooth and fills the cavity with a durable material, such as composite resin or amalgam. This seals off the tooth, restores its function, and prevents further decay.",
  },
];

const cardiology = [
  {
    id: 1,
    ques: "What are the common symptoms of heart disease?",
    ans: "Common symptoms of heart disease include chest pain, shortness of breath, fatigue, dizziness, and palpitations. These symptoms may vary in intensity and duration depending on the type and severity of the condition.",
  },
  {
    id: 2,
    ques: "How can I prevent heart disease?",
    ans: "You can prevent heart disease by adopting a healthy lifestyle, including eating a balanced diet rich in fruits, vegetables, and whole grains, engaging in regular physical activity, managing stress, avoiding tobacco use, and getting regular check-ups.",
  },
  {
    id: 3,
    ques: "What is cholesterol and why is it important?",
    ans: "Cholesterol is a waxy, fat-like substance found in the blood. While it's essential for cell function, high levels can lead to plaque buildup in arteries, increasing the risk of heart disease, heart attack, and stroke.",
  },
  {
    id: 4,
    ques: "What causes high blood pressure?",
    ans: "High blood pressure can be caused by various factors, including genetics, unhealthy lifestyle habits such as poor diet and lack of exercise, stress, excessive alcohol consumption, smoking, and certain medical conditions.",
  },
  {
    id: 5,
    ques: "What are the treatment options for heart disease?",
    ans: "Treatment options for heart disease may include lifestyle changes such as diet and exercise, medication to manage symptoms and lower risk factors, medical procedures such as angioplasty or bypass surgery, and cardiac rehabilitation programs tailored to individual needs.",
  },
];

const diagonosis = [
  {
    id: 1,
    ques: "What tests are used for diagnosing heart disease?",
    ans: "Diagnostic tests for heart disease include electrocardiogram (ECG or EKG), stress tests, echocardiogram, cardiac catheterization, cardiac MRI, and blood tests to measure cholesterol, triglycerides, and other biomarkers.",
  },
  {
    id: 2,
    ques: "How accurate are diagnostic tests for heart disease?",
    ans: "Diagnostic tests for heart disease are highly accurate when performed by trained professionals and interpreted correctly. However, no test is perfect, and results may vary based on individual factors and the specific test used.",
  },
  {
    id: 3,
    ques: "What is the role of imaging tests in heart disease diagnosis?",
    ans: "Imaging tests such as echocardiograms and cardiac MRI play a crucial role in diagnosing heart disease by providing detailed images of the heart's structure and function. These tests help identify abnormalities, assess cardiac function, and guide treatment decisions.",
  },
  {
    id: 4,
    ques: "Are there any risks associated with diagnostic tests for heart disease?",
    ans: "While diagnostic tests for heart disease are generally safe, some procedures carry minimal risks, such as allergic reactions to contrast dye used in imaging tests, bleeding or infection at the catheter insertion site, and rare complications like arrhythmias.",
  },
  {
    id: 5,
    ques: "How long does it take to get results from heart disease diagnostic tests?",
    ans: "The time it takes to receive results from heart disease diagnostic tests varies depending on the specific test performed, laboratory processing times, and healthcare provider availability. In general, most results are available within a few days to a week.",
  },
];
