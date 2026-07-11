/* ==========================================================================
   TYPE DEFINITIONS (JSDoc)
   This project ships as dependency-free vanilla JavaScript (see README —
   the sandbox this was built in had no network access to npm/CDNs), so
   there is no TypeScript compiler in the loop. These JSDoc typedefs
   describe the exact same data shapes the spec's TS interfaces would,
   and editors like VS Code will type-check against them for free.
   ========================================================================== */

/**
 * @typedef {Object} AnswerOption
 * @property {string} id
 * @property {string} text
 * @property {boolean} correct
 * @property {string} [feedback] - shown only when this wrong option is picked
 */

/**
 * @typedef {Object} Question
 * @property {string} id - unique question id, e.g. "c1-s1-q1"
 * @property {1|2|3} chapterId
 * @property {1|2|3|4|5} stageId
 * @property {number} questionNumber - 1-25 within the chapter
 * @property {string} topic
 * @property {"foundation"|"developing"|"challenge"} difficulty
 * @property {"mcq"|"select"|"order"|"numeric"|"tree"} type
 * @property {string} text
 * @property {string} [hint]
 * @property {number} points
 * @property {AnswerOption[]} [options] - for type "mcq"
 * @property {{id:string,text:string,correct:boolean}[]} [selectOptions] - for type "select"
 * @property {{id:string,text:string}[]} [orderItems] - for type "order"
 * @property {string[]} [correctOrder] - ids in correct order, for type "order"
 * @property {string} [answer] - for type "numeric"
 * @property {string[]} [acceptableAnswers] - for type "numeric"
 * @property {number} [treeSlots] - for type "tree"
 * @property {string[]} [treeCorrectValues] - for type "tree"
 * @property {string} correctExplanation
 * @property {string[]} solutionSteps
 * @property {string} [incorrectGenericFeedback]
 */

/**
 * @typedef {Object} Stage
 * @property {number} id
 * @property {string} name
 * @property {string} icon
 */

/**
 * @typedef {Object} Chapter
 * @property {1|2|3} id
 * @property {string} slug
 * @property {string} title
 * @property {string} land
 * @property {string} icon
 * @property {string} crystalName
 * @property {string} crystalColor
 * @property {string} tagline
 * @property {string[]} topics
 * @property {() => Question[]} questions
 */

/**
 * @typedef {Object} StageResult
 * @property {number} chapterId
 * @property {number} stageId
 * @property {number} correctCount
 * @property {number} totalQuestions
 * @property {number} pointsEarned
 * @property {number} pointsPossible
 * @property {string[]} incorrectQuestionIds
 * @property {number} hintsUsed
 * @property {number} completedAt - epoch ms
 */

/**
 * @typedef {Object} ChapterResult
 * @property {number} chapterId
 * @property {boolean} crystalCollected
 * @property {number} accuracy - 0-100
 * @property {number} totalPoints
 * @property {number} maxPoints
 */

/**
 * @typedef {Object} Badge
 * @property {string} id
 * @property {string} name
 * @property {string} icon
 * @property {string} description
 * @property {boolean} unlocked
 */

/**
 * @typedef {Object} LearnerProgress
 * @property {string} learnerName
 * @property {string} avatar
 * @property {"sequential"|"free"} mode
 * @property {Object.<string, StageResult>} stageResults - keyed "c{chapterId}-s{stageId}"
 * @property {Object.<string, boolean>} crystals - keyed "c{chapterId}"
 * @property {Object.<string, number>} hintsUsedByQuestion
 * @property {Object.<string, boolean>} answeredCorrectlyFirstTry
 * @property {string[]} badgeIds
 * @property {boolean} soundOn
 * @property {boolean} reducedMotion
 * @property {number} createdAt
 */
window.MAQ = window.MAQ || {};
