import {React , useState}from 'react'

function Mister() {
    const [audioPlaying,setAudioPlaying] = useState(true)

    return (
        <>
            <div className="incredibleContainer">
                <div className="beatMachine">
                    <div className="leftSection">
                        <div className="topBeat">Select  Playlist</div>
                        <div className="loContainer">
                            <div className="vibey fontdiner-swanky-regular">Lo-Fi</div>
                            <div className="vibey fontdiner-swanky-regular">CookingSoul</div>
                            <div className="vibey fontdiner-swanky-regular">Chilli_O</div>
                            <div className="vibey fontdiner-swanky-regular">ASMR</div>
                            <div className="vibey fontdiner-swanky-regular">CuZn</div>
                            <div className="vibey fontdiner-swanky-regular">Instrumental</div>

                        </div>
                    </div>
                    <div className="midSection">
                    <p class="djTitle  fontdiner-swanky-regular">n2roVibeCreator</p>
                        <div className="turntable">
                           
                        </div>
                        <div className="playHolder"></div>
                        <p class="djTitle fontdiner-swanky-regular"></p>
                    </div>
                    <div className="rightSection">
                       
                        <div className="keyboard">
                            
                            <div className="kii"></div>
                            <div className="kii"></div>
                            <div className="kii"></div>
                            <div className="kii"></div>
                            <div className="kii"></div>
                            <div className="kii"></div>
                            <div className="kii"></div>
                            <div className="kii"></div>
                            <div className="kii"></div><div className="kii"></div>
                            <div className="kii"></div>
                            <div className="kii"></div>
                        </div>
                        <div className="autoBtn fontdiner-swanky-regular">
                            {audioPlaying? "Audio Off": "Audio On"}
                        </div>
                    </div>

                </div>


                <div className="wutang">
                    <span class="beatKey fontdiner-swanky-regular" onClick="">N</span>
                    <span class="beatKey fontdiner-swanky-regular" onClick="">2</span>
                    <span class="beatKey fontdiner-swanky-regular" onClick="">R</span>
                    <span class="beatKey fontdiner-swanky-regular" onClick="">0</span>
                    <span class="beatKey fontdiner-swanky-regular" onClick="">S</span>
                    <span class="beatKey fontdiner-swanky-regular" onClick="">P</span>
                    <span class="beatKey fontdiner-swanky-regular" onClick="">E</span>
                    <span class="beatKey fontdiner-swanky-regular" onClick="">Q</span>
                </div>
            </div>

        </>
    )
}

export default Mister