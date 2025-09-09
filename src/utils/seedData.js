import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export const seedDummyData = async () => {
  try {
    // Create dummy sessions with materials, quizzes, videos, and assignments
    const session1 = {
      sessionNumber: 1,
      title: "Sistem Peredaran Darah Manusia",
      description: "Mempelajari organ-organ peredaran darah dan fungsinya",
      teacherId: "demo-teacher-id",
      createdAt: new Date(),
      materials: [
        {
          title: "Organ Peredaran Darah",
          content: "Sistem peredaran darah manusia terdiri dari jantung, pembuluh darah, dan darah. Jantung berfungsi sebagai pompa yang mengalirkan darah ke seluruh tubuh melalui pembuluh darah.",
          type: "material"
        },
        {
          title: "Fungsi Darah",
          content: "Darah berfungsi untuk mengangkut oksigen, nutrisi, dan zat sisa metabolisme. Darah juga berperan dalam sistem kekebalan tubuh.",
          type: "material"
        }
      ],
      videos: [
        {
          title: "Animasi Sistem Peredaran Darah",
          content: "Video animasi yang menjelaskan bagaimana darah beredar dalam tubuh manusia",
          url: "https://example.com/video1",
          type: "video"
        }
      ],
      quizzes: [
        {
          title: "Quiz Sistem Peredaran Darah",
          content: "Quiz untuk menguji pemahaman tentang sistem peredaran darah",
          timeLimit: 300,
          questions: [
            {
              question: "Organ yang berfungsi sebagai pompa dalam sistem peredaran darah adalah?",
              options: ["Jantung", "Paru-paru", "Ginjal", "Hati"],
              correctAnswer: 0,
              explanation: "Jantung berfungsi sebagai pompa yang mengalirkan darah ke seluruh tubuh"
            },
            {
              question: "Pembuluh darah yang membawa darah dari jantung ke seluruh tubuh disebut?",
              options: ["Vena", "Arteri", "Kapiler", "Aorta"],
              correctAnswer: 1,
              explanation: "Arteri adalah pembuluh darah yang membawa darah dari jantung ke seluruh tubuh"
            },
            {
              question: "Berapa ruang yang dimiliki jantung manusia?",
              options: ["2", "3", "4", "5"],
              correctAnswer: 2,
              explanation: "Jantung manusia memiliki 4 ruang: 2 atrium dan 2 ventrikel"
            }
          ],
          type: "quiz"
        }
      ],
      assignments: [
        {
          title: "Gambar Sistem Peredaran Darah",
          content: "Buatlah gambar sistem peredaran darah manusia lengkap dengan keterangannya",
          deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
          type: "assignment"
        }
      ]
    };

    const session2 = {
      sessionNumber: 2,
      title: "Sistem Pernapasan Manusia",
      description: "Mempelajari organ-organ pernapasan dan proses bernapas",
      teacherId: "demo-teacher-id",
      createdAt: new Date(),
      materials: [
        {
          title: "Organ Pernapasan",
          content: "Sistem pernapasan terdiri dari hidung, trakea, bronkus, bronkiolus, dan alveolus. Setiap organ memiliki fungsi khusus dalam proses pernapasan.",
          type: "material"
        },
        {
          title: "Proses Pernapasan",
          content: "Pernapasan terdiri dari inspirasi (menghirup) dan ekspirasi (menghembuskan). Proses ini melibatkan diafragma dan otot-otot antar tulang rusuk.",
          type: "material"
        }
      ],
      videos: [
        {
          title: "Mekanisme Pernapasan",
          content: "Video yang menjelaskan bagaimana proses inspirasi dan ekspirasi terjadi",
          url: "https://example.com/video2",
          type: "video"
        }
      ],
      quizzes: [
        {
          title: "Quiz Sistem Pernapasan",
          content: "Quiz untuk menguji pemahaman tentang sistem pernapasan",
          timeLimit: 300,
          questions: [
            {
              question: "Organ pernapasan tempat terjadinya pertukaran gas adalah?",
              options: ["Trakea", "Bronkus", "Alveolus", "Diafragma"],
              correctAnswer: 2,
              explanation: "Alveolus adalah tempat terjadinya pertukaran oksigen dan karbon dioksida"
            },
            {
              question: "Otot yang berperan penting dalam proses pernapasan adalah?",
              options: ["Jantung", "Diafragma", "Biceps", "Gastrocnemius"],
              correctAnswer: 1,
              explanation: "Diafragma adalah otot utama yang mengatur proses inspirasi dan ekspirasi"
            }
          ],
          type: "quiz"
        }
      ],
      assignments: [
        {
          title: "Laporan Pengamatan Pernapasan",
          content: "Lakukan pengamatan frekuensi pernapasan dalam berbagai aktivitas dan buat laporannya",
          deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          type: "assignment"
        }
      ]
    };

    // Add sessions to Firestore
    await addDoc(collection(db, 'sessions'), session1);
    await addDoc(collection(db, 'sessions'), session2);

    // Create dummy scores and rankings
    const scores = [
      {
        studentId: "demo-student-1",
        sessionId: "session-1",
        score: 85,
        quizTitle: "Quiz Sistem Peredaran Darah",
        completedAt: new Date()
      },
      {
        studentId: "demo-student-2", 
        sessionId: "session-1",
        score: 92,
        quizTitle: "Quiz Sistem Peredaran Darah",
        completedAt: new Date()
      }
    ];

    for (const score of scores) {
      await addDoc(collection(db, 'scores'), score);
    }

    // Create rankings
    const rankings = {
      rankings: [
        { studentId: "demo-student-2", name: "Budi Santoso", totalScore: 92, rank: 1 },
        { studentId: "demo-student-1", name: "Sari Indah", totalScore: 85, rank: 2 }
      ],
      lastUpdated: new Date()
    };

    await setDoc(doc(db, 'rankings', 'overall'), rankings);

    // Create discussion threads
    const discussions = {
      "session-1": {
        messages: [
          {
            userId: "demo-teacher-id",
            userName: "Bu Guru",
            message: "Selamat datang di forum diskusi pertemuan 1! Silakan bertanya jika ada yang kurang jelas.",
            timestamp: new Date()
          },
          {
            userId: "demo-student-1",
            userName: "Sari",
            message: "Bu, apakah jantung bisa lelah seperti otot lainnya?",
            timestamp: new Date()
          }
        ]
      }
    };

    await setDoc(doc(db, 'discussions', 'session-1'), discussions["session-1"]);

    console.log('Dummy data seeded successfully!');
    return true;
  } catch (error) {
    console.error('Error seeding data:', error);
    return false;
  }
};