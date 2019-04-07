const state = {
  inputFile: null,
  inputFileInfo: null,
  outputFile: null,
  outputFileInfo: null
}

const mutations = {
  INPUTFILE (state, file) {
    state.inputFile = file
  },
  INPUTFILEINFO (state, info) {
    state.inputFileInfo = info
  },
  OUTPUTFILE (state, file) {
    state.outputFile = file
  },
  OUTPUTFILEINFO (state, info) {
    state.outputFileInfo = info
  }
}

const getters = {}

const actions = {
  updateInputFile ({ commit, state }, file) {
    // do something async
    console.log(state)
    commit('INPUTFILE', file)
  },
  updateInputFileInfo ({ commit, state }, info) {
    // do something async
    console.log(state)
    commit('INPUTFILEINFO', info)
  },
  updateOutputFile ({ commit, state }, file) {
    // do something async
    console.log(state)
    commit('OUTPUTFILE', file)
  },
  updateOutputFileInfo ({ commit, state }, info) {
    // do something async
    console.log(state)
    commit('OUTPUTFILEINFO', info)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
