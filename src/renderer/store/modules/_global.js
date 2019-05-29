const state = {
  inputFile: null,
  inputFileInfo: null,
  outputFile: null,
  outputFileInfo: null,
  options: null,
  // ffmpeg [ global_options ] {[ input_file_options ] -i input_url} ... {[ output_file_options ]output_url} ...
  ffmpegOptions: {
    globalOptions: {
      overWrite: {
        command: ['-y', '-n'],
        parameter: '0',
        type: 'boolean',
        haveParameter: false
      },
      hideBanner: {
        command: ['-hide_banner', ''],
        parameter: '0',
        type: 'boolean',
        haveParameter: false
      }
    },
    inputOptions: {
      startingTime: {
        command: '-ss',
        parameter: '',
        type: 'string',
        haveParameter: true
      },
      endTime: {
        command: '-to',
        parameter: '',
        type: 'string',
        haveParameter: true
      }
    },
    outputOptions: {
      /* Video Options */
      fps: {
        command: '-r',
        parameter: '',
        type: 'number',
        haveParameter: true
      }, // fps
      resolution: {
        command: '-s',
        parameter: '',
        type: 'string',
        haveParameter: true
      }, // resolution
      videoCodec: {
        command: '-c:v',
        parameter: '',
        type: 'string',
        haveParameter: true
      }, // codec for video
      videoBitrate: {
        command: '-s',
        parameter: '',
        type: 'string',
        haveParameter: true
      }, // bitrate for video, default value is 200K.
      videoBitrateTolerance: {
        command: '-bt:v',
        parameter: '',
        type: 'string',
        haveParameter: true
      }, // bitrate tolerance: 1-pass mode only for video.
      constantRateFactor: {
        command: '-crf',
        parameter: '',
        type: 'number',
        haveParameter: true
      }, // 16-23 lower is better.
      pixelFormat: {
        command: '-pix_fmt',
        parameter: '',
        type: 'string',
        haveParameter: true
      },
      copyInkf: {
        command: ['-copyinkf', ''],
        parameter: '',
        type: 'boolean',
        haveParameter: false
      },
      /* Audio Options */
      audioSampleRate: {
        command: '-ar',
        parameter: '',
        type: 'string',
        haveParameter: true
      }, // freq
      audioCodec: {
        command: '-c:a',
        parameter: '',
        type: 'string',
        haveParameter: true
      }, // codec for audio
      // 'q:a': null,
      audioBitrate: {
        command: '-b:a',
        parameter: '',
        type: 'string',
        haveParameter: true
      }, // (-ab) bitrate for video, default value is 128K.
      audioChannels: {
        command: '-ac',
        parameter: '',
        type: 'number',
        haveParameter: true
      } // channels
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
  },
  FFMPEGOPTIONS (state, options) {
    state.ffmpegOptions = options
  },
  OPTIONS (state, options) {
    state.options = options
  }
}

const getters = {
  getInputFileInfo: function (state) {
    return state.inputFileInfo
  },
  getFFmpegOptions: function (state) {
    return state.ffmpegOptions
  }
}

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
  },
  updateFFmpegOptions ({ commit, state }, options) {
    console.log(state)
    commit('FFMPEGOPTIONS', options)
  },
  updateOptions ({ commit, state }, options) {
    console.log(state)
    commit('OPTIONS', options)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
