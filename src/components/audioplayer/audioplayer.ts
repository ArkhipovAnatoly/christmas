class AudioPlayer {
    private audioPlayer;
    constructor(source: string) {
        this.audioPlayer = new Audio(source);
    }
    public async play(): Promise<void> {
        try {
            await this.audioPlayer.play();
        } catch (e) {}
    }

    public isPlay(): boolean {
        return this.audioPlayer.paused;
    }

    public stop(): void {
        this.audioPlayer.pause();
    }
}

export default AudioPlayer;
