const state = {
  inputFile: null,
  inputFileInfo: null,
  outputFile: null,
  outputFileInfo: null,
  // ffmpeg [ global_options ] {[ input_file_options ] -i input_url} ... {[ output_file_options ]output_url} ...
  ffmpegOptions: {
    globalOptions: {
      '-y': null,
      '-hide_banner': null
    },
    inputOptions: {
      '-ss': '',
      '-to': ''
    },
    outputOptions: {
      /* Video Options */
      '-r': '', // fps
      '-s': '', // resolution
      '-c:v': '', // codec for video
      '-b:v': '', // bitrate for video, default value is 200K.
      '-bt': '', // bitrate tolerance: 1-pass mode only for video.
      '-crf': '',
      '-pix_fmt': '',
      '-copyinkf': null,
      /* Audio Options */
      '-ar': '', // freq
      // 'q:a': null,
      '-b:a': '', // (-ab) bitrate for video, default value is 128K.
      '-ac': '' // channels
    }
  }
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
