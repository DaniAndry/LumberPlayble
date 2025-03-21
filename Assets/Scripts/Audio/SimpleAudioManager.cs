using UnityEngine;

public class SimpleAudioManager : MonoBehaviour
{
    public static SimpleAudioManager Instance { get; private set; }

    [SerializeField] private AudioClip progressBarSound;
    [SerializeField] private AudioClip conveyorAnimationSound;
    [SerializeField] private AudioClip logLoadSound;
    [SerializeField] private AudioClip buttonClickSound;
    [SerializeField] private AudioClip houseAppearSound;

    private AudioSource audioSource;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
            audioSource = gameObject.AddComponent<AudioSource>();
        }
        else
        {
            Destroy(gameObject);
        }
    }

    public void PlayProgressBarSound()
    {
        PlaySound(progressBarSound);
    }

    public void PlayConveyorAnimationSound()
    {
        PlaySound(conveyorAnimationSound);
    }

    public void PlayLogLoadSound()
    {
        PlaySound(logLoadSound);
    }

    public void PlayButtonClickSound()
    {
        PlaySound(buttonClickSound);
    }

    public void PlayHouseAppearSound()
    {
        PlaySound(houseAppearSound);
    }

    private void PlaySound(AudioClip clip)
    {
        if (clip != null)
        {
            audioSource.PlayOneShot(clip);
        }
    }
}
