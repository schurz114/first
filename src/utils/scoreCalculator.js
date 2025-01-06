export const calculateScore = (formData) => {
  let totalScore = 0;
  
  // 教育背景评分
  const educationScores = {
    '博士': 30,
    '硕士': 25,
    '本科': 20,
    '大专': 15,
  };
  
  // 工作经验评分
  const experienceScore = Math.min(parseInt(formData.yearsOfExperience) * 5, 30);
  
  // 英语水平评分
  const englishScores = {
    '母语': 20,
    '精通': 18,
    '熟练': 15,
    '良好': 12,
    '一般': 8,
  };
  
  // 计算总分
  totalScore += educationScores[formData.education] || 0;
  totalScore += experienceScore;
  totalScore += englishScores[formData.englishLevel] || 0;
  
  const result = {
    score: totalScore,
    feedback: generateFeedback(totalScore),
  };
  
  // 如果是自动推荐模式，添加国家推荐
  if (!formData.targetCountry) {
    result.recommendedCountry = recommendCountry(totalScore, formData.skills);
  }
  
  return result;
};

const generateFeedback = (score) => {
  if (score >= 70) {
    return '您的海外求职竞争力很强，建议积极投递简历。';
  } else if (score >= 50) {
    return '您有一定的海外求职优势，建议针对性提升某些方面后再尝试。';
  } else {
    return '建议先提升相关能力，特别是教育背景、工作经验或语言能力。';
  }
};

// 添加国家推荐逻辑
const recommendCountry = (score, skills) => {
  // 基于分数和技能推荐最适合的国家
  if (score >= 70) {
    if (skills.includes('IT') || skills.includes('软件')) {
      return '美国';
    } else if (skills.includes('金融')) {
      return '新加坡';
    } else {
      return '加拿大';
    }
  } else if (score >= 50) {
    if (skills.includes('教育')) {
      return '澳大利亚';
    } else {
      return '加拿大';
    }
  } else {
    return '建议先提升相关能力后再考虑海外发展';
  }
}; 