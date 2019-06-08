<template>
  <div>
    <div class="mt-2">
      <b-form @submit="onSubmit"
              @reset="onReset"
              v-if="inputFileInfo">
        <div>
          <b-button v-b-toggle.collapse-3
                    variant="info"
                    class="m-1">全局参数</b-button>
          <b-collapse id="collapse-3">
            <b-card class="mx-1 mb-2">
              <b-form-textarea id="input-global-options"
                               no-resize
                               readonly
                               plaintext
                               :value="JSON.stringify(ffoptParse.globalOptions).replace(/\:null/g,'')"></b-form-textarea>
            </b-card>
          </b-collapse>
        </div>
        <div>
          <b-button v-b-toggle.collapse-4
                    variant="info"
                    class="m-1">输入参数</b-button>
          <b-collapse id="collapse-4">
            <b-card class="mx-1 mb-2">
              <div>
                <b-form-group id="fieldset-ss"
                              description="起始时间，格式为[-][HH:]MM:SS[.m...] or [-]S+[.m...]，[]为可省略"
                              label="Starting Time"
                              label-for="input-ss">
                  <b-form-input id="input-ss"
                                v-model="options.inputOptions.startingTime"
                                trim></b-form-input>
                </b-form-group>
              </div>
              <div>
                <b-form-group id="fieldset-to"
                              description="终止时间，格式为[-][HH:]MM:SS[.m...] or [-]S+[.m...]，[]为可省略"
                              label="End Time"
                              label-for="input-to">
                  <b-form-input id="input-to"
                                v-model="options.inputOptions.endTime"
                                trim></b-form-input>
                </b-form-group>
              </div>
            </b-card>
          </b-collapse>
        </div>
        <div>
          <b-button v-b-toggle.collapse-5
                    variant="info"
                    class="m-1">输出参数</b-button>
          <b-collapse id="collapse-5">
            <b-card class="mx-1 mb-2">
              <div>
                <b-form-group id="fieldset-r"
                description="帧率，如23.976、24、25、29.97、30、50、59.94等"
                              label="Frame Per Second"
                              label-for="input-r">
                  <b-form-input id="input-r"
                                v-model="options.outputOptions.fps"
                                trim></b-form-input>
                </b-form-group>
              </div>
              <div>
                <b-form-group id="fieldset-s"
                description="分辨率，如1920x1080、1280x720等，x为英文小写"
                              label="Resolution"
                              label-for="input-s">
                  <b-form-input id="input-s"
                                v-model="options.outputOptions.resolution"
                                trim></b-form-input>
                </b-form-group>
              </div>
              <div>
                <b-form-group id="fieldset-cv"
                description="视频编码器，如x264、prores等。copy为复制流。"
                              label="Video Codec"
                              label-for="input-cv">
                  <b-form-input id="input-cv"
                                v-model="options.outputOptions.videoCodec"
                                trim></b-form-input>
                </b-form-group>
              </div>
              <div>
                <b-form-group id="fieldset-bv"
                description="视频比特率，如2000k、4000k等，单位bps，crf模式下无效"
                              label="Video Bitrate"
                              label-for="input-bv">
                  <b-form-input id="input-bv"
                                v-model="options.outputOptions.videoBitrate"
                                trim></b-form-input>
                </b-form-group>
              </div>
              <div>
                <b-form-group id="fieldset-crf"
                description="CRF模式，恒定质量模式，建议16～24之间，越大画质越好"
                              label="Constant Rate Factor"
                              label-for="input-crf">
                  <b-form-input id="input-crf"
                                v-model="options.outputOptions.constantRateFactor"
                                trim></b-form-input>
                </b-form-group>
              </div>
              <div>
                <b-form-group id="fieldset-pixfmt"
                description="像素格式，例如nv12、yuv422p10le等"
                              label="Pixel Format"
                              label-for="input-pixfmt">
                  <b-form-input id="input-pixfmt"
                                v-model="options.outputOptions.pixelFormat"
                                trim></b-form-input>
                </b-form-group>
              </div>
              <div>
                <b-form-group id="fieldset-ar"
                description="音频采样率，如44100、48000等"
                              label="Audio Sample Rate"
                              label-for="input-ar">
                  <b-form-input id="input-ar"
                                v-model="options.outputOptions.audioSampleRate"
                                trim></b-form-input>
                </b-form-group>
              </div>
              <div>
                <b-form-group id="fieldset-ca"
                description="音频编码器，如aac、mp3等，copy为复制流"
                              label="Audio Codec"
                              label-for="input-ca">
                  <b-form-input id="input-ca"
                                v-model="options.outputOptions.audioCodec"
                                trim></b-form-input>
                </b-form-group>
              </div>
              <div>
                <b-form-group id="fieldset-ba"
                description="音频码率，如192k、320k等，单位bps"
                              label="Audio Bitrate"
                              label-for="input-ba">
                  <b-form-input id="input-ba"
                                v-model="options.outputOptions.audioBitrate"
                                trim></b-form-input>
                </b-form-group>
              </div>
              <div>
                <b-form-group id="fieldset-ac"
                description="音频轨道数"
                              label="Audio Channels"
                              label-for="input-ac">
                  <b-form-input id="input-ac"
                                v-model="options.outputOptions.audioChannels"
                                trim></b-form-input>
                </b-form-group>
              </div>
            </b-card>
          </b-collapse>
        </div>
      </b-form>
      <b-alert show class="mx-1 my-1">{{ ffoptParse }}</b-alert>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      options: {
        globalOptions: {
          overWrite: '0',
          hideBanner: '0'
        },
        inputOptions: {
          startingTime: '',
          endTime: ''
        },
        outputOptions: {
          fps: '',
          resolution: '',
          videoCodec: '',
          videoBitrate: '',
          constantRateFactor: '',
          pixelFormat: '',
          audioSampleRate: '',
          audioCodec: '',
          audioBitrate: '',
          audioChannels: ''
        }
      }
    }
  },
  methods: {
    onSubmit () {
      this.updateFFmpegOptions(this.options)
    },
    onReset () {}
  },
  computed: {
    ...mapState({ }),
    ...mapGetters({
      inputFileInfo: '_global/getInputFileInfo',
      ffmpegOptions: '_global/getFFmpegOptions'
    }),
    ...mapActions({
      updateFFmpegOptions: '_global/updateFFmpegOptions'
    }),
    ffoptParse () {
      var opt = {}
      for (const optionType in this.ffmpegOptions) {
        if (this.ffmpegOptions.hasOwnProperty(optionType)) {
          const optionObject = this.ffmpegOptions[optionType]
          opt[optionType] = []
          // console.log(opt)
          for (const option in this.options[optionType]) {
            // console.log(this.options[optionType][option])
            if (this.options[optionType][option].trim() !== '') {
              console.log(optionObject[option])
              if (optionObject[option]['haveParameter'] === true) {
                // console.log(this.ffmpegOptions)
                console.log(optionObject[option].command)
                console.log(this.options[optionType][option])
                opt[optionType].push(optionObject[option].command)
                opt[optionType].push(this.options[optionType][option])
                // opt[optionType][option.command] = this.options[optionType][option]
              } else {
                // console.log(optionObject[option].command)
                opt[optionType].push(optionObject[option].command[this.options[optionType][option]])
                // opt[optionType][this.ffmpegOptions[optionType][option].command[this.options[optionType][option]]] = ' '
              }
            }
          }
        }
      }
      this.$store.dispatch('_global/updateOptions', opt)
      return opt
    }
  },
  watch: {}
}
</script>

<style>
li {
  font-size: 0.8rem;
}
</style>

